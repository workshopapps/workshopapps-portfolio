import React from "react";
import styles from "./BgOverlay.module.css";

const BgOverlay = ({ handleBg, isOpen }) => {
  return (
    <div
      className={`${styles.bg_overlay} ${isOpen && styles.showBg} `}
      onClick={() => {
        handleBg();
      }}
    ></div>
  );
};

export default BgOverlay;
