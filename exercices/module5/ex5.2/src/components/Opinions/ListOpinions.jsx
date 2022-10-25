import Button from "components/Button/Button";
import { Context as CountersContext } from "Contexts/CountersContext";
import { useContext } from "react";

const ListOpinions = () => {

    const { sortedOpinions } = useContext(CountersContext)

    return (
        <div>
        <ul>
            {sortedOpinions
            .map(opinion => 
                <li key={opinion.id}> 
                    {opinion.opinionText} : {opinion.value} <Button idOpinion={opinion.id} />
                </li>
            )}
        </ul>
        </div>
    )
}

export default ListOpinions