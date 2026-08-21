import { useState, useMemo } from "react";
import { processes } from "./data";
import CadeiaDeValor from "./CadeiaDeValor";
import Dashboard from "./Dashboard";
import Catalogo from "./Catalogo";
import Rede from "./Rede";

type TabId = "cadeia" | "dashboard" | "processos" | "rede";

const TABS: { id: TabId; label: string }[] = [
  { id: "cadeia",    label: "Cadeia de Valor" },
  { id: "dashboard", label: "Processos Mapeados e Monitorados" },
  { id: "processos", label: "Catálogo de Processos" },
  { id: "rede",      label: "Rede de Processos" },
];

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>("cadeia");

  // Global filter state shared across tabs
  const [filter, setFilterState] = useState({
    classificacao: "Todos", ano: "Todos", status: "Todos",
    secretaria: "Todos", ator: "Todos",
  });
  const setFilter = (partial: Partial<typeof filter>) => setFilterState(prev => ({ ...prev, ...partial }));

  // Active macroprocess from value chain — propagates to all tabs
  const [activeMacro, setActiveMacro] = useState<string | null>(null);

  // Macro-filtered process list shared by Dashboard and Catalogo
  const macroFiltered = useMemo(() =>
    activeMacro ? processes.filter(p => p.macroprocesso === activeMacro) : processes,
  [activeMacro]);

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F6F9]">
      {/* GOV.BR bar */}
      <div className="bg-[#132d54] text-white text-xs px-4 py-1.5 flex items-center gap-3">
        <span className="font-bold tracking-wide">GOV.BR</span>
        <span className="text-[#9fb4cc]">|</span>
        <span className="text-[#9fb4cc] hover:text-white cursor-pointer transition-colors">Acesso à Informação</span>
        <span className="text-[#9fb4cc]">|</span>
        <span className="text-[#9fb4cc] hover:text-white cursor-pointer transition-colors">Legislação</span>
        <span className="text-[#9fb4cc]">|</span>
        <span className="text-[#9fb4cc] hover:text-white cursor-pointer transition-colors">Participe</span>
      </div>

      {/* Header */}
      <header className="bg-[#1B3A6B] text-white px-6 py-4 flex items-center gap-4 shadow-lg">
        <div className="w-10 h-10 bg-[#FFCD07] rounded flex items-center justify-center shrink-0">
          <svg viewBox="0 0 40 40" className="w-7 h-7" fill="none">
            <rect x="6" y="8"  width="28" height="5" rx="1" fill="#1B3A6B" />
            <rect x="6" y="18" width="20" height="5" rx="1" fill="#1B3A6B" />
            <rect x="6" y="28" width="24" height="5" rx="1" fill="#1B3A6B" />
          </svg>
        </div>
        <div>
          <p className="text-[10px] text-[#9fb4cc] uppercase tracking-widest">
            Ministério da Integração e do Desenvolvimento Regional
          </p>
          <p className="text-base font-bold" style={{ fontFamily: "'Roboto Slab', serif" }}>
            Repositório de Mapeamento de Processos
          </p>
        </div>
        <div className="ml-auto hidden md:flex items-center gap-2">
          {activeMacro && (
            <span className="text-[10px] bg-[#FFCD07] text-[#1B3A6B] font-bold px-2.5 py-1 rounded flex items-center gap-1">
              {activeMacro}
              <button onClick={() => setActiveMacro(null)} className="ml-1 opacity-60 hover:opacity-100">×</button>
            </span>
          )}
          <span className="text-[10px] text-[#9fb4cc] border border-[#9fb4cc]/30 px-2 py-0.5 rounded">
            MIDR · 2026
          </span>
        </div>
      </header>

      {/* Tabs */}
      <div className="bg-white border-b border-[#D0D7E3] px-6 flex gap-1 pt-3 overflow-x-auto">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-2.5 text-sm font-semibold rounded-t-md border border-b-0 whitespace-nowrap transition-all ${
              activeTab === tab.id
                ? "bg-[#1B3A6B] text-white border-[#1B3A6B]"
                : "bg-white text-[#4a5568] border-[#D0D7E3] hover:bg-[#F4F6F9]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <main className="flex-1 p-4 md:p-6">
        {activeTab === "cadeia" && (
          <CadeiaDeValor
            activeMacro={activeMacro}
            onSelectMacro={(macro) => {
              setActiveMacro(macro);
              if (macro) setActiveTab("dashboard");
            }}
          />
        )}

        {activeTab === "dashboard" && (
          <Dashboard
            processes={macroFiltered}
            filter={filter}
            setFilter={setFilter}
            activeMacro={activeMacro}
            setActiveMacro={setActiveMacro}
          />
        )}

        {activeTab === "processos" && (
          <Catalogo
            processes={macroFiltered}
            filter={filter}
            setFilter={setFilter}
            activeMacro={activeMacro}
            setActiveMacro={setActiveMacro}
            allProcesses={processes}
          />
        )}

        {activeTab === "rede" && <Rede />}
      </main>

      {/* Footer */}
      <footer className="bg-[#132d54] text-[#9fb4cc] text-xs px-6 py-4 flex flex-col sm:flex-row items-center gap-2 justify-between">
        <span>© 2026 Ministério da Integração e do Desenvolvimento Regional — MIDR</span>
        <span>Coordenação de Mapeamento de Processos</span>
      </footer>
    </div>
  );
}
