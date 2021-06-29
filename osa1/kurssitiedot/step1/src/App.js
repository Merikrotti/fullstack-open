import React from 'react'

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
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      {props.parts.map((part, i) => {
        return <Part key={part.name} name={part.name} exercises={part.exercises} /> 
      })}
    </div>
  )
}

const Part = (props) => {
  return (<div>
    <p>Name: {props.name}</p>
    <p>Exercises: {props.exercises}</p>
  </div>
  )
}

const Total = (props) => {
  return <p> Total: {props.parts.length}</p>
}

const Header = (props) => {
  return <h1>{props.course}</h1>
}

export default App