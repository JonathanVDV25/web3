import Part from "../Part/Part"
const Content = (props) => {
    return (
      <div>
        <Part part={props.part1} number={props.number1} />
        <Part part={props.part2} number={props.number2} />
        <Part part={props.part3} number={props.number3} />
      </div>
    )
  }

export default Content