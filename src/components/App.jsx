import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import { useState } from 'react';
import Section from './Section';
import Notification from './Notification';

export function App() {
  const [good, setGood] = useState(2);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedback = { good: good, neutral: neutral, bad: bad };

  const handleIncreaseStats = data => {
    switch (data) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;

      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;

      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;

      default:
        throw new Error('Wrong data value');
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={feedback}
          onLeaveFeedback={handleIncreaseStats}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            feedback={feedback}
            total={countTotalFeedback}
          ></Statistics>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
}
