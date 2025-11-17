import { useState } from "react";
import { Home, Code, Award, Briefcase, MessageSquare, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  { label: "Home", path: "/", icon: Home },
  { label: "Skills", path: "/skills", icon: Code },
  { label: "Qualifications", path: "/qualifications", icon: Award },
  { label: "Projects", path: "/projects", icon: Briefcase },
  { label: "Connect", path: "/contact", icon: MessageSquare },
];

export const FloatingOrb = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Main Floating Orb Button */}
      <button
        onClick={toggleMenu}
        className={`fixed bottom-8 right-8 z-50 w-16 h-16 rounded-full glass border-2 border-primary/50 flex items-center justify-center transition-all duration-500 ${
          isOpen
            ? "bg-primary/20 scale-90 rotate-90"
            : "bg-background/60 hover:scale-110 animate-glow-pulse hover:border-primary"
        }`}
        aria-label="Navigation menu"
      >
        {isOpen ? (
          <X className="w-7 h-7 text-primary" />
        ) : (
          <div className="relative w-7 h-7">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-secondary to-accent animate-circuit-pulse" />
            <div className="absolute inset-1 rounded-full bg-background" />
          </div>
        )}
      </button>

      {/* Radial Menu Items */}
      {menuItems.map((item, index) => {
        const angle = (index * 72 - 90) * (Math.PI / 180); // 360/5 = 72 degrees apart
        const radius = 120; // Distance from center orb
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        const isActive = location.pathname === item.path;

        return (
          <Link
            key={item.path}
            to={item.path}
            onClick={handleNavClick}
            className={`fixed bottom-8 right-8 z-40 w-14 h-14 rounded-full glass border-2 flex items-center justify-center transition-all duration-500 group ${
              isActive
                ? "border-primary bg-primary/20"
                : "border-border hover:border-primary hover:bg-primary/10"
            } ${
              isOpen
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none scale-0"
            }`}
            style={{
              transform: isOpen
                ? `translate(${x}px, ${y}px) scale(1)`
                : "translate(0, 0) scale(0)",
              transitionDelay: isOpen ? `${index * 50}ms` : "0ms",
            }}
            aria-label={item.label}
          >
            <item.icon
              className={`w-5 h-5 transition-colors ${
                isActive ? "text-primary" : "text-foreground group-hover:text-primary"
              }`}
            />
            
            {/* Tooltip */}
            <span className="absolute bottom-full mb-2 px-3 py-1 rounded-lg bg-background/95 border border-primary/30 text-xs font-medium text-foreground whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
              {item.label}
            </span>
          </Link>
        );
      })}

      {/* Backdrop Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-background/30 backdrop-blur-sm z-30 animate-fade-in"
          onClick={toggleMenu}
        />
      )}
    </>
  );
};
