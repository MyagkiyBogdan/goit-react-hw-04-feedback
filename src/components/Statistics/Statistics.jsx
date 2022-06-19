import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
import firstLetterLarge from 'utils/firstLetterLarge';

function Statistics({ feedback, total, positivePercentage }) {
  return (
    <div className={styles.text}>
      <div className={styles.feedbackList}>
        {Object.keys(feedback).map(data => (
          <p key={data} className={styles.feedbackWrapper}>
            {firstLetterLarge(data)}
            <span className={styles.feedbackCount}>{feedback[data]}</span>
          </p>
        ))}
      </div>
      <div>
        <p>Total: {total}</p>
        <p>Positive feedback: {positivePercentage}%</p>
      </div>
    </div>
  );
}

Statistics.propTypes = {
  feedback: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
