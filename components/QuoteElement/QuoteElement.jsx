import styles from './QuoteElement.module.scss';

const QuoteElement = (props) => {
  const { autor, content } = props;
  return (
    <li className={styles.QuoteElement}>
      <p>
        {content} ~ {autor}
      </p>
    </li>
  );
};

export default QuoteElement;
