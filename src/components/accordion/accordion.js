import React, { useState } from 'react';
import styles from './accordion.module.css';
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.accordionWrapper}>
      <button onClick={() => setIsOpen(!isOpen)}>
      {title} {isOpen ? <FaAngleDown/> : <FaAngleUp />} 
      </button>
      {isOpen && <div className={styles.accChildren}>{children}</div>}
    </div>
  );
};

export default Accordion;