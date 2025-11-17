import { Home, Code, Award, Briefcase, MessageSquare } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useSoundEffects } from "@/hooks/useSoundEffects";
import logo from "@/assets/yash_logo.jpg";

const menuItems = [
  { label: "Home", path: "/", icon: Home },
  { label: "Skills", path: "/skills", icon: Code },
  { label: "Qualifications", path: "/qualifications", icon: Award },
  { label: "Projects", path: "/projects", icon: Briefcase },
  { label: "Connect", path: "/contact", icon: MessageSquare },
];

export const StickyNav = () => {
  const location = useLocation();
  const { playHoverSound, playClickSound } = useSoundEffects();

  return (
    <nav className="sticky top-0 z-50 w-full glass border-b border-border/50 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name */}
          <Link 
            to="/" 
            className="flex items-center gap-1.5 sm:gap-2 group"
            onMouseEnter={playHoverSound}
            onClick={playClickSound}
          >
            <img 
              src={logo} 
              alt="Yash Waje Logo" 
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg object-cover"
            />
            <span className="text-sm sm:text-xl font-heading font-bold gradient-text">
              Yash Waje
            </span>
          </Link>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-2">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
                    isActive
                      ? "bg-primary/20 text-primary border-b-2 border-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                  onMouseEnter={playHoverSound}
                  onClick={playClickSound}
                >
                  <item.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Glowing Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
    </nav>
  );
};
