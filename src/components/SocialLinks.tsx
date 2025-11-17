import { Button } from "@/components/ui/button";
import { Twitter, Linkedin, Github, Mail } from "lucide-react";

const socials = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/Yashs-bit",
    color: "text-primary",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/yash-waje-419389338",
    color: "text-secondary",
  },
  {
    name: "Twitter/X",
    icon: Twitter,
    url: "https://x.com/WajeYash77",
    color: "text-accent",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:yashwaje9691@gmail.com",
    color: "text-primary",
  },
];

export const SocialLinks = () => {
  return (
    <section id="social" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-8 gradient-text">
          Let's Connect
        </h2>
        
        <p className="text-xl text-muted-foreground mb-12">
          Feel free to reach out and connect with me
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {socials.map((social, index) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="animate-fade-in-up"
              style={{
                animationDelay: `${index * 0.15}s`,
              }}
            >
              <Button
                variant="outline"
                size="lg"
                className={`w-full glass border-2 ${social.color} hover:bg-primary/10 glow-hover transition-all duration-300 hover:scale-105`}
              >
                <social.icon className="mr-3 w-5 h-5" />
                {social.name}
              </Button>
            </a>
          ))}
        </div>

        <div className="mt-12 glass p-6 rounded-2xl max-w-md mx-auto">
          <p className="text-sm text-muted-foreground mb-2">Email me directly at:</p>
          <a
            href="mailto:yashwaje9691@gmail.com"
            className="text-lg font-semibold text-primary hover:text-secondary transition-colors"
          >
            yashwaje9691@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};
