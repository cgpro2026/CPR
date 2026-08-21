import { useCallback, useMemo, useState } from "react";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  Node,
  Edge,
  MarkerType,
  NodeProps,
  Handle,
  Position,
  useNodesState,
  useEdgesState,
} from "reactflow";
import "reactflow/dist/style.css";
import { processes, networkEdges, nodePositions, processDescriptions } from "./data";
import { CLR_FINALISTICO, CLR_GERENCIAIS, CLR_SUPORTE } from "./Dashboard";

const NAVY  = CLR_FINALISTICO; // #1B3A6B  dark navy
const TEAL  = CLR_GERENCIAIS;  // #0F766E  dark teal
const AMBER = CLR_SUPORTE;     // #B45309  dark amber

const clsColor: Record<string, string> = {
  "Finalístico": NAVY,
  "Gerenciais":  TEAL,
  "Suporte":     AMBER,
};
const statusDot: Record<string, string> = {
  Monitorado: "#60A5FA",
  Mapeado: "#34D399",
  Previsto: "#FBBF24",
};

// ─── Custom Node ──────────────────────────────────────────────────────────────
function ProcessNode({ data, selected }: NodeProps) {
  const bg = clsColor[data.classificacao] ?? NAVY;
  const dot = statusDot[data.status] ?? "#ccc";
  return (
    <>
      <Handle type="target" position={Position.Left} style={{ background: "#fff", border: `2px solid ${bg}`, width: 8, height: 8 }} />
      <div
        className="rounded-lg text-white text-center shadow-md transition-all"
        style={{
          backgroundColor: bg,
          width: 140,
          padding: "8px 10px",
          outline: selected ? "2px solid white" : "none",
          outlineOffset: 2,
          boxShadow: selected ? `0 0 0 3px ${bg}88, 0 8px 24px rgba(0,0,0,0.25)` : "0 2px 8px rgba(0,0,0,0.18)",
        }}
      >
        <div className="font-mono text-[9px] opacity-60 mb-0.5">{data.id}</div>
        <div className="text-[10px] font-bold leading-tight">{data.label}</div>
        <div className="flex items-center justify-center gap-1 mt-1.5">
          <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: dot }} />
          <span className="text-[8px] opacity-80">{data.status}</span>
        </div>
      </div>
      <Handle type="source" position={Position.Right} style={{ background: "#fff", border: `2px solid ${bg}`, width: 8, height: 8 }} />
    </>
  );
}

const nodeTypes = { processNode: ProcessNode };

const edgeColor: Record<string, string> = {
  sequential:     NAVY,
  administrative: TEAL,
  support:        AMBER,
};

// ─── Build RF nodes & edges ───────────────────────────────────────────────────
function buildGraph(highlightId: string | null) {
  const nodes: Node[] = processes
    .filter((p) => nodePositions[p.id])
    .map((p) => ({
      id: p.id,
      type: "processNode",
      position: nodePositions[p.id],
      data: {
        id: p.id,
        label: p.processo.length > 40 ? p.processo.slice(0, 38) + "…" : p.processo,
        classificacao: p.classificacao,
        status: p.status,
      },
      selected: p.id === highlightId,
    }));

  const edges: Edge[] = networkEdges
    .filter((e) => nodePositions[e.source] && nodePositions[e.target])
    .map((e, i) => {
      const isConnected = highlightId && (e.source === highlightId || e.target === highlightId);
      const color = edgeColor[e.type ?? "sequential"];
      return {
        id: `e-${i}`,
        source: e.source,
        target: e.target,
        label: e.label,
        labelStyle: { fontSize: 9, fill: "#6b7280" },
        labelBgStyle: { fill: "white", fillOpacity: 0.85 },
        labelBgPadding: [3, 4] as [number, number],
        style: {
          stroke: isConnected ? color : highlightId ? color + "44" : color + "88",
          strokeWidth: isConnected ? 2.5 : 1.5,
        },
        markerEnd: {
          type: MarkerType.ArrowClosed,
          color: isConnected ? color : highlightId ? color + "66" : color + "99",
          width: 14,
          height: 14,
        },
        animated: !!isConnected,
        zIndex: isConnected ? 10 : 1,
      };
    });

  return { nodes, edges };
}

