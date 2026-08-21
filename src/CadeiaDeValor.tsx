import { useState } from "react";
import { valueChain } from "./data";
import { CLR_FINALISTICO, CLR_GERENCIAIS, CLR_SUPORTE } from "./Dashboard";

// Estratégicos uses its own emerald — the other three sync with Dashboard + Rede
const STRATEGIC = "#138A72"; // top row only
const NAVY      = CLR_FINALISTICO; // #1B3A6B
const TEAL_DARK = CLR_GERENCIAIS;  // #0F766E
const AMBER     = CLR_SUPORTE;     // #B45309

type Props = {
  activeMacro: string | null;
  onSelectMacro: (macro: string | null) => void;
};

function ThemeIcon({ color, label, icon }: { color: string; label: string; icon: string }) {
  return (
    <div className="flex flex-col items-center text-center gap-1">
      <div className="w-11 h-11 rounded-full flex items-center justify-center text-2xl shadow-sm" style={{ backgroundColor: color + "18" }}>
        {icon}
      </div>
      <p className="text-[8px] font-bold leading-tight max-w-[72px]" style={{ color }}>{label}</p>
    </div>
  );
}

export default function CadeiaDeValor({ activeMacro, onSelectMacro }: Props) {
  const [hovered, setHovered] = useState<string | null>(null);

  const box = (bg: string, id: string, macro: string, extraClass = "") => {
    const isActive = activeMacro === macro;
    const isHovered = hovered === id;
    return {
      style: {
        backgroundColor: isActive ? bg : activeMacro ? bg + "88" : bg,
        outline: isActive ? `2px solid ${AMBER === bg ? "#ccc" : "white"}` : "2px solid transparent",
        outlineOffset: "2px",
        transform: isHovered ? "scale(1.025)" : "scale(1)",
        boxShadow: isHovered || isActive ? "0 4px 16px rgba(0,0,0,0.18)" : "none",
        transition: "all 0.15s ease",
        cursor: "pointer",
      } as React.CSSProperties,
      className: `flex items-center justify-center text-center text-white text-[10px] font-bold leading-tight px-2 py-2.5 rounded select-none ${extraClass}`,
    };
  };

  const handleClick = (macro: string) => {
    onSelectMacro(activeMacro === macro ? null : macro);
  };

  return (
    <div className="bg-white border border-[#D0D7E3] rounded-lg p-5 overflow-x-auto">
      {/* Title */}
      <div className="text-center mb-5">
        <h2 className="text-xl font-bold text-[#1B3A6B]" style={{ fontFamily: "'Roboto Slab', serif" }}>
          CADEIA DE VALOR — MIDR
        </h2>
        <div className="inline-block bg-[#1B3A6B] text-white text-xs font-semibold px-5 py-1 rounded mt-1.5 tracking-widest">
          PNDR · PNI · PNPDEC · PNRH
        </div>
        <p className="text-[10px] text-[#6b7280] mt-2 max-w-3xl mx-auto">
          <strong>PNDR</strong> – Política Nacional de Desenvolvimento Regional &ensp;·&ensp;
          <strong>PNI</strong> – Política Nacional de Irrigação &ensp;·&ensp;
          <strong>PNPDEC</strong> – Política Nacional de Proteção e Defesa Civil &ensp;·&ensp;
          <strong>PNRH</strong> – Política Nacional de Recursos Hídricos
        </p>
        {activeMacro && (
          <div className="mt-2 inline-flex items-center gap-2 bg-[#EEF2FF] border border-[#1B3A6B]/20 text-[#1B3A6B] text-xs font-semibold px-3 py-1 rounded-full">
            Filtrando: {activeMacro}
            <button onClick={() => onSelectMacro(null)} className="ml-1 text-[#1B3A6B]/60 hover:text-[#1B3A6B] text-base leading-none">×</button>
          </div>
        )}
      </div>

      <div className="min-w-[720px]">
        {/* Estratégicos */}
        <div className="mb-2">
          <p className="text-[9px] uppercase font-bold tracking-widest mb-1 pl-1" style={{ color: STRATEGIC }}>Processos Estratégicos</p>
          <div className="grid gap-1.5 p-2 rounded border-2" style={{ gridTemplateColumns: `repeat(${valueChain.estrategicos.length}, 1fr)`, borderColor: STRATEGIC }}>
            {valueChain.estrategicos.map((b) => {
              const s = box(STRATEGIC, b.id, b.macro);
              return (
                <div key={b.id} {...s} style={{ ...s.style, minHeight: 58 }}
                  onMouseEnter={() => setHovered(b.id)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => handleClick(b.macro)}
                >
                  {b.label}
                </div>
              );
            })}
          </div>
        </div>

        {/* Middle: gerenciais + finalísticos + icons */}
        <div className="flex gap-1.5 mb-2">
          {/* Gerenciais */}
          <div className="flex flex-col gap-1.5 shrink-0" style={{ width: 116 }}>
            <p className="text-[9px] uppercase font-bold tracking-widest pl-1" style={{ color: TEAL_DARK }}>Gerenciais</p>
            {valueChain.gerenciais.map((b) => {
              const s = box(TEAL_DARK, b.id, b.macro);
              return (
                <div key={b.id} {...s} style={{ ...s.style, minHeight: 58, flex: 1 }}
                  onMouseEnter={() => setHovered(b.id)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => handleClick(b.macro)}
                >
                  {b.label}
                </div>
              );
            })}
          </div>

          {/* Finalísticos */}
          <div className="flex-1 rounded p-1.5 border-2" style={{ borderColor: NAVY }}>
            <p className="text-[9px] uppercase font-bold tracking-widest mb-1 pl-0.5" style={{ color: NAVY }}>Processos Finalísticos</p>
            <div className="flex flex-col gap-1.5">
              {valueChain.finalisticos.map((row, ri) => (
                <div key={ri} className="grid grid-cols-3 gap-1.5">
                  {row.map((b) => {
                    const s = box(NAVY, b.id, b.macro);
                    return (
                      <div key={b.id} {...s} style={{ ...s.style, minHeight: 52 }}
                        onMouseEnter={() => setHovered(b.id)}
                        onMouseLeave={() => setHovered(null)}
                        onClick={() => handleClick(b.macro)}
                      >
                        {b.label}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          {/* Icons */}
          <div className="flex flex-col gap-3 justify-center items-center w-24 shrink-0">
            <ThemeIcon color={NAVY} label="Desenvolvimento Regional e Territorial" icon="🏛️" />
            <ThemeIcon color="#0891B2" label="Segurança Hídrica" icon="💧" />
            <ThemeIcon color="#E55B2D" label="Proteção Civil" icon="🛡️" />
          </div>
        </div>

        {/* Suporte */}
        <div>
          <p className="text-[9px] uppercase font-bold tracking-widest mb-1 pl-1 text-[#6b7280]">Processos de Suporte</p>
          <div className="grid gap-1.5" style={{ gridTemplateColumns: `repeat(${valueChain.suporte.length}, 1fr)` }}>
            {valueChain.suporte.map((b) => {
              const s = box(AMBER, b.id, b.macro);
              return (
                <div key={b.id} {...s} style={{ ...s.style, minHeight: 44 }}
                  onMouseEnter={() => setHovered(b.id)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => handleClick(b.macro)}
                >
                  {b.label}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <p className="text-[10px] text-[#9ca3af] text-center mt-4">
        Clique em um bloco para filtrar os processos correspondentes nas demais abas
      </p>
    </div>
  );
}
