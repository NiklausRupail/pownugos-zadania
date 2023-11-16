import ZadList from 'components/ZadList/ZadList';
import styles from './page.module.scss';

const listaZadanPage = () => {
  const zadania = [
    { title: 'Herby', rok: '22/23', url: '/herby', key: 1 },
    { title: 'Krzysiu', rok: '22/23', url: '/krzysiu', key: 2 },
    { title: 'Odsyłacz', rok: '23/24', url: '/odsylacz', key: 3 },
    {
      title: 'Strona o stroju uczniowskim',
      rok: '23/24',
      url: '/stroj-uczniowski',
      key: 4
    },
    { title: 'Box Model', rok: '23/24', url: '/box-model', key: 4 },
    {
      title: 'Stylowanie Buttonów',
      rok: '23/24',
      url: '/stylowanie-buttonow',
      key: 5
    },
    {
      title: 'Code Week',
      rok: '23/24',
      url: '/codeshit',
      key: 6
    },
    {
      title: 'Haloween',
      rok: '23/24',
      url: '/halogowno',
      key: 7
    },
    {
      title: '11 Listopada',
      rok: '23/24',
      url: '/bughonor',
      key: 8
    }
  ];
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
