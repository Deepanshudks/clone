import { useState } from "react";
import { ChevronDown, Menu, X, ChevronUp } from "lucide-react";
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
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-13 sm:top-15 left-0 right-0 z-50 bg-white text-zinc-800 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-700 rounded-sm flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <span className="text-zinc-800 font-semibold text-xl">
              appinventiv
            </span>
          </div>

          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="group flex items-center space-x-1 px-4 py-2 text-sm font-medium border-b-2 border-transparent hover:border-blue-800 transition-colors w-28">
                  <span>{item.label}</span>
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:hidden" />
                  <ChevronUp className="w-4 h-4 transition-transform hidden group-hover:block" />
                </button>

                <AnimatePresence>
                  {activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[750px]"
                    >
                      <div className="bg-white rounded-lg shadow-2xl mt-3 border border-gray-100 overflow-hidden">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-6">
                          {item.dropdown.map((dropdownItem, idx) => (
                            <a
                              key={idx}
                              href={dropdownItem.link}
                              className={`block p-2 rounded-md hover:bg-blue-50 transition-colors ${
                                dropdownItem.featured
                                  ? "col-span-full border-b pb-4 mb-2"
                                  : ""
                              }`}
                            >
                              <span
                                className={`${
                                  dropdownItem.featured
                                    ? "text-base font-semibold flex items-center text-blue-700"
                                    : "text-sm text-gray-700"
                                }`}
                              >
                                {dropdownItem.title}
                                {dropdownItem.featured && (
                                  <span className="ml-2 text-blue-700">→</span>
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

          {/* Mobile Menu Button */}
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

      {/* Mobile Menu */}
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
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === item.label ? null : item.label
                      )
                    }
                    className="w-full flex justify-between items-center py-3 text-left font-medium text-gray-800"
                  >
                    {item.label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        activeDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="pl-4 pb-2 space-y-2"
                      >
                        {item.dropdown.map((d, j) => (
                          <a
                            key={j}
                            href={d.link}
                            className="block text-sm text-gray-600 hover:text-blue-700"
                          >
                            {d.title}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
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
