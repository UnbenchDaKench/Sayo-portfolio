import React, { useEffect, useRef } from "react";
import "./FadeInTransition.scss";
import { motion } from "framer-motion";

function FadeInTransition({ children }) {

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 3 }}
    >
      {children}
    </motion.div>
  );
}

export default FadeInTransition;
