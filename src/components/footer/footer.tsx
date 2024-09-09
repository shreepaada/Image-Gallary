import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>Made by Shreepaada M C</p>
      <div style={styles.iconContainer}>
        <a href="mailto:shreepaadamc2003@gmail.com" style={styles.icon}>
          <FaEnvelope />
        </a>
        <a
          href="https://github.com/shreepaada"
          target="_blank"
          style={styles.icon}
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/shreepaada-m-c-520702285"
          target="_blank"
          style={styles.icon}
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff", // White background
    padding: "10px", // Small padding
    position: "fixed" as const,
    left: 0,
    bottom: 0,
    width: "100%",
    borderTop: "1px solid #ccc", // Optional subtle border
  },
  text: {
    color: "#333",
    fontSize: "12px", // Smaller font size for the text
    marginBottom: "5px",
  },
  iconContainer: {
    display: "flex",
    justifyContent: "center",
  },
  icon: {
    color: "#333", // Dark color for the icons
    fontSize: "20px", // Icon size
    margin: "0 10px", // Space between icons
    textDecoration: "none",
  },
};

export default Footer;
