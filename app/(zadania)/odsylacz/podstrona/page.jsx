import Link from 'next/link';
import styles from './page.module.scss';

const OdsylaczSubpage = () => {
  return (
    <main className={styles.pageMain}>
      <h1>Strona z linka</h1>
      <div>
        <Link href='/odsylacz'>Powrót</Link>
      </div>
    </main>
  );
};
export default OdsylaczSubpage;
