import { cytaty } from '../../scripts/cytatyBase.js';
import QuoteElement from '../../components/QuoteElement/QuoteElement.jsx';

const MegaUltraPage = () => {
  return (
    <main>
      <ol>
        {cytaty.map((cytat) => (
          <QuoteElement
            autor={cytat.autor}
            content={cytat.tresc}
            key={cytat.key}
          />
        ))}
      </ol>
    </main>
  );
};
export default MegaUltraPage;
