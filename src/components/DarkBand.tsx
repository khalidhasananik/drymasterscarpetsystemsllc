import { DARK, ACCENT, grid1, grid2, grid3, grid4 } from "@/constants";

const images = [grid1, grid2, grid3, grid4];

export default function DarkBand() {
  return (
    <section style={{ background: DARK }} className="py-16 overflow-hidden">
      <div className="max-w-[1290px] mx-auto px-6">
        <h2
          style={{ fontFamily: "Antonio, sans-serif", color: ACCENT, fontWeight: 700, fontSize: "clamp(56px, 9vw, 140px)", lineHeight: 1, letterSpacing: -2 }}
          className="uppercase mb-12"
        >
          Carpet<br />Cleaning
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((src, i) => (
            <div key={i} className="overflow-hidden rounded-[24px]" style={{ height: "clamp(160px,20vw,280px)" }}>
              <img src={src} alt={`Clean room result ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
