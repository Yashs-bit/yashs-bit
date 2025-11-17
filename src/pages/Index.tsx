import { FloatingOrb } from "@/components/FloatingOrb";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <FloatingOrb />
      <Hero />
      <Footer />
    </div>
  );
};

export default Index;
