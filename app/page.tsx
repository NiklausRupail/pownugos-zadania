import Image from 'next/image';
import logo from 'public/next.svg';
import styles from './page.module.scss';

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
