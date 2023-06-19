import PropTypes from "prop-types";
import { motion } from "framer-motion";

export function TextWrite({ children, className }) {
  return (
    <p className={className}>
      {children.split("").map((char, index) => (
        <motion.span
          key={char + "-" + index}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
            },
          }}
          className="inline-block"
          initial="hidden"
          animate="visible"
          transition={{ delay: index * 0.05 }}
        >
          {char}
        </motion.span>
      ))}
    </p>
  );
}

TextWrite.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
};
