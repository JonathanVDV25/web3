import Bouton from 'components/Bouton/Bouton'
import Statistics from 'components/Statistics/Statistics'
import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const changeGood = () => setGood(good + 1)
  const changeNeutral = () => setNeutral(neutral + 1)
  const changeBad = () => setBad(bad + 1)

  return (
    <div>
      <h1> give feedback </h1>
      <Bouton changeCount={changeGood} text={"good"} />
      <Bouton changeCount={changeNeutral} text={"neutral"} />
      <Bouton changeCount={changeBad} text={"bad"} />

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App