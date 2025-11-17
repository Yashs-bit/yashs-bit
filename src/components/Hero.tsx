import heroBg from "@/assets/hero-bg.jpg";

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
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center animate-fade-in-up">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-glow">
          Yash Waje
        </h1>
        
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 gradient-text">
          Electronics & Computer Engineer
        </h2>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light italic">
          Exploring AI, IoT & Smart Embedded Systems with curiosity + creativity.
        </p>

        <div className="max-w-3xl mx-auto text-left md:text-center space-y-4 text-foreground/90 leading-relaxed">
          <p>
            Hi, I'm Yash, an Electronics & Computer Engineer passionate about <span className="text-primary font-semibold">Artificial Intelligence</span>, <span className="text-secondary font-semibold">IoT systems</span>, and <span className="text-accent font-semibold">smart embedded solutions</span>.
          </p>
          <p>
            I enjoy building things that blend innovation + real-world impact, whether it's intelligent devices, automation systems, or AI-driven applications.
          </p>
          <p>
            I'm naturally curious, outgoing, and experimental—constantly exploring new tech, solving problems, and pushing myself to understand how things work at the deepest level. Tech, creativity, and forward-thinking engineering? That's my zone. 🚀
          </p>
        </div>
      </div>
    </section>
  );
};
