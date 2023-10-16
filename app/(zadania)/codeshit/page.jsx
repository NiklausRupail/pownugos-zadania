import Link from 'next/link';
import codeShit from '../../../public/codeshit_logo.png';
import Image from 'next/image';
import styles from './page.module.scss';

const buttonStylePage = () => {
  return (
    <main className={styles.pageMain}>
      <h1>Europejski Tydizeń Kodowania W Areszcie Śledczym ŚLTZN</h1>
      <Image className={styles.codeShitLogo} src={codeShit}></Image>
    </main>
  );
};
export default buttonStylePage;
