import styles from '@/styles/About.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About Us</h1>
      <div className={styles.content}>
        <p>Welcome to the official explorer for The New York Times Best Sellers lists.</p>
        <p>We hope you enjoy your stay!</p>
      </div>
    </div>
  );
}