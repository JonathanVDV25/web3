import { useState } from "react";
import Display from "components/Display/Display";
import Button from "components/Button/Button";

const App = () => {
  let initialValue;
  if (localStorage.getItem("counter") !== null)
    initialValue = parseInt(localStorage.getItem("counter"));
  else initialValue = 0;
  const [counter, setCounter] = useState(initialValue);
  const changeCount = (delta) => {
    setCounter(counter + delta);
    localStorage.setItem("counter", JSON.stringify(counter + delta));
  };

  return (
    <div>
      <Display counter={counter} />
      <Button changeCount={changeCount} text="plus" delta={+1} />
      <Button changeCount={changeCount} text="zero" delta={-counter} />
      <Button changeCount={changeCount} text="minus" delta={-1} />
    </div>
  );
};

export default App;
