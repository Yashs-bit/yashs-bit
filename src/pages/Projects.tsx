import { Projects } from "@/components/Projects";
import { StickyNav } from "@/components/StickyNav";
import { Footer } from "@/components/Footer";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <StickyNav />
      <Projects />
      <Footer />
    </div>
  );
};

export default ProjectsPage;
