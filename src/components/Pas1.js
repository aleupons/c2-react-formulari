export const Pas1 = () => {
  return (
    <>
      <h2>Dades personals</h2>
      <div className="form-group">
        <label htmlFor="nom">Nom:</label>
        <input name="nom" type="text" />
      </div>
      <div className="form-group">
        <label htmlFor="cognoms">Cognoms:</label>
        <input name="cognoms" type="text" />
      </div>
      <div className="form-group">
        <label htmlFor="data-naixement">Data de naixement:</label>
        <input name="data-naixement" type="text" />
      </div>
      <div className="form-group">
        <label htmlFor="correu">Correu electrònic:</label>
        <input name="correu" type="text" />
      </div>
      <button className="boto-pas">Següent</button>
    </>
  );
};
