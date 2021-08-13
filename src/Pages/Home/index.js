import React, { useState } from 'react';
import axios from 'axios';

export default function App(props) {

  const [ usuario, setUsuario ] = useState('');

  function handlePesquisa() {
    axios.get(`https://api.github.com/users/${ usuario }/repos`).then(response => console.log(response.data));
  };

  return (
    <>
      <input placeholder="usuário"  name="usuario" value={ usuario } onChange={ e => setUsuario(e.target.value) } ></input>
      <button type="button" onClick={ handlePesquisa } >Pesquisar</button>
    </>
  );
};

