import { useState } from 'react';
import Button from './components/Button';

import './App.css';

const App = () => {
  const anecdotes = [
    {
      quotes: 'If it hurts, do it more often.',
      votes: 0,
    },
    {
      quotes: 'Adding manpower to a late software project makes it later!',
      votes: 0,
    },
    {
      quotes:
        'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
      votes: 0,
    },
    {
      quotes:
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
      votes: 0,
    },
    {
      quotes: 'Premature optimization is the root of all evil.',
      votes: 0,
    },
    {
      quotes:
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
      votes: 0,
    },
    {
      quotes:
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
      votes: 0,
    },
    {
      quotes: 'The only way to go fast, is to go well.',
      votes: 0,
    },
  ];

  /**
   * generate random Number
   */
  function generateRandom() {
    return Math.floor(Math.random() * 8);
  }

  const [selected, setSelected] = useState(0);
  const [quotesAndVotes, setQuotesAndVotes] = useState(anecdotes);

  /**
   * set selected state to random number when the next button is clicked.
   * allow user to skip through the different anecdote.
   */
  function handleNextClick() {
    setSelected(() => generateRandom());
  }

  /**
   * allow the vote count to be increased when clicked
   * updates quotesAndVotes state when anecdotes is votted.
   */
  function handleVoteClick() {
    setQuotesAndVotes((prevState) => {
      return prevState.map((item, index) => {
        if (index == selected) {
          return { ...item, votes: item.votes + 1 };
        }
        return item;
      });
    });
  }

  /**
   * return object with the most voted anecdote.
   */
  function mostVoted() {
    let hasTheMost = quotesAndVotes.reduce((accumulator, current) => {
      if (accumulator.votes > current.votes) {
        return accumulator;
      }
      return current;
    }, quotesAndVotes[0].votes);

    return hasTheMost;
  }

  let mostVotedObj = mostVoted(); // object of the most voted anecdote.

  return (
    <div className="app-container">
      <h1>Anecdote of the day</h1>
      {quotesAndVotes[selected].quotes}
      <p>has been vote: {quotesAndVotes[selected].votes}</p>

      <Button text={'next anecdote'} handleClick={handleNextClick} />
      <Button text={'vote'} handleClick={handleVoteClick} />

      <h2>Anecdote with the most Votes</h2>
      <p>{mostVotedObj.quotes}</p>
      <p>Max number of vote: {mostVotedObj.votes}</p>
    </div>
  );
};

export default App;
