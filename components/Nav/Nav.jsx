'use client';
import styles from './Nav.module.scss';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import logo from '../../public/logo.jpeg';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Nav = () => {
  const searchParams = usePathname();
  return (
    <>
      <nav className={styles.nav}>
        <Link href={'/'}>
          <Image
            alt='just bragging bratan'
            src={logo}
            width={100}
            height={100}
          />
        </Link>
        <div className={styles.links}>
          {searchParams === '/' ? (
            <h5 className='activeNavLink'>Strona Główna</h5>
          ) : (
            <Link href={'/'}>
              <h5>Strona Główna</h5>
            </Link>
          )}
          {searchParams === '/herby' ? (
            <h5 className='activeNavLink'>Ostatnie zadanie</h5>
          ) : (
            <Link href={'/herby'}>
              <h5>Ostatnie zadanie</h5>
            </Link>
          )}

          {searchParams === '/lista-zadan' ? (
            <h5 className='activeNavLink'>Lista zadań</h5>
          ) : (
            <Link href={'/lista-zadan'}>
              <h5>Lista zadań</h5>
            </Link>
          )}
        </div>
      </nav>
    </>
  );
};
export default Nav;
