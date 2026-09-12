import { ACCENT, BG, TEXT, MUTED, hero_mosaic, hero_room } from "@/constants";

const avatars = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=56&h=56&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=56&h=56&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=56&h=56&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=56&h=56&fit=crop&auto=format",
];

export default function Hero() {
  return (
    <section style={{ background: BG }} className="relative overflow-hidden min-h-[88vh] flex flex-col">
      <div className="max-w-[1290px] mx-auto px-6 flex-1 flex flex-col w-full">
        <div className="flex flex-col lg:flex-row flex-1 pt-10 pb-0 gap-8">
          <div className="lg:w-[38%] flex flex-col">
            <div className="rounded-[50px] overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.08)]" style={{ height: 300 }}>
              <img src={hero_mosaic} alt="Professional carpet cleaning" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="lg:w-[62%] flex flex-col justify-center items-start lg:pl-16 pt-4">
            <div className="w-full">
              <p style={{ fontFamily: "Antonio, sans-serif", color: ACCENT, fontSize: "clamp(24px,2.8vw,42px)", fontWeight: 700, letterSpacing: 0.5 }} className="mb-2">
                Dry Masters Carpet Systems LLC
              </p>
              <p style={{ fontFamily: "Noto Sans, sans-serif", color: MUTED, fontSize: 13, fontWeight: 700, letterSpacing: 2 }} className="uppercase mb-6">
                Canton, Ohio
              </p>
              <h2
                style={{ fontFamily: "Antonio, sans-serif", color: TEXT, fontSize: "clamp(26px,3.2vw,46px)", fontWeight: 700, lineHeight: 1.12, letterSpacing: 0.3 }}
                className="uppercase mb-8"
              >
                Advanced Low-Moisture Carpet Cleaning: Fast, Effective, and Steam-Free
              </h2>
              <a
                href="#contact"
                style={{ background: ACCENT, fontFamily: "Noto Sans, sans-serif", fontSize: 14, fontWeight: 700, color: "#fff", letterSpacing: 1.4 }}
                className="inline-flex items-center px-10 py-5 hover:bg-[#af300b] transition-colors uppercase"
              >
                Get Started
              </a>
            </div>

            <div className="w-full mt-14 flex items-center gap-6">
              <div className="flex -space-x-4">
                {avatars.map((src, i) => (
                  <img key={i} src={src} alt="Happy customer" className="w-12 h-12 rounded-full object-cover border-2 border-white" />
                ))}
              </div>
              <div>
                <p style={{ fontFamily: "Noto Sans, sans-serif", color: MUTED, fontSize: 15 }}>
                  Trusted by <span style={{ color: TEXT, fontWeight: 700 }}>100+</span> happy customers
                </p>
                <div className="flex items-center gap-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 14 14" fill={ACCENT}>
                      <path d="M7 1l1.8 3.6L13 5.3l-3 2.9.7 4.1L7 10.1l-3.7 2.2.7-4.1-3-2.9 4.2-.7z" />
                    </svg>
                  ))}
                  <span style={{ fontFamily: "Noto Sans, sans-serif", color: MUTED, fontSize: 13 }} className="ml-1">5.0 on Google</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 py-4">
          <span style={{ fontFamily: "Noto Sans, sans-serif", color: MUTED, fontSize: 12, fontWeight: 700, letterSpacing: 2 }}>SCROLL</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke={MUTED} strokeWidth="2">
            <path d="M8 2v12M2 10l6 6 6-6" />
          </svg>
        </div>
      </div>

      <div style={{ background: BG }} className="w-full overflow-hidden pb-0">
        <div className="max-w-[1290px] mx-auto px-4">
          <h1
            style={{ fontFamily: "Antonio, sans-serif", color: TEXT, fontWeight: 700, lineHeight: 0.88, fontSize: "clamp(72px, 11vw, 160px)", letterSpacing: -2 }}
            className="uppercase"
          >
            Carpet
            <br />Cleaning
          </h1>
        </div>
      </div>

      <div className="w-full mt-4 h-[280px] lg:h-[380px] overflow-hidden">
        <img src={hero_room} alt="Clean carpeted living room" className="w-full h-full object-cover" />
      </div>
    </section>
  );
}
