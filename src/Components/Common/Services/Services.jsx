import services from "/src/assets/data/services.json";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Services.scss";

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <div className="services" id="services">
      <h2>
      What do we <span>do</span>?
            </h2>
      <div className="serviceContainer">
        {services.map((data) => (
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.75 }}
            whileHover={{ scale: 1.03, transition: { duration: 0.5 } }}
            whileTap={{ scale: 1 }}
            key={data.id}
            className="service-card"
          >
            <div className="content">
              <img src={data.icon} alt={data.content}></img>
              <h5>
                {data.content}
                <span> {data.hightlight}</span>
              </h5>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
