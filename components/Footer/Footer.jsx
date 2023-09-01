import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialIcons}>
        <div className={styles.circle}>
          <a
            href='https://www.facebook.com/islamisapeacereligion/posts/3258906004373651'
            target='_blank'
          >
            <i className='fa-brands fa-facebook' data-fa-transform='grow-6'></i>
          </a>
        </div>

        <div className={styles.circle}>
          <a
            href='https://twitter.com/Cobratate/status/1594386194674208770'
            target='_blank'
          >
            <i className='fa-brands fa-twitter' data-fa-transform='grow-6'></i>
          </a>
        </div>

        <div className={styles.circle}>
          <a
            href='https://www.instagram.com/p/Ck5y5sUICFl/?ig_rid=ae57c81a-21a4-4c23-862b-89828cf9bebf'
            target='_blank'
          >
            <i
              className='fa-brands fa-instagram'
              data-fa-transform='grow-6'
            ></i>
          </a>
        </div>
      </div>

      <div>
        <p className={styles.footerText}>
          &copy; Copyright 2023 NiklausRupaił. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
