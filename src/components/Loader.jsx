import React from 'react';
import { motion } from 'framer-motion';
import './Loader.css';

const Loader = () => {
  return (
    <motion.div 
      className="loader-container"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="loader-content">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            duration: 0.8, 
            ease: "easeOut",
            type: "spring",
            stiffness: 100 
          }}
          className="logo-wrapper"
        >
          <img src="/logo school.jpg" alt="BM Maktabi Logo" className="loader-logo" />
        </motion.div>
        
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="loader-text"
        >
          BM MAKTABI
        </motion.h1>
        
        <motion.div 
          className="loader-line-container"
          initial={{ width: 0 }}
          animate={{ width: "200px" }}
          transition={{ delay: 0.8, duration: 1, ease: "easeInOut" }}
        >
          <div className="loader-line" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Loader;
