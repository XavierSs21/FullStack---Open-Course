import { useState } from 'react'

const History = (props) => {

  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  
  return (
    <div>
      History of clicks → {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
      {text}
    </button>
)

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    const updatedLeft = left + 1
    setLeft(updatedLeft)
    setTotal(updatedLeft + right)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    const updatedRight = right + 1
    setRight(updatedRight)
    setTotal(left + updatedRight)
  }

  const ClearClicks = () => {
    setLeft(0)
    setRight(0)
    setTotal(0)
    setAll([])
  }

  return (
    <div>
      
      {left}
      <Button handleClick={handleLeftClick} text={'left'} />
      <Button handleClick={handleRightClick} text={'right'} />
      {right}

      <History allClicks={allClicks} />
      <Button handleClick={ClearClicks} text={'Clear clicks'} />

      <p>total: {total}</p>
    </div>
  )
}

export default App