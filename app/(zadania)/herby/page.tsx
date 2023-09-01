import styles from './page.module.scss';
const herby = () => {
  return (
    <main className={styles.herby}>
      <table>
        <tr>
          <td>Kraków</td>
          <td>
            <img
              width='100'
              src='https://upload.wikimedia.org/wikipedia/commons/4/41/POL_Krak%C3%B3w_COA.svg'
            ></img>
          </td>
        </tr>
        <tr>
          <td>Wieliczka</td>
          <td>
            <img
              width='100'
              src='https://upload.wikimedia.org/wikipedia/commons/6/64/POL_Wieliczka_COA_1.svg'
            ></img>
          </td>
        </tr>
        <tr>
          <td>Niepołomice</td>
          <td>
            <img
              width='100'
              src='https://upload.wikimedia.org/wikipedia/commons/0/0c/Herb_niepolomice.jpg'
            ></img>
          </td>
        </tr>
        <tr>
          <td>Katowice</td>
          <td>
            <img
              width='100'
              src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Katowice_Herb.svg'
            ></img>
          </td>
        </tr>
        <tr>
          <td>Mysłowice</td>
          <td>
            <img
              width='100'
              src='https://upload.wikimedia.org/wikipedia/commons/e/ef/Myslowice_herb.jpg'
            ></img>
          </td>
        </tr>
      </table>
    </main>
  );
};
export default herby;
