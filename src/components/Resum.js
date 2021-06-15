import { PropTypes } from "prop-types";

export const Resum = (props) => {
  const {
    visible,
    usuari: { nom, cognoms, dataNaixement, correu, usuari, contrassenya },
  } = props;
  return (
    <div className={visible ? "" : "off"}>
      <div container>
        <h2>Resum</h2>
        <h4>Nom: </h4>
        <p>{nom}</p>
        <h4>Cognoms: </h4>
        <p>{cognoms}</p>
        <h4>Data de naixement: </h4>
        <p>{dataNaixement}</p>
        <h4>Correu electrònic: </h4>
        <p>{correu}</p>
        <h4>Nom d'usuari: </h4>
        <p>{usuari}</p>
        <h4>Contrassenya: </h4>
        <p>{contrassenya}</p>
      </div>
    </div>
  );
};

Resum.propTypes = {
  visible: PropTypes.bool.isRequired,
  usuari: PropTypes.shape({
    nom: PropTypes.string.isRequired,
    cognoms: PropTypes.string.isRequired,
    dataNaixement: PropTypes.string.isRequired,
    correu: PropTypes.string.isRequired,
    usuari: PropTypes.string.isRequired,
    contrassenya: PropTypes.string.isRequired,
  }),
};
