import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import DarkBand from "@/components/DarkBand";
import Testimonial from "@/components/Testimonial";
import ContactForm from "@/components/ContactForm";
import Features from "@/components/Features";
import ExcellenceMarquee from "@/components/ExcellenceMarquee";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import { BG } from "@/constants";

export default function App() {
  return (
    <div style={{ background: BG }}>
      <Nav />
      <Hero />
      <Stats />
      <Services />
      <DarkBand />
      <Testimonial />
      <ContactForm />
      <Features />
      <ExcellenceMarquee />
      <Blog />
      <Footer />
    </div>
  );
}
