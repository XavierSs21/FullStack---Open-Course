import { useState } from 'react'

const Header = ({ text }) => <h1>{text}</h1>

const Button = ({ handleEvent, text }) => <button onClick={handleEvent}>{text}</button>

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodFeed = () => {
    const updateGood = good + 1
    setGood(updateGood)
  }
  const handleNeutralFeed = () => {
    const updateNeutral = neutral + 1
    setNeutral(updateNeutral)
  }
  const handleBadFeed = () => {
    const updateBad = bad + 1
    setBad(updateBad)
  }

  const mainTitle = 'Give feedback'
  const staticsTitle = 'Statics'
  return (
    <div>
      <Header text={mainTitle}/>

      <Button handleEvent={handleGoodFeed} text={'good'} />
      <Button handleEvent={handleNeutralFeed} text={'neutral'} />
      <Button handleEvent={handleBadFeed} text={'bad'} />

      <Header text={staticsTitle}/>
      <p>
        good {good} <br/>
        neutral {neutral} <br/>
        bad {bad}
      </p>

    </div>
  )
}

export default App