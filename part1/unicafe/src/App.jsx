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
  const getAverage = () => (good - bad)/getTotal()
  const getPositive = () => good/getTotal()
  
  return getTotal() === 0 ? (
    <>
      <h2>Statistics</h2>
      <p>No feedback given</p>
    </>
  ) : (
    <>
      <h2>Statistics</h2>
      <StatisticLine text="Good" value={good} />
      <StatisticLine text="Neutral" value={neutral} />
      <StatisticLine text="Bad" value={bad} />
      <br />
      <StatisticLine text="All" value={getTotal()} />
      <StatisticLine text="Average" value={getAverage()} />
      <StatisticLine text="Positive" value={getPositive() + "%"} />
    </>
  )
}

const StatisticLine = ({text, value}) => <p>{text} : {value}</p>

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
