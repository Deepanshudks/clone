import React, { useEffect, useState } from "react";
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
  { label: "Expertise", link: "expertise" },
];

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
  }, [mobileOpen]);

  const handleNavClick = (item: NavItem) => {
    if (item.link.startsWith("/")) {
      navigate(item.link);
    } else {
      const scrollToSection = () => {
        const section = document.getElementById(item.link);
        if (section) {
          const sectionTop = section.offsetTop;
          window.scrollTo({
            top: sectionTop - 120,
            behavior: "smooth",
          });
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
    <>
      <nav className="fixed top-13 left-0 right-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-semibold">Navbar</div>

            <div className="hidden lg:flex gap-6 items-center">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item)}
                  className="py-5 text-sm border-b-2 border-transparent hover:border-primary text-gray-700 hover:text-primary transition-colors"
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
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-28 left-0 right-0 bottom-0 z-40 bg-white overflow-y-auto shadow-md"
          >
            <div className="flex flex-col px-4 pb-4">
              {navItems.map((item) => (
                <div key={item.label} className="border-b border-gray-100">
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
    </>
  );
};

export default Navbar;
