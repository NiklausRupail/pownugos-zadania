'use client';
import Image from 'next/image';
import logo from 'public/next.svg';
import styles from './page.module.scss';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { cytaty } from '../scripts/cytatyBase.js';
import QuoteElement from '../components/QuoteElement/QuoteElement.jsx';
import { useState } from 'react';
config.autoAddCss = false;

const handleChange = (event) => {
  this.setState;
};

const HomePage = () => {
  const [password, setPassword] = useState('binbon');
  return (
    <>
      <section className={styles.homePage}>
        <Image alt='logo' src={logo}></Image>
        <h1>Całość stworzona dzięki NEXT.js</h1>
        <small>googlowanie nie boli{')'}</small>
        {/*  <form onSubmit={()}>
          <input
            type='text' value=
          />
          <button type='submit'>
            Udowodnij że nie jesteś szpiegiem SLTNZFBI
          </button>
        </form>
        <h2>
          Obrazując kolącą w oczy niekompetencję kadry nauczycielskiej
          przedstawiam kompilacje genialnych myśli w formacie informatycznym:
        </h2>

        <ol>
          {cytaty.map((cytat) => (
            <QuoteElement
              autor={cytat.autor}
              content={cytat.tresc}
              key={cytat.key}
            />
          ))}
        </ol> */}
      </section>
    </>
  );
};
export default HomePage;
