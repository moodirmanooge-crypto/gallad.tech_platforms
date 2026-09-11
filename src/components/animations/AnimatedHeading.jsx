import { motion } from "framer-motion";

export default function AnimatedHeading({ text, highlight = [], style }) {
  const words = text.split(" ");
  const highlightSet = new Set(
    highlight.map((w) => w.toLowerCase())
  );

  return (
    <motion.h2
      style={{
        color: "#fff",
        textAlign: "center",
        marginBottom: 40,
        fontSize: 40,
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "0.35em",
        ...style,
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.07 } },
      }}
    >
      {words.map((word, i) => {
        const isHighlighted = highlightSet.has(
          word.toLowerCase().replace(/[^a-z0-9]/gi, "")
        );

        return (
          <motion.span
            key={i}
            style={{
              display: "inline-block",
              color: isHighlighted ? "#3b82f6" : undefined,
            }}
            variants={{
              hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
              visible: { opacity: 1, y: 0, filter: "blur(0px)" },
            }}
            transition={{ duration: 0.5 }}
          >
            {word}
          </motion.span>
        );
      })}
    </motion.h2>
  );
}