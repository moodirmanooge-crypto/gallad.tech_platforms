import { motion } from "framer-motion";

// Elements enter from alternating corners as they scroll into view,
// with a slight rotation that settles flat — used for image grids.
const corners = [
  { x: -70, y: -50 },
  { x: 70, y: -50 },
  { x: -70, y: 50 },
  { x: 70, y: 50 },
];

export default function CornerReveal({ children, index = 0, style }) {
  const corner = corners[index % corners.length];

  return (
    <motion.div
      style={style}
      initial={{
        opacity: 0,
        x: corner.x,
        y: corner.y,
        rotate: index % 2 === 0 ? -5 : 5,
        scale: 0.92,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        rotate: 0,
        scale: 1,
      }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.7,
        delay: (index % 4) * 0.09,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}