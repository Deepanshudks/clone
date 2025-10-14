import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  {
    label: "InventivAI",
    dropdown: [
      { title: "Explore AI Tech Solutions", link: "#", featured: true },
      { title: "AI Knowledge Hub", link: "#" },
      { title: "Generative AI Development", link: "#" },
      { title: "Generative AI Consulting", link: "#" },
      { title: "AI Agent Development", link: "#" },
      { title: "AI Integration", link: "#" },
      { title: "ML Development", link: "#" },
      { title: "Computer Vision", link: "#" },
      { title: "AI Copilot Development", link: "#" },
      { title: "RPA Development", link: "#" },
    ],
  },
  {
    label: "About",
    dropdown: [
      { title: "Our Story", link: "#" },
      { title: "Team", link: "#" },
      { title: "Careers", link: "#" },
      { title: "Contact", link: "#" },
    ],
  },
  {
    label: "Services",
    dropdown: [
      { title: "Web Development", link: "#" },
      { title: "Mobile Development", link: "#" },
      { title: "Cloud Solutions", link: "#" },
      { title: "AI & ML", link: "#" },
      { title: "Digital Marketing", link: "#" },
    ],
  },
  {
    label: "Industries",
    dropdown: [
      { title: "Healthcare", link: "#" },
      { title: "Finance", link: "#" },
      { title: "E-commerce", link: "#" },
      { title: "Education", link: "#" },
      { title: "Manufacturing", link: "#" },
    ],
  },
  {
    label: "Portfolio",
    dropdown: [
      { title: "Case Studies", link: "#" },
      { title: "Success Stories", link: "#" },
      { title: "Client Testimonials", link: "#" },
    ],
  },
  {
    label: "Resources",
    dropdown: [
      { title: "Blog", link: "#" },
      { title: "Whitepapers", link: "#" },
      { title: "Webinars", link: "#" },
      { title: "Newsletter", link: "#" },
    ],
  },
];

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <nav className="fixed top-15 left-0 right-0 z-50 bg-white text-zinc-800  ">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-18">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">
                A
              </span>
            </div>
            <span className="text-foreground font-semibold text-xl">
              appinventiv
            </span>
          </div>

          <div className="flex items-center space-x-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center space-x-1 px-4 py-2 border-b-2 border-transparent text-foreground hover:border-blue-800 transition-colors">
                  <span className="text-sm font-medium    transition-all duration-200">
                    {item.label}
                  </span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                <AnimatePresence>
                  {activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[800px]"
                    >
                      <div className="bg-white rounded-lg shadow-2xl border mt-2 border-border overflow-hidden">
                        <div className="grid grid-cols-2 gap-6 p-8">
                          {item.dropdown.map((dropdownItem, idx) => (
                            <a
                              key={idx}
                              href={dropdownItem.link}
                              className={`block p-3 rounded-md hover:bg-accent/10 transition-colors group ${
                                dropdownItem.featured
                                  ? "col-span-2 border-b  pb-6 mb-2"
                                  : ""
                              }`}
                            >
                              <span
                                className={`text-dropdown-foreground group-hover:text-primary transition-colors ${
                                  dropdownItem.featured
                                    ? "text-base font-semibold flex items-center"
                                    : "text-sm"
                                }`}
                              >
                                {dropdownItem.title}
                                {dropdownItem.featured && (
                                  <span className="ml-2 text-primary">→</span>
                                )}
                              </span>
                            </a>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
