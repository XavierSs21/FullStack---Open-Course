const Header = (props) => {
  return (
    <>
      <h1>Course -- {props.course}</h1>
    </>
  )
}

const Content = (props) => {
  return (
    <div>
      <p>Parte: {props.part1} - cantidad de ejercicios: {props.exercises1}</p> 
      <p>Parte: {props.part2} - cantidad de ejercicios: {props.exercises2}</p> 
      <p>Parte: {props.part3} - cantidad de ejercicios: {props.exercises3}</p> 
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