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
            <tr>
              <td>
                <StatisticLine text={"good"} value={good} />
              </td>
            </tr>
            <tr>
              <td>
                <StatisticLine text={"neutral"} value={neutral} />
              </td>
            </tr>
            <tr>
              <td>
                <StatisticLine text={"bad"} value={bad} />
              </td>
            </tr>
            <tr>
              <td>
                <StatisticLine text={"all"} value={good + neutral + bad} />
              </td>
            </tr>
            <tr>
              <td>
                <StatisticLine
                  text={"average"}
                  value={(good - bad) / (good + neutral + bad)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <StatisticLine
                  text={"positive"}
                  value={(good / (good + neutral + bad)) * 100}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }
};

export default Statistics;
