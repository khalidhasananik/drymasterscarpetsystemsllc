import { Droplet, ShieldCheck, Wind } from "lucide-react";
import { BG2, BG, TEXT, MUTED, ACCENT } from "@/constants";

const features = [
  {
    icon: <Droplet size={36} color={ACCENT} strokeWidth={1.8} />,
    title: "Low-Moisture Method",
    desc: "No steam, no soaking — our advanced low-moisture process cleans deep without the risk of mold, shrinkage, or long dry times.",
  },
  {
    icon: <Wind size={36} color={ACCENT} strokeWidth={1.8} />,
    title: "Fast Drying",
    desc: "Carpets are ready to walk on in as little as one hour, so your home or business gets back to normal fast.",
  },
  {
    icon: <ShieldCheck size={36} color={ACCENT} strokeWidth={1.8} />,
    title: "Canton's Trusted Pro",
    desc: "Proudly serving Canton, Ohio and surrounding areas with honest pricing and results that speak for themselves.",
  },
];

export default function Features() {
  return (
    <section style={{ background: BG2 }} className="py-24">
      <div className="max-w-[1290px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col gap-5">
              <div className="w-16 h-16 flex items-center justify-center rounded-[16px]" style={{ background: BG }}>
                {f.icon}
              </div>
              <h4 style={{ fontFamily: "Antonio, sans-serif", color: TEXT, fontSize: 24, fontWeight: 700 }} className="uppercase">{f.title}</h4>
              <p style={{ fontFamily: "Noto Sans, sans-serif", color: MUTED, fontSize: 15, lineHeight: 1.7 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
