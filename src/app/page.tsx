import Hero from "@/components/Hero";
import heroData from "@/data/hero.json"; // Direct import for static JSON
import About from "@/components/About";
export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Passing the parsed JSON directly as props */}
      <Hero
        title={heroData.title}
        subtitle={heroData.subtitle}
        ctaText={heroData.ctaText}
        ctaLink={heroData.ctaLink}
      />
      <About/>

      {/* Other sections will follow the same pattern later */}
    </main>
  );
}
