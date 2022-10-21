import { Context as CountersContext } from "Contexts/CountersContext";
import { useContext } from "react";

const ButtonOk = () => {
    const { increaseOk } = useContext(CountersContext)

    return (
        <>
            <button onClick={increaseOk}> increase ok</button>
        </>
    )

}

export default ButtonOk