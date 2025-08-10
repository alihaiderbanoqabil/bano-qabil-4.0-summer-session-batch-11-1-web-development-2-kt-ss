import styles from "./Button.module.css"; // Import css modules stylesheet as styles
import "./another-stylesheet.css"; // Import regular stylesheet

export const Button = () => {
  return <button className={styles.info}>Error Button</button>;
};
