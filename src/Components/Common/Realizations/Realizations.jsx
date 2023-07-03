import realizations from "/src/assets/data/realizations.json";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { AspectRatio, Image } from "@mantine/core";
import "./Realizations.scss";

const Realizations = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <>
      <h2>
        Nasze <span>realizacje</span>
      </h2>
      <div className="realizationsContainer" id="realizations">
        {realizations.map((data) => (
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.75 }}
            whileHover={{ scale: 1.03, transition: { duration: 0.5 } }}
            whileTap={{ scale: 1 }}
            key={data.id}
            className="realization-card"
          >
            <div className="content">
              <AspectRatio ratio={16 / 9}>
                <Image src={data.image} alt={data.content} />
              </AspectRatio>
              <div className="realization-title">
                <h5>
                  {data.title}
                  <span> {data.hightlight}</span>
                  {data.content}
                </h5>
                <a href={data.href}>
                  <div className="button">
                    <p>Zobacz</p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Realizations;
