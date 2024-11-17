// src/app/about/page.tsx
import styles from './About.module.css';

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About Us</h1>
      <div className={styles.content}>
        <p>Welcome to the official explorer for The New York Times Best Sellers lists.
        We hope you enjoy your stay!</p>
      </div>
    </div>
  );
}