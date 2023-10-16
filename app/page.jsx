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
        <Image src={logo}></Image>
        <h1>Całość stworzona dzięki NEXT.js</h1>
        <small>googlowanie nie boli{')'}</small>
      </section>
    </>
  );
};
export default HomePage;
