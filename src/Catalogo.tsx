import { useState } from "react";
import { Process, processDescriptions } from "./data";

const STATUS_BADGE: Record<string, string> = {
  Monitorado: "bg-blue-100 text-blue-800",
  Mapeado: "bg-emerald-100 text-emerald-800",
  Previsto: "bg-amber-100 text-amber-800",
};

type Filter = { classificacao: string; ano: string; status: string; secretaria: string; ator: string };
type Props = {
  processes: Process[];
  filter: Filter;
  setFilter: (f: Partial<Filter>) => void;
  activeMacro: string | null;
  setActiveMacro: (m: string | null) => void;
  allProcesses: Process[];
};

function FilterSelect({ label, value, onChange, options }: {
  label: string; value: string; onChange: (v: string) => void; options: string[];
}) {
  return (
    <div className="flex flex-col min-w-[120px]">
      <label className="text-xs font-semibold text-[#4a5568] block mb-1">{label}</label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full text-sm border border-[#D0D7E3] rounded px-2 py-1.5 bg-white text-[#374151] focus:outline-none focus:ring-2 focus:ring-[#1B3A6B]/30 appearance-none cursor-pointer pr-5"
        >
          {options.map((o) => <option key={o}>{o}</option>)}
        </select>
        <span className="pointer-events-none absolute right-1.5 top-1/2 -translate-y-1/2 text-[#9ca3af] text-xs">▾</span>
      </div>
    </div>
  );
}

// ─── Detail Panel ─────────────────────────────────────────────────────────────
function DetailPanel({ process, onClose }: { process: Process; onClose: () => void }) {
  const [activeSection, setActiveSection] = useState<"descricao" | "mapa" | "manual">("descricao");
  const desc = processDescriptions[process.id] ?? "Descrição ainda não cadastrada para este processo.";

  const clsColor = process.classificacao === "Finalístico" ? "#1B3A6B" :
    process.classificacao === "Gerenciais" ? "#6B8E2E" : "#6B7280";

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/30 z-40 backdrop-blur-[1px]" onClick={onClose} />

      {/* Panel */}
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-[520px] bg-white shadow-2xl z-50 flex flex-col">
        {/* Header */}
        <div className="bg-[#1B3A6B] text-white px-5 py-4 flex items-start gap-3">
          <div className="flex-1 min-w-0">
            <p className="font-mono text-xs text-[#9fb4cc] mb-0.5">{process.id}</p>
            <p className="font-bold text-base leading-snug">{process.processo}</p>
            {process.subprocesso && (
              <p className="text-xs text-[#9fb4cc] mt-0.5">{process.subprocesso}</p>
            )}
          </div>
          <button onClick={onClose} className="text-white/70 hover:text-white text-2xl leading-none shrink-0 mt-0.5">×</button>
        </div>

        {/* Meta chips */}
        <div className="px-5 py-3 flex flex-wrap gap-2 border-b border-[#E8EDF4] bg-[#F9FAFB]">
          <Chip label="Macroprocesso" value={process.macroprocesso} />
          <Chip label="Classificação" value={process.classificacao} color={clsColor} />
          <Chip label="Secretaria" value={process.secretaria} />
          <Chip label="Ator" value={process.ator} />
          {process.ano && <Chip label="Ano" value={String(process.ano)} />}
          <Chip label="Prioridade" value={process.prioridade} highlight={process.prioridade !== "Não prioritário"} />
          <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full self-center ${STATUS_BADGE[process.status]}`}>
            {process.status}
          </span>
        </div>

        {/* Section tabs */}
        <div className="flex border-b border-[#E8EDF4] bg-white">
          {(["descricao", "mapa", "manual"] as const).map((s) => {
            const labels = { descricao: "Descrição", mapa: "Mapa do Processo", manual: "Manual" };
            return (
              <button
                key={s}
                onClick={() => setActiveSection(s)}
                className={`flex-1 py-2.5 text-xs font-semibold transition-colors ${
                  activeSection === s
                    ? "text-[#1B3A6B] border-b-2 border-[#1B3A6B]"
                    : "text-[#6b7280] hover:text-[#374151]"
                }`}
              >
                {labels[s]}
              </button>
            );
          })}
        </div>

        {/* Section content */}
        <div className="flex-1 overflow-y-auto p-5">
          {activeSection === "descricao" && (
            <div>
              <h4 className="text-xs uppercase font-bold text-[#9ca3af] tracking-widest mb-3">Sobre o processo</h4>
              <p className="text-sm text-[#374151] leading-relaxed">{desc}</p>

              {/* Related processes hint */}
              <div className="mt-5 border border-[#E8EDF4] rounded-lg p-3">
                <p className="text-xs font-bold text-[#1B3A6B] mb-1.5">Processos relacionados</p>
                <p className="text-xs text-[#6b7280]">
                  Visualize as conexões com outros processos na aba <strong>Rede de Processos</strong>.
                </p>
              </div>
            </div>
          )}

          {activeSection === "mapa" && (
            <div className="flex flex-col items-center gap-4">
              <div className="w-full border-2 border-dashed border-[#D0D7E3] rounded-xl bg-[#F9FAFB] flex flex-col items-center justify-center py-16 gap-3">
                <div className="w-16 h-16 rounded-full bg-[#EEF2FF] flex items-center justify-center text-3xl">🗺️</div>
                <p className="text-sm font-semibold text-[#374151]">Mapa do Processo</p>
                <p className="text-xs text-[#9ca3af] text-center max-w-[260px]">
                  O mapa em formato JPEG/PNG será exibido aqui após ser inserido.
                </p>
                <label className="mt-2 bg-[#1B3A6B] text-white text-xs font-semibold px-4 py-2 rounded cursor-pointer hover:bg-[#132d54] transition-colors">
                  Inserir Mapa (JPEG/PNG)
                  <input type="file" accept="image/jpeg,image/png" className="hidden" />
                </label>
              </div>
              <p className="text-[10px] text-[#9ca3af] text-center">
                Formatos aceitos: JPEG, PNG · Tamanho máximo recomendado: 10 MB
              </p>
            </div>
          )}

          {activeSection === "manual" && (
            <div className="flex flex-col items-center gap-4">
              <div className="w-full border-2 border-dashed border-[#D0D7E3] rounded-xl bg-[#F9FAFB] flex flex-col items-center justify-center py-16 gap-3">
                <div className="w-16 h-16 rounded-full bg-[#FFF7ED] flex items-center justify-center text-3xl">📄</div>
                <p className="text-sm font-semibold text-[#374151]">Manual do Processo</p>
                <p className="text-xs text-[#9ca3af] text-center max-w-[260px]">
                  O manual em formato PDF será exibido aqui após ser inserido.
                </p>
                <label className="mt-2 bg-[#1B3A6B] text-white text-xs font-semibold px-4 py-2 rounded cursor-pointer hover:bg-[#132d54] transition-colors">
                  Inserir Manual (PDF)
                  <input type="file" accept="application/pdf" className="hidden" />
                </label>
              </div>
              <p className="text-[10px] text-[#9ca3af] text-center">
                Formato aceito: PDF · Tamanho máximo recomendado: 25 MB
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

function Chip({ label, value, color, highlight }: { label: string; value: string; color?: string; highlight?: boolean }) {
  return (
    <div className="flex flex-col">
      <span className="text-[9px] text-[#9ca3af] uppercase font-bold leading-none mb-0.5">{label}</span>
      <span
        className="text-xs font-semibold px-2 py-0.5 rounded"
        style={highlight ? { backgroundColor: "#1B3A6B", color: "white" } : color ? { color } : { color: "#374151", backgroundColor: "#F3F4F6" }}
      >
        {value}
      </span>
    </div>
  );
}

// ─── Main Catalog ─────────────────────────────────────────────────────────────
export default function Catalogo({ processes, filter, setFilter, activeMacro, setActiveMacro, allProcesses }: Props) {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<Process | null>(null);

  const anos = ["Todos", ...Array.from(new Set(allProcesses.map(p => p.ano).filter(Boolean))).sort().map(String)];
  const classificacoes = ["Todos", ...Array.from(new Set(allProcesses.map(p => p.classificacao)))];
  const statuses = ["Todos", ...Array.from(new Set(allProcesses.map(p => p.status)))];

  const filtered = processes.filter(p => {
    if (filter.classificacao !== "Todos" && p.classificacao !== filter.classificacao) return false;
    if (filter.ano           !== "Todos" && String(p.ano)    !== filter.ano)          return false;
    if (filter.status        !== "Todos" && p.status         !== filter.status)        return false;
    if (filter.secretaria    !== "Todos" && p.secretaria     !== filter.secretaria)    return false;
    if (filter.ator          !== "Todos" && p.ator           !== filter.ator)          return false;
    if (search && !`${p.id} ${p.processo} ${p.macroprocesso} ${p.ator} ${p.subprocesso}`.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="flex flex-col gap-4">
      {/* Filters */}
      <div className="bg-white border border-[#D0D7E3] rounded-lg p-4 flex flex-wrap gap-3 items-end">
        <div className="flex-1 min-w-44">
          <label className="text-xs font-semibold text-[#4a5568] block mb-1">Buscar</label>
          <input
            type="text"
            placeholder="ID, processo, macroprocesso, ator..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-[#D0D7E3] rounded px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B3A6B]/30"
          />
        </div>
        {activeMacro && (
          <div className="flex flex-col">
            <span className="text-[9px] text-[#9ca3af] uppercase font-bold mb-1">Cadeia de Valor</span>
            <div className="flex items-center gap-1 bg-[#EEF2FF] border border-[#1B3A6B]/20 text-[#1B3A6B] text-xs font-semibold px-2 py-1 rounded">
              {activeMacro}
              <button onClick={() => setActiveMacro(null)} className="ml-1 text-[#1B3A6B]/50 hover:text-[#1B3A6B]">×</button>
            </div>
          </div>
        )}
        <FilterSelect label="Classificação" value={filter.classificacao} onChange={v => setFilter({ classificacao: v })} options={classificacoes} />
        <FilterSelect label="Ano" value={filter.ano} onChange={v => setFilter({ ano: v })} options={anos} />
        <FilterSelect label="Status" value={filter.status} onChange={v => setFilter({ status: v })} options={statuses} />
        <button
          onClick={() => { setFilter({ classificacao: "Todos", ano: "Todos", status: "Todos", secretaria: "Todos", ator: "Todos" }); setSearch(""); setActiveMacro(null); }}
          className="text-sm text-[#1B3A6B] font-semibold underline hover:no-underline self-end pb-1.5"
        >
          Limpar tudo
        </button>
      </div>

      <p className="text-sm text-[#4a5568]">
        Exibindo <strong>{filtered.length}</strong> de <strong>{allProcesses.length}</strong> processos
        {activeMacro && <> · Macroprocesso: <strong>{activeMacro}</strong></>}
      </p>

      {/* Table */}
      <div className="bg-white border border-[#D0D7E3] rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#1B3A6B] text-white text-[11px] uppercase tracking-wide">
                {["ID", "Macroprocesso", "Processo / Subprocesso", "Classificação", "Prioridade", "Secretaria", "Ator", "Ano", "Status"].map(h => (
                  <th key={h} className="px-3 py-3 text-left font-semibold whitespace-nowrap">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((p, i) => (
                <tr
                  key={p.id}
                  className={`border-t border-[#E8EDF4] hover:bg-[#EEF2FF] transition-colors cursor-pointer ${i % 2 === 0 ? "bg-white" : "bg-[#F9FAFB]"} ${selected?.id === p.id ? "bg-[#EEF2FF]" : ""}`}
                  onClick={() => setSelected(p)}
                >
                  <td className="px-3 py-2.5 font-mono text-xs text-[#1B3A6B] font-bold whitespace-nowrap">{p.id}</td>
                  <td className="px-3 py-2.5 text-[#374151] max-w-[160px]">
                    <span className="block truncate" title={p.macroprocesso}>{p.macroprocesso}</span>
                  </td>
                  <td className="px-3 py-2.5 max-w-[220px]">
                    <span className="block truncate text-[#374151]" title={p.processo}>{p.processo}</span>
                    {p.subprocesso && <span className="block truncate text-[10px] text-[#6b7280]" title={p.subprocesso}>{p.subprocesso}</span>}
                  </td>
                  <td className="px-3 py-2.5 text-[#374151] whitespace-nowrap">{p.classificacao}</td>
                  <td className="px-3 py-2.5">
                    {p.prioridade !== "Não prioritário"
                      ? <span className="bg-[#1B3A6B] text-white text-[10px] font-bold px-2 py-0.5 rounded">{p.prioridade}</span>
                      : <span className="text-[#9ca3af] text-xs">—</span>}
                  </td>
                  <td className="px-3 py-2.5 font-semibold text-[#374151]">{p.secretaria}</td>
                  <td className="px-3 py-2.5 text-[#374151]">{p.ator}</td>
                  <td className="px-3 py-2.5 text-[#374151]">{p.ano ?? "—"}</td>
                  <td className="px-3 py-2.5">
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${STATUS_BADGE[p.status] ?? "bg-gray-100 text-gray-700"}`}>
                      {p.status}
                    </span>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={9} className="px-3 py-12 text-center text-[#6b7280] text-sm">
                    Nenhum processo encontrado com os filtros selecionados.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Detail panel */}
      {selected && <DetailPanel process={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}
