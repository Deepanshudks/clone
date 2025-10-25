import { Button } from "@mui/material";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-primary to-blue-900 text-white py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 md:gap-16">
        <div className="flex-1 flex flex-col gap-4 text-center md:text-left">
          <h3 className="uppercase font-bold tracking-widest text-lg md:text-xl">
            PRECISION CORE TECH SOLUTIONS
          </h3>
          <p className="text-gray-300 text-sm md:text-base">
            Engineering Precision. Powering Innovation.
          </p>
        </div>

        <div className="flex-1 text-center md:text-left">
          <h4 className="font-semibold text-white text-base md:text-lg mb-2">
            Our Vision
          </h4>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            To be a leading Indian technology and manufacturing firm recognized
            for precision, reliability, and innovation in mechanical and
            electronic engineering systems.
          </p>
        </div>

        <div className="flex-1 text-center md:text-left flex flex-col gap-4">
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            We welcome project inquiries, collaborations, and tender
            partnerships. Please use the enquiry form linked below for all
            communication.
          </p>
          <Button
            variant="contained"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition duration-300"
          >
            Submit Your Enquiry
          </Button>
        </div>
      </div>

      <hr className="border-gray-600 my-4" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        <div className="text-center md:text-left text-gray-400">
          © 2025 Precesion Core Tech Solutions Pvt. Ltd. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
