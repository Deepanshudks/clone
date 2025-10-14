import { Phone } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@mui/material";

const AnnouncementBanner = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-blue-500 text-white overflow-hidden">
      <div className="flex items-center justify-center py-3">
        <div className="relative w-[60vw] overflow-hidden">
          <motion.div
            className="whitespace-nowrap text-xs font-medium"
            animate={{ x: ["100%", "-100%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 20,
            }}
          >
            Uncover proof of Appinventiv's impact across 3000+ digital
            deliveries for 35+ industries.&nbsp;&nbsp;&nbsp;
            <span className="underline text-sm mx-3">EXPLORE NOW!</span>
            &nbsp;&nbsp;&nbsp; Uncover proof of Appinventiv's impact across
            3000+ digital deliveries for 35+ industries.&nbsp;&nbsp;&nbsp;
            <span className="underline text-sm mx-3">EXPLORE NOW!</span>
          </motion.div>
        </div>

        <Button
          sx={{ textTransform: "none" }}
          variant="contained"
          className="!bg-white !text-black "
        >
          <Phone className="w-4 h-4 mr-2" />
          Contact Us
        </Button>
      </div>
    </div>
  );
};

export default AnnouncementBanner;
