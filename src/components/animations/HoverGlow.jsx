import { motion } from "framer-motion";

export default function HoverGlow({ children }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        y: -8,
        boxShadow: "0px 15px 40px rgba(59,130,246,0.45)",
      }}
      transition={{
        duration: 0.3,
      }}
      style={{
        borderRadius: "20px",
      }}
    >
      {children}
    </motion.div>
  );
}