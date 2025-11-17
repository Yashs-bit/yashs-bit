import heroBg from "@/assets/hero-bg.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          animation: "circuit-pulse 4s ease-in-out infinite",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 rounded-full bg-primary animate-float glow-primary" />
      <div className="absolute top-40 right-20 w-3 h-3 rounded-full bg-secondary animate-float glow-secondary" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-32 left-20 w-2 h-2 rounded-full bg-accent animate-float" style={{ animationDelay: "2s" }} />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center animate-fade-in-up">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-glow">
          Yash Waje
        </h1>
        
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 gradient-text">
          Electronics & Computer Engineer
        </h2>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 font-light italic max-w-2xl mx-auto">
          Exploring AI, IoT & Smart Embedded Systems with curiosity + creativity.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/projects">
            <Button
              size="lg"
              className="glass border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground glow-hover transition-all duration-300 hover:scale-105"
            >
              View Projects
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
          
          <Link to="/contact">
            <Button
              size="lg"
              variant="outline"
              className="glass border-2 border-secondary text-secondary hover:bg-secondary/10 glow-hover transition-all duration-300 hover:scale-105"
            >
              Get in Touch
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
