import { useState } from "react";
import { Pas1 } from "./components/Pas1";
import { Pas2 } from "./components/Pas2";
import { Pas3 } from "./components/Pas3";
import { Resum } from "./components/Resum";

function App() {
  const [pas1Visible, setPas1Visible] = useState(true);
  const [pas2Visible, setPas2Visible] = useState(false);
  const [pas3Visible, setPas3Visible] = useState(false);
  const [resumVisible, setResumVisible] = useState(false);
  const [usuari, setUsuari] = useState({
    nom: "",
    cognoms: "",
    dataNaixement: "",
    correu: "",
  });
  const validarPas1 = () => {
    setPas1Visible(false);
    setPas2Visible(true);
  };
  const invalidarPas1 = () => {
    setPas1Visible(true);
    setPas2Visible(false);
  };
  const validarPas2 = () => {
    setPas2Visible(false);
    setPas3Visible(true);
  };
  const invalidarPas2 = () => {
    setPas2Visible(true);
    setPas3Visible(false);
  };
  const validarPas3 = () => {
    setPas3Visible(false);
    setResumVisible(true);
  };
  return (
    <div className="container-fluid container-md">
      <h1 className="text-center">Formulari</h1>
      <form>
        <Pas1
          visible={pas1Visible}
          validarPas1={validarPas1}
          usuari={usuari}
          setUsuari={setUsuari}
        />
        <Pas2
          visible={pas2Visible}
          invalidarPas1={invalidarPas1}
          validarPas2={validarPas2}
          usuari={usuari}
          setUsuari={setUsuari}
        />
        <Pas3
          visible={pas3Visible}
          invalidarPas2={invalidarPas2}
          validarPas3={validarPas3}
          usuari={usuari}
        />
      </form>
      <Resum visible={resumVisible} usuari={usuari} />
    </div>
  );
}

export default App;
