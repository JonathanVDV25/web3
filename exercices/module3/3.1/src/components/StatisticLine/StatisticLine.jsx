const StatisticLine = ({text, value}) => {

    if(text === 'positive'){
        return (
            <>
            <tr>
                <td> {text} </td>
                <td> {value} % </td>
            </tr>
            </>
        )
    } else {
        return (
            <>
            <tr>
                <td> {text} </td>
                <td> {value}</td>
            </tr>
            </>
        )
    }
}

export default StatisticLine