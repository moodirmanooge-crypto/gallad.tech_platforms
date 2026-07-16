import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ScrollReveal({ children }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: 80,
      }}
      animate={
        inView
          ? {
              opacity: 1,
              y: 0,
            }
          : {}
      }
      transition={{
        duration: 0.8,
      }}
    >
      {children}
    </motion.div>
  );
}