import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Lenis from '@studio-freight/lenis';
import styles from './VideoScroll.module.css'; // Import the CSS module

const VideoScroll: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null!);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => 1 - Math.pow(1 - t, 4),
    });

    function onScroll() {
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollFraction = scrollY / maxScroll;
      const video = videoRef.current;

      if (video) {
        video.currentTime = video.duration * scrollFraction;
      }
    }

    window.addEventListener('scroll', onScroll);

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      window.removeEventListener('scroll', onScroll);
      lenis.destroy();
    };
  }, []);

  return (
    <div className={styles.videoContainer}>
      <video
        ref={videoRef}
        src="/bg.mp4" // Replace with your video path
        className={styles.videoElement}
        muted
        playsInline
      />
      <motion.div
        className="fixed left-6 bottom-5 transform -translate-y-1/2 flex flex-col items-center z-50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <motion.div
          className="text-white text-center mb-2"
          initial={{ y: 0 }}
          animate={{ y: 10 }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        >
          ↓
        </motion.div>
        <motion.div
          className={`text-white tracking-widest ${styles.scrollText}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          SCROLL
        </motion.div>
      </motion.div>
    </div>
  );
};

export default VideoScroll;
