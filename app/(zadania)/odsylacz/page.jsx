import Link from 'next/link';
import arrowImg from '../../../public/tate.jpg';
import Image from 'next/image';
import styles from './page.module.scss';

const mail = () => {
  window.open('mailto:m.rup.278@sltzn.katowice.pl');
};

const OdsylaczPage = () => {
  return (
    <main className={styles.pageMain}>
      <h1>Aby otrzymać dodatkowe informacje kliknij w obrazek poniżej.</h1>
      <div className={styles.arrow_link}>
        <Link
          href='https://www.youtube.com/watch?v=-025Z6bim-Q'
          target='_blank'
        >
          <Image src={arrowImg} width='500' />
        </Link>
      </div>
      <div className={styles.contact}>
        <p>Skontaktuj się ze mną klikając:</p>
        <a href='mailto:m.rup.278@sltzn.katowice.pl'>
          <button>Tutaj</button>
        </a>
      </div>
    </main>
  );
};
export default OdsylaczPage;
