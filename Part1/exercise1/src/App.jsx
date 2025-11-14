const Header = (props) => {
  return <h1>Course -- {props.course}</h1>
}

const Part = (props) => {
  return <p>Parte: {props.parts} -- Cantidad de ejercicios: {props.exercise}</p>

}

const Content = (props) => {
  return (
    <div>
      <Part parts={props.parts[0].name} exercise={props.parts[0].exercises}/>
      <Part parts={props.parts[1].name} exercise={props.parts[1].exercises}/>
      <Part parts={props.parts[2].name} exercise={props.parts[2].exercises}/>
    </div>
  )
}

const Total = (props) => {
  return <h3>Cantidad total de ejercicios = {
                                          props.exercises1 + 
                                          props.exercises2 + 
                                          props.exercises3}
          </h3>
}

const App = () => {
  const course = 'Half Stack application development'
  
   const parts = [
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

  return (
    <div>
      <Header course={course}/>
      <Content 
        parts={parts}  
      />
      <Total 
        exercises1={parts[0].exercises}
        exercises2={parts[1].exercises}
        exercises3={parts[2].exercises}
      />
    </div>
  )
}

export default App