const Bouton = ({changeCount, text}) => {
    return (
        <button onClick={changeCount}>{text}</button>
    )
}

export default Bouton