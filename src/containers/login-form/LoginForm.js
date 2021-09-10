import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { userLogin } from "../../store/login/actions"; 

export const LoginForm = ({ isLoading }) => {
  let loadingUsers = useSelector(state=>state.users.loadingUsers);
  const history = useHistory();
  const [form, setForm] = useState({
    username: "",
    password: "",
    email2: "email2",
  });
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const target = event.target;
    setForm({
      ...form,
      [target.name]: target.value,
    });
  };

  const cb = () => history.push("/");

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(userLogin(form, cb));
  };

  return (
    


    <form noValidate autoComplete="off" onSubmit={handleSubmit} className="formulario">
 

      <fieldset>
        <legend>Acceso</legend>
      <div className="campo">
        <label >Nombre: </label>
        <input
          id="username"
          name="username"
          className="form-control username"
          placeholder="username"
          onChange={handleInputChange}
          value={form.username}
        />
      </div>

      <div className="campo">
        <label >Password: </label>        
        <input
          id="password"
          name="password"
          className="form-control"
          placeholder="Password"
          type="password"
          onChange={handleInputChange}
          value={form.password}
        />
      </div>
      </fieldset>

      <div className="card">
        <button
          id="buttonSubmit"
          className="btn btn-primary"
          color="primary"
          disabled={loadingUsers}
          type="submit"
        >
          {loadingUsers ? "Loading..." : "Enviar"}
        </button>
      </div>
    </form>
  ); 
};
