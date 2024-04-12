import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

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
      <Filter value={filter} onChange={handleFilterChange}/>

      <h2>Add new</h2>
      <PersonForm
        handleSubmit={handleSubmit}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      
      <h2>Numbers</h2>
      <Persons peopleToShow={peopleToShow}/>
    </div>
  )
}

export default App