import { BG2, BG, TEXT, MUTED, ACCENT } from "@/constants";

const features = [
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke={ACCENT} strokeWidth="1.8">
        {/* Water drop with check — low moisture, effective clean */}
        <path d="M18 5c0 0-9 9-9 16a9 9 0 0018 0C27 14 18 5 18 5z" strokeLinejoin="round" />
        <path d="M13 21l3.5 3.5L23 17" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Low-Moisture Method",
    desc: "No steam, no soaking — our advanced low-moisture process cleans deep without the risk of mold, shrinkage, or long dry times.",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke={ACCENT} strokeWidth="1.8">
        <path d="M18 6c0 0-10 10-10 17a10 10 0 0020 0C28 16 18 6 18 6z" strokeLinejoin="round" />
        <path d="M18 28v-8M14 24h8" strokeLinecap="round" />
      </svg>
    ),
    title: "Fast Drying",
    desc: "Carpets are ready to walk on in as little as one hour, so your home or business gets back to normal fast.",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke={ACCENT} strokeWidth="1.8">
        <path d="M18 4l12 5v9c0 7-5 12-12 14C11 30 6 25 6 18V9l12-5z" strokeLinejoin="round" />
        <path d="M13 18l3 3 7-7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
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
