import Card from 'components/Card/Card';
import konrad from '../../../public/konrad.png';
import bejlu from '../../../public/bejlu.png';
import styles from './page.module.scss';
import zjeby from '../../../public/zjeby.png';
import ryziu from '../../../public/ryziu_cigar.png';
import miki from '../../../public/miki.png';
import Link from 'next/link';

const strojUczniowskiPage = () => {
  return (
    <main className={styles.strojUczniowski}>
      <h1>Propozycja Stroju Uczniowskiego ŚLTZN</h1>
      <div className={styles.heroSection}>
        <Card
          img={konrad}
          headText={'Szeroki kołnierz'}
          text={
            'Uczeń powinien mieć szeroki kołnierz, aby zmieścić potężną szyję'
          }
          w={400}
        />
        <Card
          img={bejlu}
          headText={'Zgolona głowa'}
          text={
            'Zgolona głowa zapewnia bezpieczeństwo włosów przy używaniu maszyn i respekt dzielnicy'
          }
          w={640}
        />
        <Card
          img={zjeby}
          headText={'Anaboliczne Okulary'}
          text={
            'Anaboliczne okulary Macieja Anabola pozwalają chronić wzrok przed słońcem oraz bajerować nauczycieli, żeby nie wpisywali uwag'
          }
          w={500}
        />
        <Link
          href={'https://cigarro.pl/cohiba-behike/316-cohiba-behike-56.html'}
        >
          <Card
            img={ryziu}
            headText={'Brak Krawata'}
            text={
              'Krawat krempuje ruchy, więc jego brak daje możliwość palenia cygara cohiba behike 56 za 799zł'
            }
            w={300}
          />
        </Link>
        <Card
          img={miki}
          headText={'Kaszkiet BHP'}
          text={
            'Kaszkiet BHP Burka służy głównie jako ochrona wzroku i głowy przed niespodziewanymi niebezpieczeństwami'
          }
          w={430}
        />
      </div>
    </main>
  );
};

export default strojUczniowskiPage;
