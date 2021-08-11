import React, { useState } from 'react';

function App(props) {
  const [ contagem, setContagem ] = useState( 0 );

  const aumentar = () => {
    setContagem( contagem + 1 );
  };

  return (
    <>
      {/* <h1>{ props.title } { props.user } </h1> */}
      {/* <p> { usuario } </p> */}
      <p> { props.soma } </p>
      <input placeholder="usuário" className="usuarioInput" name="usuario" id="usuario" ></input>
      <button type="button" >Pesquisar</button>
      <div> { contagem } </div>
      <button onClick= { aumentar } >Clique para aumentar</button>
    </>
  );
}

export default App;
