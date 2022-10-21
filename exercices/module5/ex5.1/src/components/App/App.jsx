import ButtonGood from "components/Button/ButtonGood";
import ButtonOk from "components/Button/ButtonOk";
import ButtonBad from "components/Button/ButtonBad";
import ButtonReset from "components/Button/ButtonReset";
import { Context as CountersContext } from "Contexts/CountersContext";
import { useContext } from "react";

const App = () => {
  const { bad, ok, good } = useContext(CountersContext)

  return (
    <div>
      <ul>
        <li>
          Good : {good} <ButtonGood />
        </li>
        <li>
          Ok : {ok} <ButtonOk />
        </li>
        <li>
          Bad : {bad} <ButtonBad />
        </li>
      </ul>
        <ButtonReset />
    </div>
  )
}

export default App;
