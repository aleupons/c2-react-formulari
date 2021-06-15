import { PropTypes } from "prop-types";

export const Pas1 = (props) => {
  const { visible, validarPas1, usuari, setUsuari } = props;
  return (
    <div className={visible ? "" : "off"}>
      <h2>Dades personals</h2>
      <div className="form-group">
        <label htmlFor="nom">Nom:</label>
        <input
          className="form-control"
          id="nom"
          type="text"
          value={usuari.nom}
          onChange={(e) => setUsuari({ ...usuari, nom: e.target.value })}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="cognoms">Cognoms:</label>
        <input
          className="form-control"
          id="cognoms"
          type="text"
          value={usuari.cognoms}
          onChange={(e) => setUsuari({ ...usuari, cognoms: e.target.value })}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="data-naixement">Data de naixement:</label>
        <input
          className="form-control"
          id="data-naixement"
          type="date"
          value={usuari.dataNaixement}
          onChange={(e) =>
            setUsuari({ ...usuari, dataNaixement: e.target.value })
          }
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="correu">Correu electrònic:</label>
        <input
          className="form-control"
          id="correu"
          type="email"
          value={usuari.correu}
          onChange={(e) => setUsuari({ ...usuari, correu: e.target.value })}
          required
        />
      </div>

      <div className="d-flex justify-content-between">
        <button className={`btn btn-primary amagar`}>Anterior</button>
        <button
          className={`btn btn-primary`}
          onClick={validarPas1}
          disabled={
            !usuari.nom ||
            !usuari.cognoms ||
            !usuari.dataNaixement ||
            !usuari.correu
          }
        >
          Següent
        </button>
      </div>
    </div>
  );
};

Pas1.propTypes = {
  visible: PropTypes.bool.isRequired,
  validarPas1: PropTypes.func.isRequired,
  usuari: PropTypes.object.isRequired,
  setUsuari: PropTypes.func.isRequired,
};
