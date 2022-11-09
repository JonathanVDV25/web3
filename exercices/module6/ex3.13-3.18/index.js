require('dotenv').config()

const express = require("express")
const morgan = require('morgan')
const Person = require('./models/phonebook')

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

app.get("/api/persons/:id", (request, response, next) => {
  Person.findById(request.params.id)
    .then(person => {
      if (person) {
        response.json(person)
      } else {
        response.status(404).end()
      }
    })
    .catch(error => next(error))
})

app.delete("/api/persons/:id", (request, response, next) => {
  Person.findByIdAndRemove(request.params.id)
    .then(result => {
      response.status(204).end()
    })
    .catch(error => next(error))
})

app.put('/api/persons/:id', (request, response, next) => {
  const body = request.body

  const person = {
    name: body.name,
    callnumber: body.callnumber,
  }

  // { new: true } -> so updatedPerson gets the new value after the update
  // Without that, updatedPerson would get the old value after the update
  Person.findByIdAndUpdate(request.params.id, person, { new: true })
    .then(updatedPerson => {
      response.json(updatedPerson)
    })
    .catch(error => next(error))
})

app.post("/api/persons", async (request, response) => {
  const personPayload = request.body

    if (personPayload.name === undefined || personPayload.callnumber === undefined) { 
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
    response
      .status(422)
      .json({
        errorMessages,
      })
    return
  }
  
  newPerson.save().then(savedNote => {
    response.json(savedNote)
  })
})

// important that the middleware for handling unsupported routes is next to the last middleware that is loaded into Express, just before the error handler.
const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unkown endpoint' })
}

// handler of requests with unknown endpoint
app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformed id' })
  }

  // In all other error situations, the middleware passes the error forward to the default Express error handler
  next(error)
}

// this has to be the last loaded middleware
app.use(errorHandler)
