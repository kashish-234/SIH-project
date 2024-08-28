import { motion } from 'framer-motion';

const ContentSection: React.FC = () => {
  return (
    <div className="w-full h-screen bg-gray-900 flex flex-col items-center justify-center text-white p-8">
      <motion.h1
        className="text-5xl font-semibold mb-6 z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Oil Spill Detection and Response
      </motion.h1>
      <motion.p
        className="text-lg max-w-2xl text-center z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Our technology provides real-time monitoring and quick response solutions for oil spills, aiming to minimize environmental damage and ensure swift action.
      </motion.p>
      <a href="#contact" className="mt-8 bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition z-10">
        Contact Us
      </a>
    </div>
  );
};

export default ContentSection;
