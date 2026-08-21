import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell,
  PieChart, Pie, Legend, LineChart, Line, CartesianGrid,
} from "recharts";
import { Process, countBy } from "./data";

// ── Shared palette (must stay in sync with CadeiaDeValor + Rede) ──────────────
export const CLR_FINALISTICO = "#1B3A6B";
export const CLR_GERENCIAIS  = "#0F766E";
export const CLR_SUPORTE     = "#B45309";

const NAVY   = CLR_FINALISTICO;
const NAVY2  = "#2a4f8a";

type Filter = {
  classificacao: string; ano: string; status: string;
  secretaria: string; ator: string;
};
type Props = {
  processes: Process[];
  filter: Filter;
  setFilter: (f: Partial<Filter>) => void;
  activeMacro: string | null;
  setActiveMacro: (m: string | null) => void;
};

// ─── Custom bar (value label above) ──────────────────────────────────────────
const LabelBar = (props: any) => {
  const { x, y, width, height, value, fill } = props;
  return (
    <g>
      <rect x={x} y={y} width={width} height={height} fill={fill ?? NAVY} rx={2} />
      <text x={x + width / 2} y={y - 5} textAnchor="middle" fill={fill ?? NAVY} fontSize={10} fontWeight={700}>{value}</text>
    </g>
  );
};

