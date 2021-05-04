import React, { useState } from 'react'

const Header = ({text}) => (
  <div>
    <h1>{text}</h1>
  </div>
)


const Button = ({handler, text}) => (
  <button onClick={handler}>
    {text}
  </button>
)

const StatisticLine = ({text, value, sign}) => (
  <tr>
    <td>{text} </td>
    <td>{value} {sign}</td>
  </tr>
)

const Statistics = ({values, text}) => {
  const sum = values.reduce((a,b) => a + b, 0)
  if (sum === 0) {
    return (
      <div>
        <p>
          No feedback given
        </p>
      </div>
    )
  } else {
    const ave = (values[0]-values[2])/sum
    const pos = values[0]/sum * 100
    return (
      <div>
        <table>
          <tbody>
            <StatisticLine value={values[0]} text={text[0]} sign=""/>
            <StatisticLine value={values[1]} text={text[1]} sign=""/>
            <StatisticLine value={values[2]} text={text[2]} sign=""/>
            <StatisticLine value={sum} text={text[3]} sign=""/>
            <StatisticLine value={ave} text={text[4]} sign=""/>
            <StatisticLine value={pos} text={text[5]} sign="%"/>
          </tbody>
        </table>
      </div>
    )
  }
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const statistic_labels = ["good","neutral","bad","all","average","positive"]

  return (
    <div>
      <Header text={"give feedback"}/>
      <Button handler={() => setGood(good + 1)} text={statistic_labels[0]}/>
      <Button handler={() => setNeutral(neutral + 1)} text={statistic_labels[1]}/>
      <Button handler={() => setBad(bad + 1)} text={statistic_labels[2]}/>
      <Header text={"statistics"}/>
      <Statistics values={[good, neutral, bad]} text={statistic_labels}/>
    </div>
  )
}

export default App