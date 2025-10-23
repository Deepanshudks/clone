import React from "react";
import AboutSection from "../aboutSection";

const AboutUs: React.FC = () => {
  return (
    <div className="w-full font-sans text-gray-800">
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-28 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Precision Core Tech Solutions Pvt. Ltd.
        </h1>
        <p className="text-xl sm:text-2xl mb-6">
          Engineering Precision. Powering Progress.
        </p>
        <p className="max-w-2xl mx-auto mb-8">
          Delivering advanced mechanical, electrical, and electronic systems for
          industrial, infrastructure, and energy applications.
        </p>
        <a
          href="#contact"
          className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          Contact Now
        </a>
      </section>

      <AboutSection />

      <section className="bg-gray-100 py-16 px-6 sm:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p>
              To be a trusted engineering and manufacturing partner known for
              precision, innovation, and integrity — building technology that
              powers the next generation of industry and infrastructure.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <ul className="list-disc ml-5 space-y-2">
              <li>
                Design and deliver robust, high-performance systems and
                components.
              </li>
              <li>
                Support industries with efficient, reliable, and cost-effective
                solutions.
              </li>
              <li>
                Continuously improve through innovation, technology adoption,
                and quality excellence.
              </li>
              <li>
                Foster long-term partnerships with clients through transparency
                and technical expertise.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 sm:px-16">
        <h3 className="text-3xl font-bold mb-6 text-center">Core Values</h3>
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            "Precision",
            "Innovation",
            "Integrity",
            "Commitment",
            "Quality",
          ].map((val) => (
            <div
              key={val}
              className="bg-blue-50 p-12 py-10 rounded-lg shadow hover:shadow-lg transition text-center"
            >
              <h4 className="font-semibold mb-2 text-xl">{val}</h4>
              <p className="text-sm text-gray-700">
                {val === "Precision" &&
                  "Accuracy in every process, from design to delivery."}
                {val === "Innovation" &&
                  "Constantly evolving through new ideas, materials, and methods."}
                {val === "Integrity" &&
                  "Ethical business practices and transparent operations."}
                {val === "Commitment" &&
                  "Focused on client satisfaction and long-term reliability."}
                {val === "Quality" &&
                  "Zero-defect manufacturing backed by rigorous testing."}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-100 py-16 px-6 sm:px-16">
        <h3 className="text-3xl font-bold mb-8 text-center">
          Our Capabilities
        </h3>
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            {
              title: "Mechanical Engineering",
              items: [
                "Custom-fabricated components, assemblies, and structural elements.",
                "CNC-machined precision parts with tight dimensional control.",
                "Mechanical subsystems for automation and industrial machinery.",
              ],
            },
            {
              title: "Electrical & Power Systems",
              items: [
                "Power distribution systems, control panels, and supply modules.",
                "AC/DC power systems designed for durability and stability.",
                "Integration of electrical and electronic controls in mechanical frameworks.",
              ],
            },
            {
              title: "Electronic Systems",
              items: [
                "Embedded system design for automation and industrial control.",
                "Sensor and monitoring modules, PCB design, and system testing.",
                "Intelligent systems built with high efficiency and operational reliability.",
              ],
            },
            {
              title: "Hydraulic & Pneumatic Systems",
              items: [
                "High-performance cylinders, valves, and manifolds.",
                "Custom motion control solutions for machinery and automation.",
                "Leak-proof, long-life systems optimized for precision and power.",
              ],
            },
            {
              title: "Steel Valves & Structural Components",
              items: [
                "Engineered steel valves for fluid and gas control applications.",
                "Heavy-duty steel structures, supports, and enclosures for industrial use.",
                "Designed for corrosion resistance, durability, and long service life.",
              ],
            },
            {
              title: "High-Precision Components",
              items: [
                "Ultra-fine machined and inspected parts for critical applications.",
                "Tolerance control down to micron levels.",
                "Used in research, defense, and advanced industrial systems.",
              ],
            },
          ].map((cap) => (
            <div
              key={cap.title}
              className="bg-white p-6 shadow-lg border border-gray-100 transition-all rounded-lg   duration-300 hover:shadow-xl hover:border-mute"
            >
              <h4 className="font-semibold mb-2">{cap.title}</h4>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                {cap.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="py-16 px-6 sm:px-16 bg-blue-50 text-center"
      >
        <h3 className="text-3xl font-bold mb-4">Contact / Enquiry</h3>
        <p className="mb-6">
          We welcome inquiries for collaboration, tenders, and industrial
          requirements. Submit your questions or project details using the form
          below.
        </p>
        <a
          href="https://forms.gle/your-google-form-link"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Submit Your Enquiry
        </a>
      </section>

      <footer className="bg-gray-800 text-white text-center py-6 mt-12">
        © 2025 Precesion Core Tech Solutions Pvt. Ltd. All Rights Reserved.
      </footer>
    </div>
  );
};

export default AboutUs;
