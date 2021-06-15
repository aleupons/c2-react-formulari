export const Pas2 = () => {
  return (
    <>
      <h2>Dades d'accés</h2>
      <div className="form-group">
        <label htmlFor="usuari">Nom d'usuari:</label>
        <input name="usuari" type="text" />
      </div>
      <div className="form-group">
        <label htmlFor="contrassenya">Contrassenya:</label>
        <input name="contrassenya" type="text" />
      </div>
      <div className="form-group">
        <label htmlFor="repetir-contrassenya">Repetir contrassenya:</label>
        <input name="repetir-contrassenya" type="text" />
      </div>
      <button className="boto-pas">Anterior</button>
      <button className="boto-pas">Següent</button>
    </>
  );
};
