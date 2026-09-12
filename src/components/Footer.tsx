import { TEXT, MUTED, ACCENT } from "@/constants";

const drymastersLogo = "/images/drymasterslogo.png";

export default function Footer() {
  return (
    <footer style={{ background: TEXT, color: "#fff" }} className="py-16">
      <div className="max-w-[1290px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <div className="bg-white rounded-xl px-4 py-2 inline-flex">
                <img src={drymastersLogo} alt="Dry Masters Carpet Systems LLC" className="h-12 w-auto object-contain" />
              </div>
            </div>
            <p style={{ fontFamily: "Noto Sans, sans-serif", color: MUTED, fontSize: 14, lineHeight: 1.7 }}>
              Your trusted low-moisture carpet cleaning specialist serving Canton, Ohio and the surrounding areas.
            </p>
          </div>
          <div>
            <h5 style={{ fontFamily: "Antonio, sans-serif", color: "#fff", fontWeight: 700, fontSize: 16, letterSpacing: 1, marginBottom: 16 }} className="uppercase">
              Visit Us
            </h5>
            <p style={{ fontFamily: "Noto Sans, sans-serif", color: MUTED, fontSize: 14, lineHeight: 1.7 }}>
              M–S 9:00AM – 4:00PM
              <br />Canton, Ohio
              <br />and Surrounding Areas
            </p>
          </div>
          <div>
            <h5 style={{ fontFamily: "Antonio, sans-serif", color: "#fff", fontWeight: 700, fontSize: 16, letterSpacing: 1, marginBottom: 16 }} className="uppercase">
              Contact
            </h5>
            <a href="http://drymasterscarpetsystemsllc.com" style={{ fontFamily: "Noto Sans, sans-serif", color: ACCENT, fontSize: 14 }} className="hover:opacity-80 transition-opacity">
              drymasterscarpetsystemsllc.com
            </a>
            <div className="flex gap-4 mt-6">
              {["FB", "IG", "TW", "LI"].map((s) => (
                <a key={s} href="#" style={{ fontFamily: "Antonio, sans-serif", fontSize: 12, fontWeight: 700, color: MUTED, letterSpacing: 1 }} className="hover:text-[#bd3c16] transition-colors">
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderColor: "#2a3040" }}>
          <p style={{ fontFamily: "Noto Sans, sans-serif", color: MUTED, fontSize: 13 }}>© 2025 Dry Masters Carpet Systems LLC. All rights reserved.</p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service"].map((l) => (
              <a key={l} href="#" style={{ fontFamily: "Noto Sans, sans-serif", color: MUTED, fontSize: 13 }} className="hover:text-white transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
