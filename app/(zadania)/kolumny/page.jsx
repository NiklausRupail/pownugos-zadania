import Link from 'next/link';
import arrowImg from '../../../public/tate.jpg';
import Image from 'next/image';
import styles from './page.module.scss';

const CwelPage = () => {
  return (
    <main className={styles.pageMain}>
      <div className={styles.header}>
        <p>header</p>
        <p>(#FFB6C1)</p>
      </div>
      <div className={styles.nav}>
        <p>nav</p>
        <p>(#FF1493)</p>
      </div>
      <div className={styles.main}>
        <p>main</p>
        <p>(#FF00FF)</p>
      </div>
      <div className={styles.aside}>
        <p>aside</p>
        <p>(#C71585)</p>
      </div>
      <div className={styles.footer}>
        <p>footer</p>
        <p>(#8B008B)</p>
      </div>
    </main>
  );
};
export default CwelPage;
