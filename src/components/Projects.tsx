import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { useSoundEffects } from "@/hooks/useSoundEffects";

const projects = [
  {
    title: "Project Title 1",
    description: "Brief description of the project and its impact. This will be replaced with your actual project details.",
    tech: ["IoT", "Arduino", "Sensors"],
    url: "https://github.com/yourusername/project1", // Add your project link here
  },
  {
    title: "Project Title 2",
    description: "Brief description of the project and its impact. This will be replaced with your actual project details.",
    tech: ["AI", "Python", "ML"],
    url: "https://github.com/yourusername/project2", // Add your project link here
  },
  {
    title: "Project Title 3",
    description: "Brief description of the project and its impact. This will be replaced with your actual project details.",
    tech: ["Embedded C", "ESP32", "Cloud"],
    url: "https://github.com/yourusername/project3", // Add your project link here
  },
  {
    title: "Project Title 4",
    description: "Brief description of the project and its impact. This will be replaced with your actual project details.",
    tech: ["Automation", "C++", "Hardware"],
    url: "https://github.com/yourusername/project4", // Add your project link here
  },
];

export const Projects = () => {
  const { playHoverSound, playClickSound } = useSoundEffects();
  
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 gradient-text">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass p-8 rounded-2xl transition-all duration-500 hover:scale-105 hover:-rotate-1 glow-hover group cursor-pointer"
              style={{
                animation: `fade-in-up 0.8s ease-out ${index * 0.15}s both`,
              }}
              onMouseEnter={playHoverSound}
            >
              <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <Button
                variant="outline"
                className="w-full border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group-hover:glow-primary"
                onClick={(e) => {
                  e.stopPropagation();
                  playClickSound();
                  window.open(project.url, '_blank');
                }}
              >
                View Project
                <ExternalLink className="ml-2 w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
