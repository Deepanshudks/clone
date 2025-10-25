import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";

interface NavItem {
  label: string;
  link: string;
}

const navItems: NavItem[] = [
  { label: "About", link: "/about" },
  { label: "Services", link: "services" },
  { label: "Industries", link: "industries" },
  { label: "Expertise ", link: "expertise " },
];

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (item: NavItem) => {
    if (item.link.startsWith("/")) {
      navigate(item.link);
    } else {
      const scrollToSection = () => {
        const section = document.getElementById(item.link);
        if (section) {
          const sectionTop = section.getBoundingClientRect().top;
          window.scrollTo({ top: sectionTop, behavior: "smooth" });
        }
      };

      if (location.pathname === "/") {
        scrollToSection();
      } else {
        navigate("/");
        setTimeout(scrollToSection, 400);
      }
    }
    setMobileOpen(false);
  };

  return (
    <nav className="fixed top-13 sm:top-15 left-0 right-0 z-50 bg-white text-zinc-800 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-2 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="sm:w-8 sm:h-8 h-6 w-6 bg-primary rounded-sm flex items-center justify-center">
              <span className="text-white font-bold text-sm sm:text-xl">P</span>
            </div>
            <span className="text-zinc-800 font-bold text-md pt-1 sm:text-xl">
              recesion Core Tech Solutions Pvt. Ltd.
            </span>
          </div>

          <div className="hidden lg:flex gap-6 items-center">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item)}
                className="py-5 gap-1 cursor-pointer text-sm border-b-2 border-white hover:border-primary text-foreground hover:text-primary transition-colors w-fit"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="lg:hidden">
            <button
              className="p-2 rounded-md hover:bg-gray-100"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-white shadow-md border-t border-gray-100"
          >
            <div className="flex flex-col px-4 pb-4">
              {navItems.map((item, i) => (
                <div key={i} className="border-b border-gray-100">
                  <button
                    onClick={() => handleNavClick(item)}
                    className="w-full flex justify-between items-center py-3 text-left font-medium text-gray-800"
                  >
                    {item.label}
                  </button>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
