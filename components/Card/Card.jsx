import Image from 'next/image';
import styles from './Card.module.scss';
const Card = (props) => {
  const { img, headText, text, w } = props;
  return (
    <div className={styles.card}>
      <h2>{headText}</h2>
      <Image src={img} width={w} height={'450px'}></Image>
      <p>{text}</p>
    </div>
  );
};
export default Card;
