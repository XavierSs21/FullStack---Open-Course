const Header = (props) => {
  return <h1>Course -- {props.course.name}</h1>
}

const Part = (props) => {
  return <p>Parte: {props.part} -- Cantidad de ejercicios: {props.exercise}</p>

}

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0].name} exercise={props.parts[0].exercises}/>
      <Part part={props.parts[1].name} exercise={props.parts[1].exercises}/>
      <Part part={props.parts[2].name} exercise={props.parts[2].exercises}/>
    </div>
  )
}

const Total = (props) => {
  return <h3>Cantidad total de ejercicios = {
                                          props.parts[0].exercises + 
                                          props.parts[1].exercises + 
                                          props.parts[2].exercises}
          </h3>
}

const Greetings = ({name, age}) => {
  const bornYear = () => new Date().getFullYear() - age
  
  return (
    <div>
      <h2>Hello {name}, you are {age} years old</h2>
      <p><string>So you were probably born in {bornYear()}</string></p>
    </div>
  )
}

const App = () => {
  const person = {
    name: 'Poogsito',
    age: 6
  }

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
      <Header course={course}/>
      <Content 
        parts={course.parts}  
      />
      <Total parts={course.parts}/>
      <Greetings name={person.name} age={person.age}/>
    </div>
  )
}

export default App