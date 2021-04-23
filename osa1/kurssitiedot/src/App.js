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
    <Part p={props.p[0]} />
    <Part p={props.p[1]} />
    <Part p={props.p[2]} />
  </div>
)

const Total = (props) => (
  <div>
    <p>Number of exercises {props.p.map(value => value.exercises).reduce((a, b) => a + b, 0)}</p>
  </div>
)

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  return (
    <div>
      <Header course={course.name}/>
      <Content p={course.parts}/>
      <Total p={course.parts}/>
    </div>
  )
}

export default App