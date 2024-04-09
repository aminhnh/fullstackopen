import { useState } from 'react'

const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const getTotal = () => good + neutral + bad
  const getAverage = () => {
    if (getTotal() === 0) {
      return 0
    }
    return (good - bad)/getTotal()
  }
  const getPositive = () => {
    return getTotal() === 0 ? (
      0
    ) : (
      good/getTotal()
    )
  }
  return (
    <>
      <h2>Statistics</h2>
      <p>Good : {good}</p>
      <p>Neutral : {neutral}</p>
      <p>Bad : {bad}</p>
      <br />
      <p>All : {getTotal()}</p>
      <p>Average : {getAverage()}</p>
      <p>Positive : {getPositive()}%</p>
    </>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good + 1)
  const handleNeutral = () => setNeutral(neutral + 1)
  const handleBad = () => setBad(bad + 1)

  return (
    <div>
      <h2>Give feedback</h2>
      <Button onClick={handleGood} text="good"/> &nbsp; 
      <Button onClick={handleNeutral} text="neutral"/> &nbsp; 
      <Button onClick={handleBad} text="bad"/>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
