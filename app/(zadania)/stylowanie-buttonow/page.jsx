import Link from 'next/link';
import arrowImg from '../../../public/tate.jpg';
import Image from 'next/image';
import styles from './page.module.scss';

const buttonStylePage = () => {
  return (
    <main className={styles.pageMain}>
      <button>Guzik bez styli</button>
      <button className={styles.btn}>Ostylowany guzik</button>
    </main>
  );
};
export default buttonStylePage;
