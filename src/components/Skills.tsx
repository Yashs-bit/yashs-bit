import { Brain, Cpu, Wrench, Code, Cloud, Lightbulb, Users } from "lucide-react";

const skills = [
  {
    icon: Brain,
    title: "AI & ML",
    description: "Model building, data handling, automation logic",
  },
  {
    icon: Cpu,
    title: "IoT & Embedded Systems",
    description: "Microcontrollers, sensors, real-time systems, edge devices",
  },
  {
    icon: Wrench,
    title: "Electronics",
    description: "Circuit design, interfacing, hardware debugging",
  },
  {
    icon: Code,
    title: "Programming",
    description: "C, C++, Python, Embedded C",
  },
  {
    icon: Cloud,
    title: "Tech Stack",
    description: "Arduino, ESP boards, basic cloud IoT",
  },
  {
    icon: Lightbulb,
    title: "Problem-Solving",
    description: "System thinking, debugging, optimization",
  },
  {
    icon: Users,
    title: "Soft Skills",
    description: "Communication, curiosity-driven learning, teamwork",
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 gradient-text">
          Skills & Expertise
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className="glass p-6 rounded-2xl transition-all duration-500 hover:scale-105 glow-hover cursor-pointer group"
              style={{
                animation: `fade-in-up 0.8s ease-out ${index * 0.1}s both`,
              }}
            >
              <skill.icon className="w-12 h-12 text-primary mb-4 group-hover:text-secondary transition-colors duration-300" />
              <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                {skill.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
