import gowno from '../../../public/gowno.jpg';
import kondorpolak from '../../../public/kondorpolak.jpg';
import kubekkaczor from '../../../public/kubekkaczor.jpeg';

import Image from 'next/image';
import styles from './page.module.scss';

const BugCHonorOjczysna = () => {
  return (
    <main className={styles.pageMain}>
      <h1>Dzień Niepodległości 4D</h1>
      <Image className={styles.codeShitLogo} src={gowno} alt='Muran'></Image>
      <section>
        Narodowe Święto Niepodległości jest dla Polaków jednym z najważniejszych
        świąt państwowych. Po 123 latach zaborów, które były okresem walki,
        cierpienia i wysiłku wielu pokoleń Polek i Polaków, nasz kraj wreszcie
        odzyskał suwerenność. Podczas corocznych obchodów 11 listopada oddajemy
        hołd tym, którzy zasłużyli na nasze własne państwo, pokonując ogromne
        zniszczenia I wojny światowej i tworząc warunki dla rozwoju
        ekonomicznego, modernizacji gospodarczej i cywilizacyjnej. Rok 2018 był
        wyjątkowy, gdyż obchodziliśmy setną rocznicę odzyskania przez Polskę
        niepodległości.
      </section>
      <Image src={kondorpolak} height='500' width='1000' alt='GRUBY'></Image>
      <section>
        Historia odzyskania niepodległości to opowieść o setkach lat walki,
        ofiarze krwi przelanej w wojnach napoleońskich, licznych zrywach
        niepodległościowych, powstaniu listopadowym i styczniowym, oraz na
        polach bitewnych I wojny światowej. Działania zaborców w latach 1772,
        1793 i 1795 doprowadziły do zniknięcia Rzeczypospolitej z mapy Europy.
        Niemniej jednak, dla Narodu Polskiego własne, suwerenne państwo było
        najwyższą wartością. Bohaterowie tamtego okresu, mimo szykan,
        aresztowań, wywózek i represji ze strony zaborców, zdołali chronić i
        rozwijać narodową tożsamość, przekazując ją następnym pokoleniom, które
        już żyły w odrodzonej Polsce.
      </section>
      <Image src={kubekkaczor} width='400' alt='KACZYŃSKI'></Image>
      <iframe
        width='1200'
        height='544'
        src='https://www.youtube.com/embed/vox8vMv3l3Y?&autoplay=0&frameborder=0'
        title='WIELKI PATRIOTA JACEK MURAŃSKI KRZYCZY Bóg, honor, ojczyzna'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowfullscreen
      ></iframe>
      <p className='small'>
        Nie pozdrawiam, niesmacznej kawusi. A nóż się udusi. Antoni Mielewski
      </p>
    </main>
  );
};
export default BugCHonorOjczysna;
