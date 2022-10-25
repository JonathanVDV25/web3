import { Context as CountersContext } from "Contexts/CountersContext"
import { useContext, useState } from "react"
import { v4 as uuidv4 } from 'uuid'

const AddOpinion = () => {

    const [newOpinion, setNewOpinion] = useState("")
    const {opinions, setOpinions} = useContext(CountersContext)

    const handleOpinionChange = (event) => {
        setNewOpinion(event.target.value)
    }

    const addOpinion = (event) => {
        event.preventDefault()
        console.log('button clicked', event.target)

        const opinionObject = {
            id: uuidv4(),
            opinionText: newOpinion,
            value: 1
        }

        setOpinions(opinions.concat(opinionObject))
        setNewOpinion("")
    }

    return (
        <>
            <form onSubmit={addOpinion}>
                <input 
                    value={newOpinion}
                    onChange={handleOpinionChange} 
                /> 
                <button type="submit"> Add opinion</button>
            </form>
        </>
    )
}

export default AddOpinion