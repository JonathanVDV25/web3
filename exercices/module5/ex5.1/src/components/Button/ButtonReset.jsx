import { Context as CounterContext } from "Contexts/CountersContext";
import { useContext } from "react";

const ButtonReset = () => {
    const { resetAll } = useContext(CounterContext)

    return (
        <>
        <button onClick={resetAll}> Reset scores </button>
        </>
    )
}

export default ButtonReset