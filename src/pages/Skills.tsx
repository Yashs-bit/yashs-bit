import { Skills } from "@/components/Skills";
import { FloatingOrb } from "@/components/FloatingOrb";
import { Footer } from "@/components/Footer";

const SkillsPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <FloatingOrb />
      <Skills />
      <Footer />
    </div>
  );
};

export default SkillsPage;
