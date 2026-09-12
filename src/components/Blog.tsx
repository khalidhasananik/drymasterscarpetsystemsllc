import { BG, TEXT, MUTED, META, ACCENT, blog1, blog2, blog3 } from "@/constants";

const posts = [
  {
    img: blog1,
    date: "March 14, 2025",
    category: "Maintenance",
    title: "How Frequently Should You Book Carpet Cleaning Services?",
    excerpt: "Finding the right rhythm for carpet care isn't always obvious. Just as you schedule other household chores, carpets deserve their own attention to stay fresh, healthy, and long-lasting.",
  },
  {
    img: blog2,
    date: "February 28, 2025",
    category: "Moving",
    title: "Save Time and Stress: Top Cleaning Tasks for Rental Move-Out",
    excerpt: "Moving out of a rental can feel overwhelming — but it's often the cleaning tasks that weigh heaviest on your mind. Here's how to tackle them efficiently.",
  },
  {
    img: blog3,
    date: "January 15, 2025",
    category: "Tips",
    title: "Top Carpet Cleaning Mistakes Tenants Make Before Moving Out",
    excerpt: "When moving out of a rental property, one of the biggest concerns is getting your full security deposit back. Avoid these common carpet cleaning mistakes.",
  },
];

export default function Blog() {
  return (
    <section style={{ background: BG }} className="py-24">
      <div className="max-w-[1290px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-14 gap-6">
          <div>
            <p style={{ fontFamily: "Noto Sans, sans-serif", color: META, fontSize: 12, fontWeight: 700, letterSpacing: 2 }} className="uppercase mb-3">
              Carpet Cleaning Insights
            </p>
            <h2
              style={{ fontFamily: "Antonio, sans-serif", color: TEXT, fontSize: "clamp(28px,4vw,56px)", fontWeight: 700, lineHeight: 1.1 }}
              className="uppercase"
            >
              Read Our Latest
              <br />Carpet Care Tips
            </h2>
          </div>
          <a
            href="#"
            style={{ fontFamily: "Noto Sans, sans-serif", color: ACCENT, fontSize: 13, fontWeight: 700, letterSpacing: 1.2, borderBottom: `1px solid ${ACCENT}` }}
            className="self-end pb-1 hover:opacity-70 transition-opacity uppercase"
          >
            View All Articles
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((p, i) => (
            <article key={i} className="group cursor-pointer">
              <div className="rounded-[50px] overflow-hidden mb-6" style={{ height: 260, boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
                <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <span style={{ fontFamily: "Noto Sans, sans-serif", color: ACCENT, fontSize: 12, fontWeight: 700, letterSpacing: 1.2 }} className="uppercase">
                  {p.category}
                </span>
                <span style={{ color: "#dcd9cb" }}>·</span>
                <span style={{ fontFamily: "Noto Sans, sans-serif", color: MUTED, fontSize: 12 }}>{p.date}</span>
              </div>
              <h3
                style={{ fontFamily: "Antonio, sans-serif", color: TEXT, fontSize: "clamp(18px,1.8vw,24px)", fontWeight: 700, lineHeight: 1.2 }}
                className="uppercase mb-3 group-hover:text-[#bd3c16] transition-colors"
              >
                {p.title}
              </h3>
              <p style={{ fontFamily: "Noto Sans, sans-serif", color: MUTED, fontSize: 14, lineHeight: 1.7 }}>{p.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
