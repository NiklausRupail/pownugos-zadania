import Link from 'next/link';
import styles from './ZadList.module.scss';

const ZadList = (props) => {
  const { title, rok, url } = props;
  return (
    <li className={styles.zadList}>
      <Link href={url}>
        {title} z roku szkolnego {rok}
      </Link>
    </li>
  );
};

export default ZadList;
