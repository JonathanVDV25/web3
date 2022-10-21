import React, { useState } from "react"

const Context = React.createContext(null)

const ProviderWrapper = (props) => {

    const [bad, setBad] = useState(0)
    const [ok, setOk] = useState(0)
    const [good, setGood] = useState(0)

    const increaseBad = () => setBad(bad + 1)
    
    const increaseOk = () => setOk(ok + 1)

    const increaseGood = () => setGood(good + 1)

    const resetAll = () => {
        setBad(0)
        setOk(0)
        setGood(0)
    }

    const exposedValue = {
        bad, increaseBad,
        ok, increaseOk,
        good, increaseGood,
        resetAll,
    }
  

    return <Context.Provider value={exposedValue}>
        { props.children }
    </Context.Provider>
}

export {
    Context,
    ProviderWrapper
}