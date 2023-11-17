import ZadList from 'components/ZadList/ZadList';
import styles from './page.module.scss';
import { zadania } from '../../scripts/zadania.js';
const listaZadanPage = () => {
  return (
    <main className={styles.content}>
      <h1>Lista wszystkich zadań z różnych durnych przedmiotów</h1>
      <ul>
        {zadania.map((zad) => (
          <ZadList
            title={zad.title}
            rok={zad.rok}
            url={zad.url}
            key={zad.key}
          />
        ))}
      </ul>
    </main>
  );
};
export default listaZadanPage;
