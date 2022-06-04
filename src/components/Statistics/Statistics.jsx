import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
import firstLetterLarge from 'components/Js/firstLetterLarge';

function Statistics({ feedback, total }) {
  const countPositiveFeedbackPercentage = () => {
    if (total() === 0) {
      return 0;
    }
    return Math.floor((feedback.good * 100) / total());
  };

  return (
    <div className={styles.text}>
      {Object.keys(feedback).map(data => (
        <p key={data}>
          {firstLetterLarge(data)}: {feedback[data]}
        </p>
      ))}
      <p>Total: {total()}</p>
      <p>Positive feedback: {countPositiveFeedbackPercentage()}%</p>
    </div>
  );
}

Statistics.propTypes = {
  feedback: PropTypes.object,
};

export default Statistics;
