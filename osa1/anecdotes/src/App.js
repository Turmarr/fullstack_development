import React, { useState } from 'react'

const Button = ({handler, text}) => (
  <button onClick={handler}>
    {text}
  </button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  const [highest, setHighest] = useState(0)

  const handleRand = () => {
    const rand = Math.floor(Math.random() * anecdotes.length)
    setSelected(rand)
  }

  const maxIndex = (copy) => {
    const max = Math.max(...copy)
    const mi = copy.indexOf(max)
    return mi
  }

  const vote = () => {
    let copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
    //console.log(copy)
    const mi = maxIndex(copy)
    //console.log(mi)
    setHighest(mi)
  }



  return (
    <div>
      <h1>Anecdotes</h1>
      <p>
        {anecdotes[selected]}
      </p>
      <p>
        has {votes[selected]} votes
      </p>
      <Button handler={vote} text="vote"/>
      <Button handler={handleRand} text={"new anecdote"}/>
      <h1>Anecdote with most votes</h1>
      <p>
        {anecdotes[highest]}
      </p>
      <p>
        has {votes[highest]} votes
      </p>

    </div>
  )
}

export default App