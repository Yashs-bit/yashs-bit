import { Home, Code, Award, Briefcase, MessageSquare } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const menuItems = [
  { label: "Home", path: "/", icon: Home },
  { label: "Skills", path: "/skills", icon: Code },
  { label: "Qualifications", path: "/qualifications", icon: Award },
  { label: "Projects", path: "/projects", icon: Briefcase },
  { label: "Connect", path: "/contact", icon: MessageSquare },
];

export const SideRail = () => {
  const location = useLocation();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <nav className="fixed left-0 top-0 h-screen w-20 glass border-r border-border/50 z-40 flex flex-col items-center justify-center gap-8">
      {menuItems.map((item, index) => {
        const isActive = location.pathname === item.path;
        const isHovered = hoveredIndex === index;

        return (
          <div
            key={item.path}
            className="relative"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Link
              to={item.path}
              className={`flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 group ${
                isActive
                  ? "bg-primary/20 border-2 border-primary text-primary glow-primary"
                  : "border-2 border-transparent text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10"
              }`}
            >
              <item.icon className="w-5 h-5" />
            </Link>

            {/* Tooltip Label */}
            {isHovered && (
              <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 px-4 py-2 rounded-lg glass border border-primary/30 whitespace-nowrap animate-fade-in pointer-events-none">
                <span className="text-sm font-medium text-foreground">
                  {item.label}
                </span>
                {/* Arrow */}
                <div className="absolute right-full top-1/2 -translate-y-1/2 border-8 border-transparent border-r-card/60" />
              </div>
            )}
          </div>
        );
      })}

      {/* Decorative Accent Line */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-32 bg-gradient-to-b from-transparent via-primary to-transparent animate-circuit-pulse" />
    </nav>
  );
};
