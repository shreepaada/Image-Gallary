"use client";

import React from "react";
import styles from "./navbar.module.css"; // Importing CSS module for animation

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.particles}></div> {/* Static particle animation */}
      <h1 className={styles.heading}>WELCOME TO MY GALLARY</h1>
    </nav>
  );
};

export default Navbar;