// ─── Interactive bar chart ────────────────────────────────────────────────────
function BarCard({
  data, title, height = 190, activeValue, onBarClick, colorFn,
}: {
  data: { name: string; value: number }[];
  title: string;
  height?: number;
  activeValue?: string;
  onBarClick?: (name: string) => void;
  colorFn?: (name: string, active: boolean) => string;
}) {
  return (
    <div className="bg-white border border-[#D0D7E3] rounded-lg p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-[11px] font-bold text-[#1B3A6B] uppercase tracking-wide">{title}</h3>
        {activeValue && activeValue !== "Todos" && (
          <button
            onClick={() => onBarClick?.("__clear__")}
            className="text-[10px] text-[#1B3A6B] bg-[#EEF2FF] border border-[#1B3A6B]/20 px-2 py-0.5 rounded-full flex items-center gap-1 hover:bg-[#DBEAFE]"
          >
            {activeValue} <span className="opacity-60">×</span>
          </button>
        )}
      </div>
      <ResponsiveContainer width="100%" height={height}>
        <BarChart data={data} margin={{ top: 18, right: 8, left: -24, bottom: 42 }}>
          <XAxis dataKey="name" tick={{ fontSize: 9, fill: "#4a5568" }} interval={0} angle={-38} textAnchor="end" tickLine={false} axisLine={false} />
          <YAxis hide />
          <Tooltip contentStyle={{ fontSize: 11, borderRadius: 6, border: "1px solid #D0D7E3" }} cursor={{ fill: "#EEF2FF" }} />
          <Bar
            dataKey="value"
            maxBarSize={52}
            cursor={onBarClick ? "pointer" : "default"}
            onClick={(d) => d.name && onBarClick?.(d.name === activeValue ? "__clear__" : d.name)}
            shape={(props: any) => {
              const isActive = props.name === activeValue && activeValue !== "Todos";
              const isFiltered = activeValue && activeValue !== "Todos" && props.name !== activeValue;
              const c = colorFn
                ? colorFn(props.name, isActive)
                : isActive ? "#FFCD07" : isFiltered ? NAVY + "44" : NAVY;
              return <LabelBar {...props} fill={isFiltered ? NAVY + "44" : c} />;
            }}
          >
            {data.map((d, i) => (
              <Cell
                key={i}
                fill={
                  activeValue && activeValue !== "Todos" && d.name !== activeValue
                    ? NAVY + "44"
                    : d.name === activeValue
                    ? "#FFCD07"
                    : i % 2 === 0 ? NAVY : NAVY2
                }
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      {onBarClick && (
        <p className="text-[9px] text-[#9ca3af] text-center mt-1">Clique numa barra para filtrar</p>
      )}
    </div>
  );
}

// ─── Donut ────────────────────────────────────────────────────────────────────
function DonutCard({ data, title }: { data: { name: string; value: number; color: string }[]; title: string }) {
  return (
    <div className="bg-white border border-[#D0D7E3] rounded-lg p-4">
      <h3 className="text-[11px] font-bold text-[#1B3A6B] text-center mb-1 uppercase tracking-wide">{title}</h3>
      <ResponsiveContainer width="100%" height={195}>
        <PieChart>
          <Pie data={data} cx="50%" cy="44%" innerRadius={46} outerRadius={70} paddingAngle={3} dataKey="value"
            label={({ value }) => value} labelLine={false}>
            {data.map((d, i) => <Cell key={i} fill={d.color} />)}
          </Pie>
          <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: 10 }} />
          <Tooltip contentStyle={{ fontSize: 11, borderRadius: 6, border: "1px solid #D0D7E3" }} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

// ─── Trend ────────────────────────────────────────────────────────────────────
function TrendCard({ processes }: { processes: Process[] }) {
  const years = [2025, 2026];
  const data = years.map(yr => ({
    name: String(yr),
    Mapeado:    processes.filter(p => p.ano === yr && p.status === "Mapeado").length,
    Monitorado: processes.filter(p => p.ano === yr && p.status === "Monitorado").length,
    Previsto:   processes.filter(p => p.ano === yr && p.status === "Previsto").length,
  }));
  return (
    <div className="bg-white border border-[#D0D7E3] rounded-lg p-4">
      <h3 className="text-[11px] font-bold text-[#1B3A6B] text-center mb-3 uppercase tracking-wide">Evolução por Ano</h3>
      <ResponsiveContainer width="100%" height={160}>
        <LineChart data={data} margin={{ top: 8, right: 16, left: -24, bottom: 4 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#E8EDF4" />
          <XAxis dataKey="name" tick={{ fontSize: 10, fill: "#4a5568" }} tickLine={false} />
          <YAxis tick={{ fontSize: 10, fill: "#4a5568" }} tickLine={false} axisLine={false} />
          <Tooltip contentStyle={{ fontSize: 11, borderRadius: 6, border: "1px solid #D0D7E3" }} />
          <Legend iconType="circle" iconSize={7} wrapperStyle={{ fontSize: 10 }} />
          <Line type="monotone" dataKey="Mapeado"    stroke={CLR_GERENCIAIS} strokeWidth={2} dot={{ r: 4 }} />
          <Line type="monotone" dataKey="Monitorado" stroke={NAVY}           strokeWidth={2} dot={{ r: 4 }} />
          <Line type="monotone" dataKey="Previsto"   stroke="#F59E0B"        strokeWidth={2} dot={{ r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

function KpiCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="bg-white border border-[#D0D7E3] rounded-lg p-4 flex flex-col items-center justify-center text-center">
      <p className="text-xs font-semibold text-[#4a5568] leading-tight mb-1.5">{label}</p>
      <p className="text-4xl font-bold text-[#1B3A6B]">{value}</p>
    </div>
  );
}

function FilterSelect({ label, value, onChange, options }: {
  label: string; value: string; onChange: (v: string) => void; options: string[];
}) {
  return (
    <div className="bg-white border border-[#D0D7E3] rounded-lg p-3">
      <label className="text-xs font-semibold text-[#4a5568] block mb-1.5">{label}</label>
      <div className="relative">
        <select value={value} onChange={(e) => onChange(e.target.value)}
          className="w-full text-sm border border-[#D0D7E3] rounded px-2 py-1.5 bg-white text-[#374151] focus:outline-none focus:ring-2 focus:ring-[#1B3A6B]/30 appearance-none cursor-pointer pr-6">
          {options.map((o) => <option key={o}>{o}</option>)}
        </select>
        <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-[#9ca3af] text-xs">▾</span>
      </div>
    </div>
  );
}

// ─── Main Dashboard ───────────────────────────────────────────────────────────
export default function Dashboard({ processes, filter, setFilter, activeMacro, setActiveMacro }: Props) {
  const anos           = ["Todos", ...Array.from(new Set(processes.map(p => p.ano).filter(Boolean))).sort().map(String)];
  const classificacoes = ["Todos", ...Array.from(new Set(processes.map(p => p.classificacao)))];
  const statuses       = ["Todos", ...Array.from(new Set(processes.map(p => p.status)))];

  const filtered = processes.filter(p => {
    if (filter.classificacao !== "Todos" && p.classificacao !== filter.classificacao) return false;
    if (filter.ano          !== "Todos" && String(p.ano)     !== filter.ano)          return false;
    if (filter.status       !== "Todos" && p.status          !== filter.status)        return false;
    if (filter.secretaria   !== "Todos" && p.secretaria      !== filter.secretaria)    return false;
    if (filter.ator         !== "Todos" && p.ator            !== filter.ator)          return false;
    return true;
  });

  const bySecretaria   = countBy(filtered, "secretaria");
  const byAtor         = countBy(filtered, "ator").slice(0, 12);
  const byMacro        = countBy(filtered, "macroprocesso").slice(0, 8);
  const byClassificacao = countBy(filtered, "classificacao");

  const statusPie = [
    { name: "Monitorado", value: filtered.filter(p => p.status === "Monitorado").length, color: NAVY },
    { name: "Mapeado",    value: filtered.filter(p => p.status === "Mapeado").length,    color: CLR_GERENCIAIS },
    { name: "Previsto",   value: filtered.filter(p => p.status === "Previsto").length,   color: "#F59E0B" },
  ].filter(d => d.value > 0);

  const prioridadePie = [
    { name: "PEI",             value: filtered.filter(p => p.prioridade === "PEI").length,             color: NAVY },
    { name: "CEG",             value: filtered.filter(p => p.prioridade === "CEG").length,             color: CLR_GERENCIAIS },
    { name: "Não prioritário", value: filtered.filter(p => p.prioridade === "Não prioritário").length, color: "#9CA3AF" },
  ].filter(d => d.value > 0);

  // Classification bar uses the classification colors
  const clsColorFn = (name: string, active: boolean) =>
    active ? "#FFCD07" :
    name === "Finalístico" ? CLR_FINALISTICO :
    name === "Gerenciais"  ? CLR_GERENCIAIS  : CLR_SUPORTE;

  const clearAll = () => setFilter({ classificacao: "Todos", ano: "Todos", status: "Todos", secretaria: "Todos", ator: "Todos" });

  return (
    <div className="flex flex-col lg:flex-row gap-4">
      {/* Sidebar */}
      <aside className="w-full lg:w-52 shrink-0 flex flex-col gap-3">
        {activeMacro && (
          <div className="bg-[#EEF2FF] border border-[#1B3A6B]/20 rounded-lg p-3">
            <p className="text-[10px] text-[#6b7280] mb-1">Cadeia de Valor</p>
            <p className="text-xs font-bold text-[#1B3A6B]">{activeMacro}</p>
            <button onClick={() => setActiveMacro(null)} className="text-[10px] text-[#1B3A6B] underline mt-1">Remover</button>
          </div>
        )}
        <div className="flex gap-2 flex-wrap">
          <button className="bg-[#1B3A6B] text-white text-sm font-semibold px-4 py-2 rounded hover:bg-[#132d54] transition-colors">Filtros</button>
          <button onClick={clearAll} className="bg-[#1B3A6B] text-white text-sm font-semibold px-4 py-2 rounded hover:bg-[#132d54] transition-colors">Limpar</button>
        </div>
        <FilterSelect label="Classificação" value={filter.classificacao} onChange={v => setFilter({ classificacao: v })} options={classificacoes} />
        <FilterSelect label="Ano"           value={filter.ano}           onChange={v => setFilter({ ano: v })}           options={anos} />
        <FilterSelect label="Status"        value={filter.status}        onChange={v => setFilter({ status: v })}        options={statuses} />
      </aside>

      {/* Charts */}
      <div className="flex-1 flex flex-col gap-4">
        {/* KPIs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <KpiCard label="Processos Mapeados"   value={filtered.filter(p => ["Mapeado","Monitorado"].includes(p.status)).length} />
          <KpiCard label="Processos Monitorados" value={filtered.filter(p => p.status === "Monitorado").length} />
          <KpiCard label="Priorizados PEI"      value={filtered.filter(p => p.prioridade === "PEI").length} />
          <KpiCard label="Priorizados CEG"      value={filtered.filter(p => p.prioridade === "CEG").length} />
        </div>

        {/* Row 1 — clickable by secretaria / ator */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
          <BarCard
            data={bySecretaria}
            title="Processos por Secretaria"
            activeValue={filter.secretaria}
            onBarClick={(name) => setFilter({ secretaria: name === "__clear__" ? "Todos" : name })}
          />
          <BarCard
            data={byAtor}
            title="Processos por Ator Envolvido"
            activeValue={filter.ator}
            onBarClick={(name) => setFilter({ ator: name === "__clear__" ? "Todos" : name })}
          />
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <DonutCard data={statusPie}    title="Distribuição por Status" />
          <DonutCard data={prioridadePie} title="Distribuição por Prioridade" />
          <TrendCard processes={processes} />
        </div>

        {/* Row 3 — clickable by classificação / macroprocesso */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
          <BarCard
            data={byClassificacao}
            title="Processos por Classificação"
            height={160}
            activeValue={filter.classificacao}
            onBarClick={(name) => setFilter({ classificacao: name === "__clear__" ? "Todos" : name as any })}
            colorFn={clsColorFn}
          />
          <BarCard
            data={byMacro}
            title="Top Macroprocessos"
            height={160}
            activeValue={activeMacro ?? undefined}
            onBarClick={(name) => setActiveMacro(name === "__clear__" ? null : (activeMacro === name ? null : name))}
          />
        </div>
      </div>
    </div>
  );
}
