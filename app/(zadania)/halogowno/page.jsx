import skeleton from '../../../public/skeleton_smoking.gif';
import skeleton2 from '../../../public/skeleton.gif';
import skeleton3 from '../../../public/skeleton.jpg';

import Image from 'next/image';
import styles from './page.module.scss';

const HalloweenPage = () => {
  return (
    <main className={styles.pageMain}>
      <h1>Halloween</h1>
      <Image className={styles.codeShitLogo} src={skeleton}></Image>
      <section>
        Dlaczego Halloween obchodzone jest 31 października? <br></br> Istnieją
        dwie odpowiedzi na to pytanie: pogańska i chrześcijańska. Starożytne
        gaelickie święto Samhain, które miało miejsce 1 listopada, ale
        rozpoczęło się wieczór wcześniej, jest uważane za najwcześniejsze znane
        korzenie naszych świeckich tradycji Halloween. Oznaczało ono kluczowy
        okres w roku, w którym zmieniały się pory roku, ale co ważniejsze,
        obserwatorzy wierzyli również, że granica między tym światem a następnym
        stała się szczególnie cienka, umożliwiając im łączenie się ze zmarłymi.
        Jest to również miejsce, w którym historia Halloween zyskuje swoje
        "nawiedzone" konotacje. Jak sugeruje etymologia nazwy, Halloween ma
        również chrześcijańskie korzenie. Obchody chrześcijańskich męczenników i
        świętych sięgają Rzymu z IV wieku. Na początku VII wieku papież Bonifacy
        IV umieścił Dzień Wszystkich Świętych w kalendarzu, kiedy poświęcił
        Panteon w Rzymie świętym, ale dniem tym był 13 maja. W następnym
        stuleciu papież Grzegorz III zmienił ten dzień na 1 listopada, kiedy
        poświęcił świętym kaplicę w Bazylice Świętego Piotra. Jeszcze wiek
        później papież Grzegorz IV dodał Dzień Wszystkich Świętych do
        powszechnego kalendarza chrześcijańskiego, oficjalnie rozszerzając
        obchody z Rzymu na kościoły na całym świecie. Wraz z chrześcijańskimi
        obchodami Dnia Wszystkich Świętych 1 listopada pojawiła się Wigilia
        Wszystkich Świętych, czyli Halloween, 31 października, a także Dzień
        Zaduszny 2 listopada - trzydniowe święto zwane Hallowtide.
      </section>
      <Image src={skeleton2}></Image>
      <section>
        Obchody chrześcijańskich męczenników i świętych sięgają Rzymu z IV
        wieku. Na początku VII wieku papież Bonifacy IV umieścił Dzień
        Wszystkich Świętych w kalendarzu, kiedy poświęcił Panteon w Rzymie
        świętym, ale dniem tym był 13 maja. W następnym stuleciu papież Grzegorz
        III zmienił ten dzień na 1 listopada, kiedy poświęcił świętym kaplicę w
        Bazylice Świętego Piotra. Jeszcze wiek później papież Grzegorz IV dodał
        Dzień Wszystkich Świętych do powszechnego kalendarza chrześcijańskiego,
        oficjalnie rozszerzając obchody z Rzymu na kościoły na całym świecie.
        Wraz z chrześcijańskimi obchodami Dnia Wszystkich Świętych 1 listopada
        pojawiła się Wigilia Wszystkich Świętych, czyli Halloween, 31
        października, a także Dzień Zaduszny 2 listopada - trzydniowe święto
        zwane Hallowtide.
      </section>
      <Image src={skeleton3}></Image>
    </main>
  );
};
export default HalloweenPage;
