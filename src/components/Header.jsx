import styles from "./css/Header.module.css";
export default function Header() {
  return (
    <h1 className={styles.header}>
      The<span>Anime</span>Database
    </h1>
  );
}
