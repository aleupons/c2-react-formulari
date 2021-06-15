import { PropTypes } from "prop-types";
import { useState } from "react";

export const Pas3 = (props) => {
  const {
    visible,
    invalidarPas2,
    validarPas3,
    usuari: { nom, cognoms, dataNaixement, correu, usuari, contrassenya },
  } = props;
  const [usuariLogin, setUsuariLogin] = useState("");
  const [contrassenyaLogin, setContrassenyaLogin] = useState("");
  return (
    <div className={visible ? "" : "off"}>
      <h2>Login</h2>
      <div className="form-group">
        <label htmlFor="usuari-login">Nom d'usuari:</label>
        <input
          className="form-control"
          id="usuari-login"
          type="text"
          value={usuariLogin}
          onChange={(e) => setUsuariLogin(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="contrassenya-login">Contrassenya:</label>
        <input
          className="form-control"
          id="contrassenya-login"
          type="password"
          value={contrassenyaLogin}
          onChange={(e) => setContrassenyaLogin(e.target.value)}
          required
        />
      </div>
      <div className="form-check">
        <input
          class="form-check-input"
          id="recordar-contrassenya"
          type="checkbox"
        />
        <label className="form-check-label" htmlFor="recordar-contrassenya">
          Recordar contrassenya
        </label>
      </div>
      <p
        className="aler alert-danger"
        hidden={
          (usuariLogin === usuari && contrassenyaLogin === contrassenya) ||
          !usuariLogin ||
          !contrassenyaLogin
        }
      >
        El nom d'usuari o la contrassenya no són correctes
      </p>

      <div className="d-flex justify-content-between">
        <button className={`btn btn-primary`} onClick={invalidarPas2}>
          Anterior
        </button>
        <button className={`btn btn-primary amagar`}>Següent</button>
      </div>

      <div className="d-flex justify-content-center">
        <button
          className="btn btn-success"
          type="submit"
          onClick={validarPas3}
          disabled={
            usuariLogin !== usuari || contrassenyaLogin !== contrassenya
          }
        >
          Accedir
        </button>
      </div>
    </div>
  );
};

Pas3.propTypes = {
  visible: PropTypes.bool.isRequired,
  invalidarPas2: PropTypes.func.isRequired,
  validarPas3: PropTypes.func.isRequired,
  usuari: PropTypes.shape({
    nom: PropTypes.string.isRequired,
    cognoms: PropTypes.string.isRequired,
    dataNaixement: PropTypes.string.isRequired,
    correu: PropTypes.string.isRequired,
    usuari: PropTypes.string.isRequired,
    contrassenya: PropTypes.string.isRequired,
  }),
};
