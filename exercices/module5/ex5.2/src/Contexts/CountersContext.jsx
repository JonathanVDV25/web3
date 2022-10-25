import React, { useState } from "react"

const Context = React.createContext(null)

const ProviderWrapper = (props) => {

    const [opinions, setOpinions] = useState([
        {id: 0, opinionText: "text of opinion", value:5}, 
        {id: 1, opinionText: "text of opinion2", value:6}
    ])


    const sortedOpinions = opinions.sort((a, b) => a.value <= b.value ? 1 : -1)
    
    const exposedValue = {
        opinions, setOpinions,
        sortedOpinions,
    }

    return <Context.Provider value={exposedValue}>
        { props.children }
    </Context.Provider> 
}

export {
    Context,
    ProviderWrapper
}