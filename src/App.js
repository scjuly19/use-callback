import logo from "./logo.svg";
import "./App.css";
import Button from './button';
import Count from './count';
import { useCallback, useEffect, useState } from "react";

function App() {
  const [appleCount, setAppleCount] = useState(0);
  const [avoCount, setAvoCount] = useState(0);
  
  
//Try changing these to normal function and check the consoles.
  const incrementAvocados = useCallback(() => {
    setAvoCount(avoCount + 1);
  }, [avoCount]);

  const incrementApples = useCallback(() => {
    setAppleCount(appleCount + 1);
  }, [appleCount]);
  return (
    <div className="App">
      <Count text="Apples" count={appleCount} />
      <Button onClick={incrementApples}>Add apple</Button>
      <Count text="Avocados" count={avoCount} />
      <Button onClick={incrementAvocados}>Add Avocado</Button>
    </div>
  );
}

export default App;
