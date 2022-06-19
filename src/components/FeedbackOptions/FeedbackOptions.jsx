import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';
import firstLetterLarge from 'utils/firstLetterLarge';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(data => (
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
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
