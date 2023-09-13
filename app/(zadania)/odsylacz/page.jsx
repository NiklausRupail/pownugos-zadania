import Link from 'next/link';
import arrowImg from '../../../public/green_arrow.png';
import Image from 'next/image';
import styles from './page.module.scss';

const OdsylaczPage = () => {
  return (
    <main className={styles.pageMain}>
      <p>Obrazek obok jest odsyłaczem obrazkowym.</p>
      <div className={styles.arrow_link}>
        <Link href='/odsylacz/podstrona' target='_blank'>
          <Image src={arrowImg} width='50' />
        </Link>
      </div>
    </main>
  );
};
export default OdsylaczPage;
