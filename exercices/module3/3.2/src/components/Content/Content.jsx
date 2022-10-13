import Part from "components/Part/Part"
import Total from "components/Total/Total"
const Content = (parts) => {
  let nbrExercices = 0
  parts.part.forEach((part) => nbrExercices += part.exercises )

    return (
      <div>
        {
          parts.part.map(part => <Part key={part.id} part={part.name} number={part.exercises} /> )
        }
        
        <Total total={nbrExercices} />
      </div>
    )
  }

export default Content