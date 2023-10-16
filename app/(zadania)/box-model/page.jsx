import styles from './page.module.scss';

const boxModelPage = () => {
  return (
    <main className={styles.boxModelPage}>
      <div className={styles.content}>content-box</div>
      <div className={styles.border}>border-box</div>
    </main>
  );
};
export default boxModelPage;