// ─── Legend ───────────────────────────────────────────────────────────────────
function Legend() {
  return (
    <div className="absolute bottom-10 left-3 bg-white border border-[#D0D7E3] rounded-lg p-3 shadow-sm z-10 text-xs">
      <p className="font-bold text-[#1B3A6B] mb-2 uppercase tracking-wide text-[10px]">Legenda</p>
      <div className="flex flex-col gap-1.5 mb-3">
        {[["Finalístico", NAVY], ["Gerenciais", TEAL], ["Suporte", AMBER]].map(([l, c]) => (
          <div key={l} className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-sm shrink-0" style={{ backgroundColor: c }} />
            <span className="text-[#374151]">{l}</span>
          </div>
        ))}
      </div>
      <p className="font-bold text-[#1B3A6B] mb-1.5 uppercase tracking-wide text-[10px]">Relações</p>
      {[["Sequencial", NAVY], ["Administrativa", TEAL], ["Suporte", AMBER]].map(([l, c]) => (
        <div key={l} className="flex items-center gap-2 mb-1">
          <svg width="24" height="8"><line x1="0" y1="4" x2="20" y2="4" stroke={c} strokeWidth="2" markerEnd="url(#arr)" /></svg>
          <span className="text-[#374151]">{l}</span>
        </div>
      ))}
      <div className="flex items-center gap-2 mt-2">
        {[["Monitorado", "#60A5FA"], ["Mapeado", "#34D399"], ["Previsto", "#FBBF24"]].map(([l, c]) => (
          <div key={l} className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: c }} />
            <span className="text-[10px] text-[#6b7280]">{l}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Info Card ────────────────────────────────────────────────────────────────
function InfoCard({ id, onClose }: { id: string; onClose: () => void }) {
  const p = processes.find(x => x.id === id);
  if (!p) return null;
  const desc = processDescriptions[id] ?? "Descrição não cadastrada.";
  const connected = networkEdges.filter(e => e.source === id || e.target === id);
  const incoming = connected.filter(e => e.target === id).map(e => e.source);
  const outgoing = connected.filter(e => e.source === id).map(e => e.target);

  return (
    <div className="absolute top-3 right-3 w-72 bg-white border border-[#D0D7E3] rounded-lg shadow-xl z-10 overflow-hidden">
      <div className="bg-[#1B3A6B] text-white px-4 py-3 flex items-start gap-2">
        <div className="flex-1 min-w-0">
          <p className="font-mono text-[10px] text-[#9fb4cc]">{p.id}</p>
          <p className="font-bold text-sm leading-tight">{p.processo}</p>
        </div>
        <button onClick={onClose} className="text-white/60 hover:text-white text-xl leading-none mt-0.5">×</button>
      </div>
      <div className="p-4">
        <div className="flex flex-wrap gap-1 mb-3">
          <span className="text-[10px] bg-[#F3F4F6] text-[#374151] px-2 py-0.5 rounded">{p.secretaria}</span>
          <span className="text-[10px] bg-[#F3F4F6] text-[#374151] px-2 py-0.5 rounded">{p.ator}</span>
          {p.prioridade !== "Não prioritário" && (
            <span className="text-[10px] bg-[#1B3A6B] text-white px-2 py-0.5 rounded">{p.prioridade}</span>
          )}
        </div>
        <p className="text-xs text-[#374151] leading-relaxed line-clamp-4">{desc}</p>
        {(incoming.length > 0 || outgoing.length > 0) && (
          <div className="mt-3 border-t border-[#E8EDF4] pt-3 space-y-1.5">
            {incoming.length > 0 && (
              <div>
                <p className="text-[9px] font-bold text-[#9ca3af] uppercase mb-1">Recebe de</p>
                {incoming.map(id => (
                  <p key={id} className="text-[10px] text-[#374151] font-mono">{id}</p>
                ))}
              </div>
            )}
            {outgoing.length > 0 && (
              <div>
                <p className="text-[9px] font-bold text-[#9ca3af] uppercase mb-1">Alimenta</p>
                {outgoing.map(id => (
                  <p key={id} className="text-[10px] text-[#374151] font-mono">{id}</p>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Rede Component ───────────────────────────────────────────────────────────
export default function Rede() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const { nodes: initialNodes, edges: initialEdges } = useMemo(() => buildGraph(null), []);
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);

  const liveEdges = useMemo(() => buildGraph(selectedId).edges, [selectedId]);

  const onNodeClick = useCallback((_: any, node: Node) => {
    setSelectedId(prev => prev === node.id ? null : node.id);
  }, []);

  const onPaneClick = useCallback(() => setSelectedId(null), []);

  return (
    <div className="bg-white border border-[#D0D7E3] rounded-lg overflow-hidden" style={{ height: 620 }}>
      {/* Toolbar */}
      <div className="bg-[#F9FAFB] border-b border-[#E8EDF4] px-4 py-2.5 flex items-center gap-3">
        <span className="text-xs font-bold text-[#1B3A6B] uppercase tracking-wide">Rede de Processos MIDR</span>
        <span className="text-[10px] text-[#9ca3af]">Clique em um nó para destacar suas conexões · Arraste para reposicionar · Scroll para zoom</span>
        {selectedId && (
          <button onClick={() => setSelectedId(null)} className="ml-auto text-xs text-[#1B3A6B] underline hover:no-underline">
            Limpar seleção
          </button>
        )}
      </div>

      <div className="relative" style={{ height: "calc(100% - 44px)" }}>
        <ReactFlow
          nodes={nodes.map(n => ({ ...n, selected: n.id === selectedId }))}
          edges={liveEdges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onNodeClick={onNodeClick}
          onPaneClick={onPaneClick}
          nodeTypes={nodeTypes}
          fitView
          fitViewOptions={{ padding: 0.15 }}
          minZoom={0.3}
          maxZoom={2}
          proOptions={{ hideAttribution: true }}
        >
          <Background color="#E8EDF4" gap={20} />
          <Controls showInteractive={false} style={{ bottom: 80, right: 8, left: "auto" }} />
          <MiniMap
            nodeColor={(n) => clsColor[(n.data as any)?.classificacao] ?? AMBER}
            maskColor="rgba(244,246,249,0.7)"
            style={{ bottom: 8, right: 8 }}
            nodeStrokeWidth={0}
          />
        </ReactFlow>

        <Legend />
        {selectedId && <InfoCard id={selectedId} onClose={() => setSelectedId(null)} />}
      </div>
    </div>
  );
}
