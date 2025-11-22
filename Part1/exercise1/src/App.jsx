import { useState } from 'react'

const Header = ({ text }) => <h1>{text}</h1>

const Button = ({ handleEvent, text }) => <button onClick={handleEvent}>{text}</button>

const StatisticLine = ({ text, value }) => { 
  return (
    <tr>
      <td>{ text }</td>
      <td>{ value }</td>
    </tr>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad

  if(total === 0)
    return <div>No feedback given</div>

  const average = total === 0 ? 0 : (good * 1 + neutral * 0 + bad * -1) / total 
  const positive = total === 0 ? 0 : (good * 100) / total
  return (
      <div>
        <table>
          <tbody>
            <StatisticLine text={'good'} value={good}/>
            <StatisticLine text={'neutral'} value={neutral}/>
            <StatisticLine text={'bad'} value={bad}/>
            <StatisticLine text={'all'} value={total}/>
            <StatisticLine text={'average'} value={average.toFixed(4)}/>
            <StatisticLine text={'positive'} value={positive.toFixed(4) + '%'}/>
          </tbody>
        </table>
      </div>    
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodFeed = () => setGood(good + 1)

  const handleNeutralFeed = () => setNeutral(neutral + 1)
 
  const handleBadFeed = () => setBad(bad + 1)

  const clearClicks = () => {
    setGood(0)
    setNeutral(0)
    setBad(0)
  }

  const mainTitle = 'Give feedback'
  const statisticsTitle = 'Statistics'

  return (
    <div>
      <Header text={mainTitle}/>

      <Button handleEvent={handleGoodFeed} text={'good'} />
      <Button handleEvent={handleNeutralFeed} text={'neutral'} />
      <Button handleEvent={handleBadFeed} text={'bad'} />
      <Button handleEvent={clearClicks} text={'clear'} />

      <Header text={statisticsTitle}/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App