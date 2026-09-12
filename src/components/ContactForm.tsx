import { useState } from "react";
import { DARK, ACCENT, META, TEXT } from "@/constants";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  return (
    <section id="contact" style={{ background: DARK }} className="py-24 border-t border-[#2a3040]">
      <div className="max-w-[1290px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2">
            <p style={{ fontFamily: "Noto Sans, sans-serif", color: META, fontSize: 12, fontWeight: 700, letterSpacing: 2 }} className="uppercase mb-4">
              Send Us a Message
            </p>
            <h3
              style={{ fontFamily: "Antonio, sans-serif", color: "#fff", fontSize: "clamp(28px,3.5vw,48px)", fontWeight: 700, lineHeight: 1.1 }}
              className="uppercase mb-10"
            >
              Have Questions?
              <br />Get in Touch!
            </h3>
            <div className="flex flex-col gap-4">
              {(["name", "email", "subject"] as const).map((field) => (
                <input
                  key={field}
                  type={field === "email" ? "email" : "text"}
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  value={form[field]}
                  onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                  style={{ background: "#232936", border: "1px solid #2a3040", color: "#fff", fontFamily: "Noto Sans, sans-serif", fontSize: 15 }}
                  className="w-full px-5 py-4 outline-none focus:border-[#bd3c16] transition-colors placeholder:text-[#5a6070]"
                />
              ))}
              <textarea
                placeholder="Message"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                style={{ background: "#232936", border: "1px solid #2a3040", color: "#fff", fontFamily: "Noto Sans, sans-serif", fontSize: 15, resize: "none" }}
                className="w-full px-5 py-4 outline-none focus:border-[#bd3c16] transition-colors placeholder:text-[#5a6070]"
              />
              <button
                type="submit"
                style={{ background: ACCENT, fontFamily: "Noto Sans, sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: 1.4, color: "#fff" }}
                className="w-full py-4 uppercase hover:bg-[#af300b] transition-colors"
              >
                Send Message
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 rounded-[50px] overflow-hidden hidden lg:block" style={{ minHeight: 500, boxShadow: "0 4px 40px rgba(0,0,0,0.3)" }}>
            <img
              src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=700&h=800&fit=crop&auto=format"
              alt="Professional carpet cleaning"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
