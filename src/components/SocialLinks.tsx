import { Button } from "@/components/ui/button";
import { Twitter, Linkedin } from "lucide-react";

const socials = [
  {
    name: "Twitter/X",
    icon: Twitter,
    url: "https://x.com/WajeYash77",
    color: "text-primary",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/yash-waje-419389338",
    color: "text-secondary",
  },
];

export const SocialLinks = () => {
  return (
    <section id="social" className="py-24 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-8 gradient-text">
          Let's Connect
        </h2>
        
        <p className="text-xl text-muted-foreground mb-12">
          Feel free to reach out and connect with me on social platforms
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          {socials.map((social, index) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto animate-fade-in-up"
              style={{
                animationDelay: `${index * 0.2}s`,
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
      </div>
    </section>
  );
};
