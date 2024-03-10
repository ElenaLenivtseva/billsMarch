import React from "react";
import "./header.scss";
import { motion } from "framer-motion";

const variants = {
  hidden: {
    opacity: 0, 
    x: -150
  },
  visible: {
    opacity: 1, x: 0 
  }
}

const Header = () => {
  return (
    <section className="header section">
      <motion.h1
        className="header__title" variants={variants} 
        initial='hidden'
        animate='visible'
        transition={{ duration: 0.8 }}
      >
        Калькулятор раздельного бюджета
      </motion.h1>
      <motion.h2 className="header__subtitle"  variants={variants} initial='hidden'
        animate='visible'
        transition={{ duration: 0.8, delay: 0.8 }}>
        Не порть отношения вопросом, кто будет считать чеки. <br />
        Пусть ими займется программа.
      </motion.h2>
    </section>
  );
};

export default Header;
