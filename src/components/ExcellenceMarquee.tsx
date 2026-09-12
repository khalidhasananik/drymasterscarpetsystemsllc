import { BG, BG2, DARK } from "@/constants";

export default function ExcellenceMarquee() {
  return (
    <section style={{ background: BG, overflow: "hidden", borderTop: `1px solid ${BG2}`, borderBottom: `1px solid ${BG2}` }} className="py-4">
      <div style={{ display: "flex", width: "fit-content", animation: "marquee 20s linear infinite" }}>
        <h2
          style={{
            fontFamily: "Antonio, sans-serif",
            color: DARK,
            fontWeight: 700,
            fontSize: "clamp(100px, 18vw, 240px)",
            lineHeight: 0.85,
            letterSpacing: -4,
            whiteSpace: "nowrap",
            userSelect: "none",
            paddingRight: "0.5em",
          }}
          className="uppercase"
        >
          Carpet Cleaning Excellence
        </h2>
        <h2
          style={{
            fontFamily: "Antonio, sans-serif",
            color: DARK,
            fontWeight: 700,
            fontSize: "clamp(100px, 18vw, 240px)",
            lineHeight: 0.85,
            letterSpacing: -4,
            whiteSpace: "nowrap",
            userSelect: "none",
            paddingRight: "0.5em",
          }}
          className="uppercase"
          aria-hidden="true"
        >
          Carpet Cleaning Excellence
        </h2>
      </div>
    </section>
  );
}
