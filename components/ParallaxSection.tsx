import { motion } from 'framer-motion';

interface ParallaxSectionProps {
  children: React.ReactNode;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({ children }) => {
  return (
    <motion.div
      className="relative w-full h-screen bg-black"
      initial={{ y: 0 }}
      animate={{ y: ['0%', '5%'] }}
      transition={{ duration: 15, repeat: Infinity, repeatType: 'reverse' }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-end">
        <div className="text-center text-white p-6 md:p-12">{children}</div>
      </div>
    </motion.div>
  );
};

export default ParallaxSection;
