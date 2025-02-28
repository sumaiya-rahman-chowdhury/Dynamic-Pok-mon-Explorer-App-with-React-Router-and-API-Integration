import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="flex items-center justify-center p-6 bg-[#F3E8FF]">
      <div className="h-auto max-w-4xl mx-auto  rounded-lg p-8 my-10">
        {/* About Us Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-purple-700 text-center mb-4 tracking-wide"
        >
          About Us
        </motion.h1>

        {/* About Us Text */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-700 text-lg leading-relaxed mb-6"
        >
          At <span className="font-semibold text-purple-500">Excellence</span>,
          we believe in delivering exceptional solutions that meet your needs
          and exceed your expectations. With a passionate team of professionals,
          we strive to create innovative, reliable, and user-friendly products
          and services.
        </motion.p>

        {/* Our Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
            className="shadow-lg p-3 rounded-lg border-2 cursor-pointer border-purple-300"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Our Mission
            </h2>
            <p className="text-gray-600">
              To empower individuals and organizations by providing high-quality
              services that drive success and foster growth.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            viewport={{ once: true }}
            className="shadow-lg p-3 rounded-lg border-2 cursor-pointer border-purple-300"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Our Vision
            </h2>
            <p className="text-gray-600">
              To be a global leader in our industry, known for innovation,
              integrity, and excellence in everything we do.
            </p>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-6"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-2 text-center">
            Core Values
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center">
              ✅ Commitment to quality and innovation
            </li>
            <li className="flex items-center">💡 Customer-centric approach</li>
            <li className="flex items-center">🔍 Integrity and transparency</li>
            <li className="flex items-center">
              🤝 Fostering teamwork and collaboration
            </li>
          </ul>
        </motion.div>

        {/* Contact Us Button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <button
            className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg 
  hover:bg-purple-700 transition-transform transform hover:scale-105 shadow-md"
          >
            Contact Us
          </button>
        </motion.div>
      </div>
    </div>
  );
}
