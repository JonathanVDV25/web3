const Display = ({text, number}) => {
 
    if(text === 'positive'){
        return (
            <>
             {text} {number} %
            </>
            
        )
    } else {
        return (
            <>
             {text} {number}
            </>
        )
    }
 
}

export default Display