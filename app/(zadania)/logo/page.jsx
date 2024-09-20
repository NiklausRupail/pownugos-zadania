import Link from 'next/link';
import styles from './page.module.scss';
const LogoPage = () => {
  const css = `
    div#logo {
        background-color: black;
        color: white;
        font: 50px arial;
        text-align: center;
        text-shadow: silver 4px 4px 8px;
        border: double silver;
        letter-spacing: 15px;
        width: 50%;
        padding: 2px 3px;
    }
    main {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
        a:hover {
      color: white;
      background-color: #303030;
    }
    `;
  return (
    <>
      <style>{css}</style>
      <main className={styles.main}>
        <div id='logo'>Mikołaj</div>
        <Link href='/wiersz' target='_blank'>
          {'-> '}Zadanie dodatkowe {' <-'}
        </Link>
      </main>
    </>
  );
};

export default LogoPage;
