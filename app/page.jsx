import Image from 'next/image';
import logo from 'public/next.svg';
import styles from './page.module.scss';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

const HomePage = () => {
  return (
    <>
      <section className={styles.homePage}>
        <Image alt='logo' src={logo}></Image>
        <h1>Całość stworzona dzięki NEXT.js</h1>
        <small>googlowanie nie boli{')'}</small>
        <h2>
          Obrazując kolącą w oczy niekompetencję kadry nauczycielskiej
          przedstawiam kompilacje genialnych myśli w formacie informatycznym:
        </h2>
        <ol>
          <li>test</li>
        </ol>
      </section>
    </>
  );
};
export default HomePage;
