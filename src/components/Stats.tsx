import { BG2, TEXT, MUTED } from "@/constants";

const dropletOffIcon = (
  <svg style={{ width: "1em", height: "1em" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3c3.5 4 6 7.5 6 10.5A6 6 0 0 1 6 13.5c0-1.7.7-3.4 1.8-5" />
    <line x1="3" y1="3" x2="21" y2="21" />
  </svg>
);

const stats = [
  { value: "10+", label: "Years Serving Canton\nAnd Nearby Areas" },
  { value: "100+", label: "Happy Customers\nAcross Northeast Ohio" },
  { value: "5", suffix: "★", label: "Google Rating\nFrom Verified Clients" },
  { value: "0", suffix: dropletOffIcon, label: "Steam Used —\nLow-Moisture Method Only" },
];

export default function Stats() {
  return (
    <section style={{ background: BG2 }} className="py-12">
      <div className="max-w-[1290px] mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col gap-1 px-4 first:pl-0">
              <span style={{ fontFamily: "Antonio, sans-serif", color: TEXT, fontSize: "clamp(40px,5vw,72px)", fontWeight: 700, lineHeight: 1, display: "inline-flex", alignItems: "center", gap: "0.1em" }}>
                {s.value}
                {s.suffix}
              </span>
              <p style={{ fontFamily: "Noto Sans, sans-serif", color: MUTED, fontSize: 13, lineHeight: 1.5 }} className="whitespace-pre-line">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
