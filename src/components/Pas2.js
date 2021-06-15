import { PropTypes } from "prop-types";
import { useState } from "react";

export const Pas2 = (props) => {
  const { visible, invalidarPas1, validarPas2, usuari, setUsuari } = props;
  const [repetirContrassenya, setRepetirContrassenya] = useState("");
  return (
    <div className={visible ? "" : "off"}>
      <h2>Dades d'accés</h2>
      <div className="form-group">
        <label htmlFor="usuari">Nom d'usuari:</label>
        <input
          className="form-control"
          id="usuari"
          type="text"
          value={usuari.usuari}
          onChange={(e) => setUsuari({ ...usuari, usuari: e.target.value })}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="contrassenya">Contrassenya:</label>
        <input
          className="form-control"
          id="contrassenya"
          type="password"
          value={usuari.contrassenya}
          onChange={(e) =>
            setUsuari({ ...usuari, contrassenya: e.target.value })
          }
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="repetir-contrassenya">Repetir contrassenya:</label>
        <input
          className="form-control"
          id="repetir-contrassenya"
          type="password"
          value={repetirContrassenya}
          onChange={(e) => setRepetirContrassenya(e.target.value)}
          required
        />
      </div>
      <p
        className="aler alert-danger"
        hidden={
          usuari.contrassenya === repetirContrassenya || !repetirContrassenya
        }
      >
        La contrassenya ha de ser la mateixa
      </p>

      <div className="d-flex justify-content-between">
        <button className={`btn btn-primary`} onClick={invalidarPas1}>
          Anterior
        </button>
        <button
          className={`btn btn-primary`}
          onClick={validarPas2}
          disabled={
            !usuari.usuari ||
            !usuari.contrassenya ||
            !repetirContrassenya ||
            usuari.contrassenya !== repetirContrassenya
          }
        >
          Següent
        </button>
      </div>
    </div>
  );
};

Pas2.propTypes = {
  visible: PropTypes.bool.isRequired,
  invalidarPas1: PropTypes.func.isRequired,
  validarPas2: PropTypes.func.isRequired,
  usuari: PropTypes.shape({
    nom: PropTypes.string.isRequired,
    cognoms: PropTypes.string.isRequired,
    dataNaixement: PropTypes.string.isRequired,
    correu: PropTypes.string.isRequired,
  }),
  setUsuari: PropTypes.func.isRequired,
};
