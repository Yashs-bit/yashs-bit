import { Projects } from "@/components/Projects";
import { FloatingOrb } from "@/components/FloatingOrb";
import { Footer } from "@/components/Footer";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <FloatingOrb />
      <Projects />
      <Footer />
    </div>
  );
};

export default ProjectsPage;
