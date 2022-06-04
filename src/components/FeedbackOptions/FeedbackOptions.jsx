import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';
import firstLetterLarge from 'components/Js/firstLetterLarge';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return Object.keys(options).map(data => (
    <button
      key={data}
      onClick={() => onLeaveFeedback(data)}
      className={styles.btn}
    >
      {firstLetterLarge(data)}
    </button>
  ));
};

FeedbackOptions.propTypes = {
  options: PropTypes.object,
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
