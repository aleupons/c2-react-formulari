export const Pas1 = () => {
  return (
    <>
      <h2>Dades personals</h2>
      <div className="form-group">
        <label htmlFor="nom">Nom:</label>
        <input className="form-control" id="nom" type="text" required />
      </div>
      <div className="form-group">
        <label htmlFor="cognoms">Cognoms:</label>
        <input className="form-control" id="cognoms" type="text" required />
      </div>
      <div className="form-group">
        <label htmlFor="data-naixement">Data de naixement:</label>
        <input
          className="form-control"
          id="data-naixement"
          type="date"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="correu">Correu electrònic:</label>
        <input className="form-control" id="correu" type="email" required />
      </div>
    </>
  );
};
