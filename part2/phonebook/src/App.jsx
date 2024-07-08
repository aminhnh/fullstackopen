import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [peopleToShow, setPeopleToShow] = useState(persons);

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
    })
  }, [])

  useEffect(() => {
    setPeopleToShow(persons)
  }, [persons])

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