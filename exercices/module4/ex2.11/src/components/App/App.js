import { useState } from "react"

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1234567'}
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleNewName = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNewNumber = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value)
  }

  const addPhoneBook = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }

    let nameInList = persons.find(p => p.name === newName)
    if(nameInList === undefined) {
      setPersons(persons.concat(personObject))
      setNewName('')
    } else {
      alert(`${newName} is already added to phonebook`)
    }
      
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPhoneBook}>
        <div>
          name: 
          <input
           value={newName}
           onChange={handleNewName} />
        </div>
        <div>
          number:
          <input 
            value={newNumber}
            onChange={handleNewNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {
          persons.map(p => 
            <li key={p.name}> {p.name}  {p.number}</li>)
        }
      </ul>
    </div>
  )
}

export default App