import { Context as CountersContext } from "Contexts/CountersContext";
import { useContext } from "react";

const ButtonGood = () => {
    const { increaseGood } = useContext(CountersContext)

    return (
        <>
            <button onClick={increaseGood}> increase good</button>
        </>
    )

}

export default ButtonGood