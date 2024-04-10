import { useState } from 'react'

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const AnecdoteSection = ({title, anecdote, votes}) => {
  return (
    <>
      <h2>{title}</h2>
      <q>{anecdote}</q>
      <p>has {votes} votes</p>
    </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))

  const handleNext = () => {
    let newNumber = selected
    while (newNumber === selected) {
      newNumber = Math.floor(Math.random() * anecdotes.length)
    }
    setSelected(newNumber)
  }
  const handleVote = () => {
    const newPoints = [...points]
    newPoints[selected] += 1
    setPoints(newPoints)
  }
  const getIndexOfMostVotes = () => {
    let max = points[0]
    let maxIndex = 0
    for(let i = 1; i < points.length; i++) {
      if (points[i] > max) {
        max = points[i]
        maxIndex = i
      }
    }
    return maxIndex
  }
  
  return (
    <div>
      <AnecdoteSection title="Anecdote of the day" anecdote={anecdotes[selected]} votes={points[selected]} />
      <Button onClick={handleVote} text="vote" />&nbsp;
      <Button onClick={handleNext} text="next anecdote" />
      <AnecdoteSection title="Anecdote with most votes" anecdote={anecdotes[getIndexOfMostVotes()]} votes={points[getIndexOfMostVotes()]} />
    </div>
  )
}

export default App