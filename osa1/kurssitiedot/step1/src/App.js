import React from 'react'

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
      <Content contents={[part1, part2, part3]}/>
      <Total exercises={[part1.exercises, part2.exercises, part3.exercises]}/>
    </div>
  )
}

const Header = (props) => {
  return (<h1>{props.course}</h1>)
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.exercises[0] + props.exercises[1] + props.exercises[2]}</p>
  )
}

const Content = (props) => {
  return(<div>
    {props.contents.map((item, index) => {
      return (<Part key={item} part={item.name} exercise={item.exercises} />)
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