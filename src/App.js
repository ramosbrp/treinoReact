import React, { useState } from 'react';

function App(props) {
  // const [ usuario, setUsuario ] = useState('Bruno');

  return (
    <>
      {/* <h1>{ props.title } { props.user } </h1> */}
      <p> { usuario } </p>
      <input placeholder="usuário" className="usuarioInput" name="usuario" id="usuario" ></input>
      <button type="button" >Pesquisar</button>
    </>
  );
}

export default App;
