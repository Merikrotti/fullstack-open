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
      <Header course={course.name}/>
      <Content contents={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

const Header = (props) => {
  return (<h1>{props.course}</h1>)
}

const Total = (props) => {
  return (
    <p>Number of exercises {totalCounter(props.parts)}</p>
  )
}

const totalCounter = (parts) => {
  let count = 0;
  for(let i = 0; i < parts.length; i++) {
    count += parts[i].exercises;
  }
  return count;
}

const Content = (props) => {
  return(<div>
    {props.contents.map((item, index) => {
      return (<Part key={item.name} part={item.name} exercise={item.exercises} />)
    })}
    </div>
  )
}

const Part = (props) => {
  return(
    <p>{props.part} {props.exercise}</p>
  )
}

export default App