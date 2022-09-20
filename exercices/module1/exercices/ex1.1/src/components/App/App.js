import Content from "../Content/Content";
import Header from "../Header/Header";
import Total from "../Total/Total";


const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 25;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <>
      <Header course={course} />
      <Content
        part1={part1}
        number1={exercises1}
        part2={part2}
        number2={exercises2}
        part3={part3}
        number3={exercises3}
      />
      <Total total={exercises1 + exercises2 + exercises3} />
    </>
  );
};

export default App;
