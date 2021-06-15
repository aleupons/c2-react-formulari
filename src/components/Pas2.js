import { PropTypes } from "prop-types";

export const Pas2 = (props) => {
  const { pas1 } = props;
  return (
    <>
      <h2>Dades d'accés</h2>
      <div className="form-group">
        <label htmlFor="usuari">Nom d'usuari:</label>
        <input className="form-control" id="usuari" type="text" required />
      </div>
      <div className="form-group">
        <label htmlFor="contrassenya">Contrassenya:</label>
        <input
          className="form-control"
          id="contrassenya"
          type="password"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="repetir-contrassenya">Repetir contrassenya:</label>
        <input
          className="form-control"
          id="repetir-contrassenya"
          type="password"
          required
        />
      </div>
    </>
  );
};

Pas2.propTypes = {
  pas1: PropTypes.bool.isRequired,
};
