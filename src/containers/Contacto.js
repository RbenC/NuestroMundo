const Contacto = () => {
    return (
        <main class="contenido-principal contenedor">
    <h2 class="text-center">Contacto</h2>

    <form class="formulario">
      <fieldset>
        <legend>Tus datos</legend>
        <div class="campo">
          <label for="nombre">Nombre: </label>
          <input id="nombre" type="text" placeholder="Nombre" required />
        </div>
        <div class="campo">
          <label for="asunto">Asunto: </label>
          <input id="asunto" type="text" placeholder="Asunto" required />
        </div>
        <div class="campo">
          <label for="email">Telèfono: </label>
          <input id="email" type="email" placeholder="Email" required />
        </div>
        <div class="campo">
          <label for="telefono">Telèfono: </label>
          <input id="telefono" type="tel" placeholder="Telefono" />
        </div>
        <div class="campo">
          <label for="mensaje">Mensaje: </label>
          <textarea
            name="mensaje"
            id="mensaje"
            cols="30"
            rows="10"
            required
          ></textarea>
        </div>
      </fieldset>
      <fieldset>
        <legend>País</legend>
        <div class="campo">
          <label for="pais">País</label>
          <select name="pais" id="pais">
            <option value="" disabled>--Seleccione--</option>
            <option value="MX">México</option>
            <option value="CO">Colombia</option>
            <option value="PE">Perú</option>
            <option value="AR">Argentina</option>
            <option value="CL" selected>Chile</option>
          </select>
        </div>
      </fieldset>

     

      <input class="btn" type="submit" value="Enviar Formulario" />
    </form>
  </main>
    )
}

export default Contacto