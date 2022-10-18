import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
        .catch(error => {
            console.log("getAll persons fail: " + error)
        })
    return request.then(response => response.data)
}

const create = newPhoneBook => {
    const request = axios.post(baseUrl, newPhoneBook)
        .catch(error => {
            console.log("create person fail: ", error);
        })
    return request.then(response => response.data)
}

const personService = {
    getAll,
    create
}

export default personService