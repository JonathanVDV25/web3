import Display from "components/Display/Display"

const StatisticLine = ({text, value}) => {
    return (
        <>
            <Display text={text} number={value} />
        </>
    )
}

export default StatisticLine