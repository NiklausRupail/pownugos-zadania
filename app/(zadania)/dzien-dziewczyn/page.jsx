import styles from './page.module.scss';
import backgroundimage from '../../../public/atomowki.jpg';
import Image from 'next/image';
import Link from 'next/link';
const dziewczynyPage = () => {
  return (
    <main className={styles.dzienDziewczyn}>
      <Link href='https://en.wikipedia.org/wiki/International_Day_of_the_Girl_Child'>
        <h1>Dzień Dziewczyn</h1>
      </Link>

      <Image src={backgroundimage} alt={'Atomówki Background'} />
    </main>
  );
};

export default dziewczynyPage;
