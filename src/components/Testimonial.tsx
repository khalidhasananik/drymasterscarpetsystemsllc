import { DARK, ACCENT, META, MUTED, TEXT, tile_install } from "@/constants";

const reviews = [
  {
    quote: "Fast professional and friendly — did I mention very reasonable? Will definitely utilize them again!",
    name: "Tammy Vlad",
    date: "July 22, 2026",
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=56&h=56&fit=crop&auto=format",
  },
  {
    quote: "Furniture looks like new. Carpets are very nice. I will use this service again.",
    name: "Melissa Gentry",
    date: "June 3, 2026",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=56&h=56&fit=crop&auto=format",
  },
];

export default function Testimonial() {
  return (
    <section style={{ background: DARK }} className="py-24 border-t border-[#2a3040]">
      <div className="max-w-[1290px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <p style={{ fontFamily: "Noto Sans, sans-serif", color: META, fontSize: 12, fontWeight: 700, letterSpacing: 2 }} className="uppercase mb-6">
              What Our Clients Say
            </p>
            <h3
              style={{ fontFamily: "Antonio, sans-serif", color: "#fff", fontSize: "clamp(28px,3.5vw,48px)", fontWeight: 700, lineHeight: 1.1 }}
              className="uppercase mb-8"
            >
              Fantastic Results
            </h3>
            <div className="flex flex-col gap-8">
              {reviews.map((r, i) => (
                <div key={i}>
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} width="14" height="14" viewBox="0 0 14 14" fill={ACCENT}>
                        <path d="M7 1l1.8 3.6L13 5.3l-3 2.9.7 4.1L7 10.1l-3.7 2.2.7-4.1-3-2.9 4.2-.7z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote style={{ fontFamily: "Noto Sans, sans-serif", color: MUTED, fontSize: 15, lineHeight: 1.8 }} className="mb-4">
                    "{r.quote}"
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <img src={r.avatar} alt={r.name} className="w-10 h-10 rounded-full object-cover border-2" style={{ borderColor: ACCENT }} />
                    <div>
                      <p style={{ fontFamily: "Antonio, sans-serif", color: "#fff", fontWeight: 700, fontSize: 15 }}>{r.name}</p>
                      <p style={{ fontFamily: "Noto Sans, sans-serif", color: META, fontSize: 12 }}>Google Review · {r.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="rounded-[50px] overflow-hidden w-full" style={{ maxWidth: 480, height: 400, boxShadow: "0 4px 40px rgba(0,0,0,0.3)" }}>
              <img src={tile_install} alt="Professional carpet cleaning in action" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
