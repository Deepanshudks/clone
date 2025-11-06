import { Phone } from "lucide-react";
import { motion } from "framer-motion";
import { Email } from "../../mock/shared";

const AnnouncementBanner = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-primary text-white overflow-hidden">
      <div className="flex flex-row items-center justify-between gap-3 sm:gap-0 py-3 sm:py-4 px-4 sm:px-20">
        <div className="relative w-full sm:w-[68vw] overflow-hidden ">
          <motion.div
            className="whitespace-nowrap text-xs md:text-sm font-medium"
            animate={{ x: ["100%", "-100%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 20,
            }}
          >
            Delivering advanced mechanical, electrical, and electronic systems
            for industrial, infrastructure, and energy applications.
            &nbsp;&nbsp;&nbsp;
            <span className="underline text-xs sm:text-sm mx-2 sm:mx-3">
              EXPLORE NOW!
            </span>
            &nbsp;&nbsp;&nbsp; Delivering advanced mechanical, electrical, and
            electronic systems for industrial, infrastructure, and energy
            applications. &nbsp;&nbsp;&nbsp;
            <span className="underline text-xs sm:text-sm mx-2 sm:mx-3">
              EXPLORE NOW!
            </span>
          </motion.div>
        </div>
        <div>
          <a
            href={`mailto:${Email}`}
            className="flex items-center cursor-pointer justify-center space-x-1 text-[0.65rem] sm:text-[0.875rem] font-medium normal-case rounded-md px-2 sm:px-4 !py-1.5 !sm:py-2 !w-36 sm:w-28 md:w-full bg-white text-blue-700 hover:bg-blue-50 transition-all no-underline"
          >
            <Phone className="w-4 h-4 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
            <span>Contact Us</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBanner;
