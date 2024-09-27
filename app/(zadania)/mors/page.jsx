import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.scss';
import cake from '../../../public/cake.jpg';

const MorsPage = () => {
  return (
    <main className={styles.pageMain}>
      <header>
        <h1>Kawiarnia Mors</h1>
      </header>
      <div className={styles.pasekzdupy}>
        <button>
          <a href='https://splendid-mochi-eb0f4b.netlify.app/oferta.txt'>
            Oferta
          </a>
        </button>
      </div>
      <div className={styles.gowno}>
        <Image alt='Ciasto' src={cake}></Image>
      </div>
      <footer>
        <p>tel: 745 180 631</p> <p>e-mail: mors@wp.pl</p>
      </footer>
    </main>
  );
};
export default MorsPage;
