require('dotenv').config()

const express = require("express")
const morgan = require('morgan')
const Person = require('./models/phonebook')

// Data. This emulates a datastore
const allPersons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada lovelace",
    number: "39-44-5232323",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-2345345",
  },
  {
    id: 4,
    name: "Mary Poppendick",
    number: "39-23-64234122",
  },
]


// Initializers. These blocks should be placed in different files, for example middlewares.js, server.js...
// but let's keep this simple.
const app = express()

app.use(express.json())

morgan.token('body', (request) => {
  return JSON.stringify(request.body)
})
morgan.token('currentUserEmail', (request) => {
  return request.currentUser && request.currentUser.email || "anonymous"
})
const logger = morgan(':method :url :status :res[content-length] - :response-time ms :body (:currentUserEmail)')
app.use(logger)

const attachCurrentuser = (request, response, next) => {
  const email = request.header("X-USER-EMAIL")
  if (email) request.currentUser = { email }
  next()
}
app.use(attachCurrentuser)


const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})



// Routes. These blocks should be placed in different files under "routes/" directory
// but let's keep this simple.
app.get("/info", (request, response) => {
    Person.find({}).then(persons => {
        const now = new Date()
        const bodyContentText = `
        Phonebook has info for ${persons.length} people.
        ${now.toString()}
        `
        response
            .type("text")
            .send(bodyContentText)
    })
})

app.get("/api/persons", (request, response) => {
    Person.find({}).then(persons => {
        response.json(persons)
    })
})

app.get("/api/persons/:id", (request, response) => {
  const idParam = request.params.id
  const id = Number(idParam)
  const person = allPersons.find(person => person.id === id)

  if (person) {
    response.json(person)
  } else {
    response.status(404).end()
  }
})

app.delete("/api/persons/:id", (request, response) => {
  const idParam = request.params.id
  const id = Number(idParam)
  const personIndex = allPersons.findIndex(person => person.id === id)
  if (personIndex > -1) {
    allPersons.splice(personIndex, 1) // We do NOT use delete because it creates a sparse array with a wrong length
  }
  response.status(204).end()
})

app.post("/api/persons", async (request, response) => {
  const personPayload = request.body

    if (personPayload.name === undefined || personPayload.callnumber === undefined) { // a changer pt etre
        return response.status(400).json({ error: 'content missing' })
    }

  const newPerson = new Person ({
    name: personPayload.name,
    callnumber: personPayload.callnumber,
  })

  const errorMessages = []
  if (!personPayload.name) errorMessages.push("name must be present")
  if (!personPayload.callnumber) errorMessages.push("callnumber must be present")

  let nameFound = await Person.find({name: newPerson.name})
  if (nameFound.length !== 0) {
    errorMessages.push("name must be unique")
  }


  if (errorMessages.length > 0) {
    console.log('vava');
    response
      .status(422)
      .json({
        errorMessages,
      })
      console.log('oui');
    return
  }
  
  newPerson.save().then(savedNote => {
    response.json(savedNote)
  })
})
