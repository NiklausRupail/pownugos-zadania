//@ts-nocheck
import styles from './page.module.scss';

const tabelePage = () => {
  return (
    <main className={styles.dick}>
      <div className={styles.main}>
        <div className={styles.tabela_zielona}>
          <table>
            <tr style={{ height: '40px' }}>
              <th style={{ width: '120px' }}>Nagłówek 1</th>
              <th style={{ width: '400px' }}>
                Nagłówek 2, w tej komórce jest dłuższy tekst
              </th>
              <th style={{ width: '200px' }}>Nagłówek 4</th>
            </tr>
            <tr style={{ height: '60px' }}>
              <td>kol 0 wiersz 1</td>
              <td className={styles.odingowno}>
                w poziomie left, w pionie top
              </td>
              <td>kol 2 wiersz 1</td>
            </tr>
            <tr style={{ height: '60px' }}>
              <td>kol 0 wiersz 2</td>
              <td className={styles.dwagowno}>
                w poziomie center, w pionie middle
              </td>
              <td>kol 2 wiersz 2</td>
            </tr>
            <tr style={{ height: '50px' }}>
              <td>kol 0 wiersz 3</td>
              <td className={styles.czigowno}>
                w poziomie right, w pionie bottom
              </td>
              <td>kol 2 wiersz 3</td>
            </tr>
          </table>
        </div>
        <table className={styles.tabela_owoce}>
          <tr style={{ height: '30px' }}>
            <th>Lp</th>
            <th>Owoce</th>
            <th>Cena za kg</th>
            <th>Ilość</th>
            <th>Wartość</th>
          </tr>
          <tr style={{ height: '30px' }}>
            <td>1</td>
            <td>pomarańcze</td>
            <td>5.50 zł</td>
            <td>2 kg</td>
            <td>11 zł</td>
          </tr>
          <tr style={{ height: '30px' }}>
            <td>2</td>
            <td>cytryny</td>
            <td>2.50 zł</td>
            <td>4 kg</td>
            <td>11 zł</td>
          </tr>
          <tr style={{ height: '30px' }}>
            <td>3</td>
            <td>banany</td>
            <td>3.50 zł</td>
            <td>4 kg</td>
            <td>14 zł</td>
          </tr>
        </table>
      </div>
      <table className={styles.tabela_imiona}>
        <tr>
          <th>Lp</th>
          <th>Imię</th>
          <th>Nazwisko</th>
          <th>Klasa</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Mikołaj</td>
          <td>Rup</td>
          <td>5D</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Mateusz</td>
          <td>Rudy</td>
          <td>5D</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Maciuś</td>
          <td>Anabol</td>
          <td>5D</td>
        </tr>
      </table>
    </main>
  );
};
export default tabelePage;
