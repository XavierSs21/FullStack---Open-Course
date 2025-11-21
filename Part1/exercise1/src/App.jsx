import { useState } from 'react'

const Header = ({ text }) => <h1>{text}</h1>

const Button = ({ handleEvent, text }) => <button onClick={handleEvent}>{text}</button>

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodFeed = () => setGood(good + 1)

  const handleNeutralFeed = () => setNeutral(neutral + 1)
 
  const handleBadFeed = () => setBad(bad + 1)

  const mainTitle = 'Give feedback'
  const statisticsTitle = 'Statistics'
  return (
    <div>
      <Header text={mainTitle}/>

      <Button handleEvent={handleGoodFeed} text={'good'} />
      <Button handleEvent={handleNeutralFeed} text={'neutral'} />
      <Button handleEvent={handleBadFeed} text={'bad'} />

      <Header text={statisticsTitle}/>
      <p>
        good {good} <br/>
        neutral {neutral} <br/>
        bad {bad}
      </p>

    </div>
  )
}

export default App