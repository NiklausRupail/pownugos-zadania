'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import logo from '../../public/logo.jpeg';
import styles from './Nav.module.scss';
import listIcon from 'components/icons/listIcon';

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
          {searchParams === '/odsylacz' ? (
            <h5 className='activeNavLink'>Ostatnie zadanie</h5>
          ) : (
            <Link href={'/odsylacz'}>
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
      <nav className={styles.mobileNav}>
        <Link href={'/'}>
          <Image alt='just bragging bratan' src={logo} width={50} height={50} />
        </Link>
        <div className={styles.links}>
          {searchParams === '/lista-zadan' ? (
            <h5 className='activeNavLink'>
              <i class='fa-solid fa-list'></i>
            </h5>
          ) : (
            <Link href={'/lista-zadan'}>
              <h5>
                <listIcon />
              </h5>
            </Link>
          )}
        </div>
      </nav>
    </>
  );
};
export default Nav;
