import { Context as CountersContext } from "Contexts/CountersContext";
import { useContext } from "react";

const Button = ({idOpinion}) => {

    const {opinions, setOpinions} = useContext(CountersContext)

    const increaseVote = () => {
        let newOpinions = opinions.map(opinion => {
            if(opinion.id === idOpinion)
                return opinion = {id: opinion.id, opinionText: opinion.opinionText, value: parseInt(opinion.value) + 1}
            else {
                return opinion
            }
        })
        setOpinions(newOpinions)
    }

    return (
        <button onClick={increaseVote}> Vote </button>
    )
}

export default Button