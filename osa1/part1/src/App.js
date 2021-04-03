import React from 'react'

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old.</p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      greeting app created by 
      <a href="https://github.com/mluukkai">mluukkai</a>
    </div>
  )
}

const App = () => {
  const ika = 4
  return (
    <>
      <h1>Greetings</h1>
      <Hello name="world" age={26+700000}/>
      <Hello name="void" age={ika}/>
      <Footer />
    </>
  )
}

export default App
