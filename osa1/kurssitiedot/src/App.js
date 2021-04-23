import React from 'react'

const Header = (props) => (
  <div>
    <h1>{props.course}</h1>
  </div>
)

const Part = (props) => (
  <div>
    <p>
      {props.p.name} {props.p.exercises}
    </p>
  </div>
  
)

const Content = (props) => (
  <div>
    <Part p={props.p1} />
    <Part p={props.p2} />
    <Part p={props.p3} />
  </div>
)

const Total = (props) => (
  <div>
    <p>Number of exercises {props.e1 + props.e2 + props.e3}</p>
  </div>
)

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }


  return (
    <div>
      <Header course={course}/>
      <Content p1={part1} p2={part2} p3= {part3}/>
      <Total e1={part1.exercises} e2={part2.exercises} e3={part3.exercises}/>
    </div>
  )
}

export default App