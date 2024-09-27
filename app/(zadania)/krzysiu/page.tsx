import Link from 'next/link';
import styles from './page.module.scss';
const krzysiu = () => {
  return (
    <main className={styles.krzysiu}>
      <h2>
        <Link href='/mega-ultra-tajna-podstrona-z-tajnymi-danymi'>Krzysiu</Link>{' '}
        w szkole
      </h2>
      <p>
        Na lekcji wychowania fizycznego Krzyś skaleczył się w rękę. Pani
        higienistka, przy użyciu C<sub>2</sub>H<sub>5</sub>OH odkaziła mu
        krwawiącą ranę.
      </p>
      <p>
        Na matematyce było potęgowanie. Krzyś obliczył, że 4<sup>2</sup>=16 oraz
        2<sup>3</sup>=8. Ułożył również nierówność: 2x<sub>1</sub>
        {'<'} 4+8x<sub>1</sub>
      </p>
      <p>
        Potem była fizyka i trzeba było mając ciśnienie i pole powierzchni
        policzyć siłę parcia: F<sub>p</sub>= p·S.
      </p>
      <p>
        Później były zadania w których temperaturę w °C należało zamienić na
        Kelwiny.
      </p>
      <p>
        <strong>
          Na zadanie domowe należy nauczyć się definicji ciśnienia
          atmosferycznego.
        </strong>
      </p>
      <p id='pressure'>
        <em>
          <dfn>Ciśnienie atmosferyczne</dfn>
          to ciśnienie powietrza które jest wywierane na wszystkie ciała
          znajdujące się na Ziemi. Im wyżej nad powierzchnią Ziemi, tym
          ciśnienie powietrza jest mniejsze.
        </em>
      </p>
      <p>
        <small>
          Autorem tekstu jest Krzysztof Nowak Nowy Tomyśl godzina{' '}
          <time>
            20<sup>25</sup>
          </time>
        </small>
      </p>
    </main>
  );
};
export default krzysiu;
