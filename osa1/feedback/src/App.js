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

const BasicInfo = ({value, text}) => (
  <div>
    <p>
      {text} {value}
    </p>
  </div>
)

const Content = ({values, text}) => (
  <div>
    <BasicInfo value={values[0]} text={text[0]}/>
    <BasicInfo value={values[1]} text={text[1]}/>
    <BasicInfo value={values[2]} text={text[2]}/>
  </div>
)

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const statistic_labels = ["good","neutral","bad"]

  return (
    <div>
      <Header text={"give feedback"}/>
      <Button handler={() => setGood(good + 1)} text={statistic_labels[0]}/>
      <Button handler={() => setNeutral(neutral + 1)} text={statistic_labels[1]}/>
      <Button handler={() => setBad(bad + 1)} text={statistic_labels[2]}/>
      <Header text={"statistics"}/>
      <Content values={[good, neutral, bad]} text={statistic_labels}/>
    </div>
  )
}

export default App