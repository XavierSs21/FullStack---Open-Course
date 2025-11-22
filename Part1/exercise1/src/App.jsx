import { useState } from 'react'

const Header = ({ text }) => <h1>{text}</h1>

const Button = ({ handleEvent, text }) => <button onClick={handleEvent}>{text}</button>

const MaxAnecdote = ({ votes, anecdote }) => {
  const maxVotes = Math.max(...votes)
  
  if(maxVotes === 0)
    return <div>no votes given to any anecdote</div>
  
  const maxAnecdote = votes.indexOf(maxVotes)

  return (
    <div>
      <p>{anecdote[maxAnecdote]}</p>
      <p>has {maxVotes} {maxVotes === 1 ? 'vote' : 'votes'}</p>
    </div>
  )
}

const App = () => {

  const header = 'Anecdote of the day'
  const topAnecdote = 'Anecdote with most votes'
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  const handleAnecdote = () => {
    let random
    
    do {
      random = Math.floor(Math.random() * anecdotes.length)
    } while(random === selected)
   
    setSelected(random)
  }

  const handleVotes = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }

  return (
    <div>
      <Header text={header}/>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} {votes[selected] === 1 ? 'vote': 'votes'}</p>
      <Button handleEvent={handleVotes} text={'vote'}/>
      <Button handleEvent={handleAnecdote} text={'next anecdote'}/>
      <Header text={topAnecdote}/>
      <MaxAnecdote votes={votes} anecdote={anecdotes}/>
    </div>
  )
}

export default App