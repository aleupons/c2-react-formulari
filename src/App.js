import { useState } from "react";
import { Pas1 } from "./components/Pas1";
import { Pas2 } from "./components/Pas2";
import { Pas3 } from "./components/Pas3";
import { Resum } from "./components/Resum";

function App() {
  const [pas1, setPas1] = useState(false);
  const [pas2, setPas2] = useState(false);
  const [pas3, setPas3] = useState(false);
  return (
    <div className="container-fluid container-md">
      <form>
        <Pas1 />
        <Pas2 pas1={pas1} />
        <Pas3 pas2={pas2} />
      </form>
      <div className="d-flex justify-content-between">
        <button className="btn btn-primary">Anterior</button>
        <button className="btn btn-primary">Següent</button>
      </div>
      <Resum pas3={pas3} />
    </div>
  );
}

export default App;
