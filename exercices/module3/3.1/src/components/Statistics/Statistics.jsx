import StatisticLine from "components/StatisticLine/StatisticLine";
const Statistics = ({ good, neutral, bad }) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <>
        <p> No feedback given </p>
      </>
    );
  } else {
    return (
      <>
        <h1> statistics </h1>
        <table>
          <tbody>
            
                <StatisticLine text={"good"} value={good} />
              
                <StatisticLine text={"neutral"} value={neutral} />
              
                <StatisticLine text={"bad"} value={bad} />
              
                <StatisticLine text={"all"} value={good + neutral + bad} />
              
                <StatisticLine text={"average"} value={(good - bad) / (good + neutral + bad)} />
              
                <StatisticLine text={"positive"} value={(good / (good + neutral + bad)) * 100} />
              
          </tbody>
        </table>
      </>
    );
  }
};

export default Statistics;
