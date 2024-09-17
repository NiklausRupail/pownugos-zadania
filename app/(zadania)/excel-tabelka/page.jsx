import Image from 'next/image';
import tabelka from '../../../public/tabelka1.png';
import styles from './page.module.scss';

const excelPage = () => {
  const css = `.tg  {border-collapse:collapse;border-spacing:0; margin-top: 20px; transition: .5s all;}
.tg:hover { transform: rotate(360deg);}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:12px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:12px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-baqh{text-align:center;vertical-align:top; font-weight: bold;}
.tg .tg-1s2w{background-color:#01AFEF;text-align:center;vertical-align:top}
.tg .tg-0t53{background-color:#ff0000;border-color:inherit;color:#000000;text-align:center;vertical-align:top; font-weight: bold; font-size: 15px;}
.tg .tg-wp8o{border-color:#000000;text-align:center;vertical-align:top; border: none;}`;
  return (
    <main className={styles.excelPage}>
      <Image src={tabelka} alt='tabelka'></Image>

      <style type='text/css'>{css}</style>
      <table class='tg'>
        <thead>
          <tr>
            <th class='tg-0t53' colspan='6'>
              Week 5
            </th>
          </tr>
        </thead>
        <tbody>
          <tr classname={styles.bold}>
            <td width={'400px'} class='tg-baqh'>
              Exercise
            </td>
            <td class='tg-baqh'>Sets</td>
            <td class='tg-baqh'>Weight</td>
            <td class='tg-baqh'>Reps</td>
            <td class='tg-baqh'>Rep Results</td>
            <td class='tg-1s2w'>*Rating</td>
          </tr>
          <tr>
            <td class='tg-wp8o'>Day 5:</td>
            <td class='tg-wp8o'></td>
            <td class='tg-wp8o'></td>
            <td class='tg-wp8o'></td>
            <td class='tg-wp8o'></td>
            <td class='tg-baqh'></td>
          </tr>
          <tr>
            <td class='tg-wp8o'>Dumbbell Walking Lunge</td>
            <td class='tg-wp8o'>3</td>
            <td class='tg-wp8o'>0</td>
            <td class='tg-wp8o'>1/fail</td>
            <td class='tg-wp8o'></td>
            <td class='tg-1s2w'></td>
          </tr>
          <tr>
            <td class='tg-wp8o'>High Bar Good Morning</td>
            <td class='tg-wp8o'>3</td>
            <td class='tg-wp8o'>0</td>
            <td class='tg-wp8o'>1/fail</td>
            <td class='tg-wp8o'></td>
            <td class='tg-1s2w'></td>
          </tr>
          <tr>
            <td class='tg-wp8o'>Hack Squat</td>
            <td class='tg-wp8o'>3</td>
            <td class='tg-wp8o'>0</td>
            <td class='tg-wp8o'>1/fail</td>
            <td class='tg-wp8o'></td>
            <td class='tg-1s2w'></td>
          </tr>
          <tr>
            <td class='tg-wp8o'>Calves on Calf Machine</td>
            <td class='tg-wp8o'>3</td>
            <td class='tg-wp8o'>0</td>
            <td class='tg-wp8o'>1/fail</td>
            <td class='tg-wp8o'></td>
            <td class='tg-1s2w'></td>
          </tr>
          <tr>
            <td class='tg-wp8o'>Modified Candlestick</td>
            <td class='tg-wp8o'>4</td>
            <td class='tg-wp8o'>0</td>
            <td class='tg-wp8o'>1/fail</td>
            <td class='tg-wp8o'></td>
            <td class='tg-1s2w'></td>
          </tr>
        </tbody>
      </table>
    </main>
  );
};
export default excelPage;
