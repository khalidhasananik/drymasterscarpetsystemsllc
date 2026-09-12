import { ArrowRight } from "lucide-react";
import { BG, TEXT, MUTED, META, ACCENT, service1, service2, service3 } from "@/constants";

const services = [
  { img: service1, label: "Low-Moisture Carpet Cleaning" },
  { img: service2, label: "Upholstery Cleaning" },
  { img: service3, label: "Even Toughest Stains Removed" },
];

export default function Services() {
  return (
    <section style={{ background: BG }} className="py-24">
      <div className="max-w-[1290px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-start mb-16">
          <div className="lg:w-1/2">
            <p style={{ fontFamily: "Noto Sans, sans-serif", color: META, fontSize: 12, fontWeight: 700, letterSpacing: 2 }} className="uppercase mb-3">
              My Carpet Wizardry at Your Service
            </p>
            <h2 style={{ fontFamily: "Antonio, sans-serif", color: TEXT, fontSize: "clamp(32px,4.5vw,62px)", fontWeight: 700, lineHeight: 1.05 }} className="uppercase">
              We Clean &<br />Restore Carpets
            </h2>
          </div>
          <div className="lg:w-1/2 flex flex-col justify-end pt-4">
            <p style={{ fontFamily: "Noto Sans, sans-serif", color: MUTED, fontSize: 16, lineHeight: 1.7 }}>
              At Dry Masters Carpet Systems LLC, I'm not your run-of-the-mill carpet cleaning service. I've perfected the art of low-moisture carpet cleaning — delivering a deep, thorough clean without the long dry times and risks of steam cleaning.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="rounded-[50px] overflow-hidden mb-4" style={{ height: 320, boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
                <img src={s.img} alt={s.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="flex items-center justify-between px-2">
                <span style={{ fontFamily: "Antonio, sans-serif", color: TEXT, fontSize: 20, fontWeight: 700, letterSpacing: 0.5 }} className="uppercase">
                  {s.label}
                </span>
                <ArrowRight size={20} color={ACCENT} strokeWidth={2} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
