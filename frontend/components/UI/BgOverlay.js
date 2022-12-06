import React from "react";
import styles from "./BgOverlay.module.css";

const BgOverlay = ({ handleBg }) => {
  return (
    <div
      className={styles.bg_overlay}
      onClick={() => {
        handleBg();
      }}
    ></div>
  );
};

export default BgOverlay;
