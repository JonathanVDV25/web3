import { Context as CountersContext } from "Contexts/CountersContext";
import { useContext } from "react";

const ButtonBad = () => {
    const { increaseBad } = useContext(CountersContext)

    return (
        <>
            <button onClick={increaseBad}> increase bad</button>
        </>
    )

}

export default ButtonBad