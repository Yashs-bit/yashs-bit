import { SideRail } from "@/components/SideRail";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SideRail />
      <Hero />
      <Footer />
    </div>
  );
};

export default Index;
