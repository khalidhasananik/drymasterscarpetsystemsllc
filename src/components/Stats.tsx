import { useEffect, useRef, useState } from "react";
import { DropletOff, Plus, Star } from "lucide-react";
import { BG2, TEXT, MUTED } from "@/constants";

const iconStyle = { width: "0.5em", height: "0.5em", position: "relative" as const, top: "0.12em" };

const stats = [
  { value: 10, suffix: <Plus style={iconStyle} strokeWidth={3} />, label: "Years Serving Canton\nAnd Nearby Areas" },
  { value: 100, suffix: <Plus style={iconStyle} strokeWidth={3} />, label: "Happy Customers\nAcross Northeast Ohio" },
  { value: 5, suffix: <Star style={iconStyle} strokeWidth={2} />, label: "Google Rating\nFrom Verified Clients" },
  { value: 0, suffix: <DropletOff style={iconStyle} strokeWidth={2} />, label: "Steam Used —\nLow-Moisture Method Only" },
];

function useCountUp(target: number, active: boolean, duration = 1500) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    let frame: number;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, target, duration]);

  return value;
}

function Stat({ s }: { s: (typeof stats)[number] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const count = useCountUp(s.value, active);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="flex flex-col gap-1 px-4 first:pl-0 last:pr-0 max-lg:odd:pl-0 max-lg:even:pr-0">
      <span style={{ fontFamily: "Antonio, sans-serif", color: TEXT, fontSize: "clamp(40px,5vw,72px)", fontWeight: 700, lineHeight: 1, display: "inline-flex", alignItems: "center", gap: "0.1em" }}>
        {count}
        {s.suffix}
      </span>
      <p style={{ fontFamily: "Noto Sans, sans-serif", color: MUTED, fontSize: 13, lineHeight: 1.5 }} className="whitespace-pre-line">{s.label}</p>
    </div>
  );
}

export default function Stats() {
  return (
    <section style={{ background: BG2 }} className="py-12">
      <div className="max-w-[1290px] mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <Stat key={i} s={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
