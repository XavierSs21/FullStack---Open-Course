const Header = (props) => {
  return (
    <h1>Course -- {props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>Parte: {props.parte} -- Cantidad de ejercicios: {props.exercise}</p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part parte={props.part1} exercise={props.exercises1}/>
      <Part parte={props.part2} exercise={props.exercises2}/>
      <Part parte={props.part3} exercise={props.exercises3}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <>
      <h3>Cantidad total de ejercicios = {
                                          props.exercises1 + 
                                          props.exercises2 + 
                                          props.exercises3}
      </h3>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  
  const part1 = {
    name: 'Fundamentals of React',
    exercise: 10
  }

  const part2 = {
    name: 'Using props to pass data',
    exercise: 7
  }

  const part3 = {
    name: 'State of a component',
    exercise: 14
  }

  return (
    <div>
      <Header course={course}/>
      <Content 
        part1={part1.name} exercises1={part1.exercise} 
        part2={part2.name} exercises2={part2.exercise} 
        part3={part3.name} exercises3={part3.exercise} 
        />
      <Total 
        exercises1={part1.exercise}
        exercises2={part2.exercise}
        exercises3={part3.exercise}
      />
    </div>
  )
}

export default App