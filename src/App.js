import { Pas1 } from "./components/Pas1";
import { Pas2 } from "./components/Pas2";
import { Pas3 } from "./components/Pas3";
import { Resum } from "./components/Resum";

function App() {
  return (
    <>
      <form>
        <Pas1 />
        <Pas2 />
        <Pas3 />
      </form>
      <Resum />
    </>
  );
}

export default App;
