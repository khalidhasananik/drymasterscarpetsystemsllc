import { useState } from "react";
import { BG, TEXT, MUTED, navLinks } from "@/constants";

const drymastersLogo = "/images/drymasterslogo.png";

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <nav style={{ background: BG }} className="sticky top-0 z-50 border-b border-[#eeece1]">
      <div className="max-w-[1290px] mx-auto px-6 flex items-center justify-between h-[68px]">
        <a href="#" className="flex items-center">
          <img src={drymastersLogo} alt="Dry Masters Carpet Systems LLC" className="h-12 w-auto object-contain" />
        </a>
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l}
              href="#"
              style={{ fontFamily: "Noto Sans, sans-serif", color: MUTED, fontSize: 13, fontWeight: 700, letterSpacing: 1.2 }}
              className="hover:text-[#bd3c16] transition-colors"
            >
              {l}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          style={{ background: TEXT, fontFamily: "Noto Sans, sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: 1.2, color: "#fff" }}
          className="hidden lg:inline-flex items-center px-6 py-3 hover:bg-[#bd3c16] transition-colors"
        >
          GET IN TOUCH
        </a>
        <button className="lg:hidden p-2" onClick={() => setOpen(!open)}>
          <div style={{ background: TEXT }} className="w-6 h-0.5 mb-1.5" />
          <div style={{ background: TEXT }} className="w-6 h-0.5 mb-1.5" />
          <div style={{ background: TEXT }} className="w-6 h-0.5" />
        </button>
      </div>
      {open && (
        <div style={{ background: BG }} className="lg:hidden px-6 pb-4 border-t border-[#eeece1]">
          {navLinks.map((l) => (
            <a key={l} href="#" className="block py-2" style={{ fontFamily: "Noto Sans, sans-serif", color: MUTED, fontSize: 13, fontWeight: 700 }}>
              {l}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
