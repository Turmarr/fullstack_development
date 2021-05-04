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

const Total = ({values, text}) => (
  <div>
    <p>
      {text} {values.reduce((a,b) => a + b, 0)}
    </p>
  </div>
)

const Average = ({values, text}) => {
  const sum = values.reduce((a,b) => a + b, 0)
  let ave = 0
  if (sum !== 0) {
    ave = (values[0]-values[2])/sum
  }
  return (
  <div>
    <p>
      {text} {ave}
    </p>
  </div> )
}

const Positive = ({values, text}) => {
  const sum = values.reduce((a,b) => a + b, 0)
  let pos = 0
  if (sum !== 0) {
    pos = values[0]*100/sum
  }
  return (
    <div>
      <p>
        {text} {pos}
      </p>
    </div>
  )
}

const Content = ({values, text}) => (
  <div>
    <BasicInfo value={values[0]} text={text[0]}/>
    <BasicInfo value={values[1]} text={text[1]}/>
    <BasicInfo value={values[2]} text={text[2]}/>
    <Total values={values} text={text[3]}/>
    <Average values={values} text={text[4]}/>
    <Positive values={values} text={text[5]}/>
  </div>
)

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
      <Content values={[good, neutral, bad]} text={statistic_labels}/>
    </div>
  )
}

export default App