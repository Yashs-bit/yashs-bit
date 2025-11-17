import { GraduationCap, Award, Briefcase } from "lucide-react";

const qualifications = [
  {
    icon: GraduationCap,
    title: "Bachelor's in Electronics & Computer Engineering",
    description: "Savitribai Phule Pune University (SPPU)",
  },
  {
    icon: Briefcase,
    title: "Hands-on Experience",
    description: "AI, IoT prototypes, automation projects, and sensor-based systems",
  },
  {
    icon: Award,
    title: "Project Portfolio",
    description: "Completed multiple academic + personal projects in embedded tech, web-connected systems, and smart devices",
  },
];

export const Qualifications = () => {
  return (
    <section id="qualifications" className="py-24 px-6 bg-card/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 gradient-text">
          Qualifications
        </h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />

          <div className="space-y-12">
            {qualifications.map((qual, index) => (
              <div
                key={qual.title}
                className="relative pl-20 animate-fade-in-up"
                style={{
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 top-2 w-5 h-5 rounded-full bg-primary glow-primary border-4 border-background" />

                <div className="glass p-6 rounded-2xl hover:scale-105 transition-all duration-300 glow-hover">
                  <div className="flex items-start gap-4">
                    <qual.icon className="w-10 h-10 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-2xl font-semibold mb-2 text-foreground">
                        {qual.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {qual.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
