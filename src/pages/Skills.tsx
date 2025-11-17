import { Skills } from "@/components/Skills";
import { StickyNav } from "@/components/StickyNav";
import { Footer } from "@/components/Footer";

const SkillsPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <StickyNav />
      <Skills />
      <Footer />
    </div>
  );
};

export default SkillsPage;
