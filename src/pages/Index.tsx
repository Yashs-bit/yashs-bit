import { StickyNav } from "@/components/StickyNav";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <StickyNav />
      <Hero />
      <Footer />
    </div>
  );
};

export default Index;
