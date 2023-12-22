import { useState } from 'react';
import Button from './components/Button';
import Statistics from './components/Statistics';

import './App.css';

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  let totalAv = bad + neutral + good;
  console.log(totalAv);

  return (
    <>
      <h1>Select feedback</h1>

      <div className="btn-container">
        <Button text={'Good'} handleClick={() => setGood(good + 1)} />
        <Button text={'Neutral'} handleClick={() => setNeutral(neutral + 1)} />
        <Button text={'Bad'} handleClick={() => setBad(bad + 1)} />
      </div>
      <h2>Statistics</h2>
      <>
        {good + bad + neutral == 0 ? (
          <p>No feedback have been yet. Please click on one</p>
        ) : (
          <div>
            <Statistics text={'Good'} type={good} />
            <Statistics text={'Neutral'} type={neutral} />
            <Statistics text={'bad'} type={bad} />

            <Statistics text={'Total Feedback'} type={totalAv} />
            <Statistics text={'Average: '} type={totalAv / 3} />
          </div>
        )}
      </>
    </>
  );
};

export default App;
