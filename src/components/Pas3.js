export const Pas3 = () => {
  return (
    <>
      <h2>Login</h2>
      <div className="form-group">
        <label htmlFor="usuari-login">Nom d'usuari:</label>
        <input name="usuari-login" type="text" />
      </div>
      <div className="form-group">
        <label htmlFor="contrassenya-login">Contrassenya:</label>
        <input name="contrassenya-login" type="text" />
      </div>
      <div className="form-group">
        <label htmlFor="recordar-contrassenya">Recordar contrassenya:</label>
        <input name="recordar-contrassenya" type="checkbox" />
      </div>
      <button className="boto-pas">Anterior</button>
      <button className="validar">Accedir</button>
    </>
  );
};
