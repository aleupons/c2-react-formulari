export const Pas3 = () => {
  return (
    <>
      <h2>Login</h2>
      <div className="form-group">
        <label htmlFor="usuari-login">Nom d'usuari:</label>
        <input
          className="form-control"
          id="usuari-login"
          type="text"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="contrassenya-login">Contrassenya:</label>
        <input
          className="form-control"
          id="contrassenya-login"
          type="password"
          required
        />
      </div>
      <div className="form-check">
        <input
          class="form-check-input"
          id="recordar-contrassenya"
          type="checkbox"
          required
        />
        <label className="form-check-label" htmlFor="recordar-contrassenya">
          Recordar contrassenya
        </label>
      </div>
      <button className="btn btn-success" type="submit">
        Accedir
      </button>
    </>
  );
};
