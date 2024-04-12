import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [peopleToShow, setPeopleToShow] = useState(persons);

  const isPersonAdded = (name) => persons.filter((person) => person.name === name).length > 0

  const handleSubmit = (event) => {
    event.preventDefault()
    if (isPersonAdded(newName)) {
      alert(`${newName} is already added to phonebook`)
    } else {
      const newPersonObj = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(newPersonObj))
      setNewName('')
      setNewNumber('')
    }
  }
  
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    const newFilter = event.target.value 
    setFilter(newFilter)
    const filteredPeople = persons.filter((person) => person.name.toLowerCase().includes(newFilter))
    setPeopleToShow(filteredPeople)
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <h2>Add new</h2>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          Number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        Filter shown with <input value={filter} onChange={handleFilterChange}/>
      </div> <br />
      {peopleToShow.map(person => <p key={person.name}>{person.name} {person.number}</p>)}
    </div>
  )
}

export default App