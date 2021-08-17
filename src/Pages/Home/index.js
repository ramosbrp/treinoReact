import React, { useState } from 'react';
import axios from 'axios';
import * as S from './styled';
import { useHistory } from 'react-router-dom';

export default function App(props) {
  const history = useHistory();
  // Capturando usuário
  const [ usuario, setUsuario ] = useState('');
  const [ erro, setErro ] = useState(false);
  function handlePesquisa() {
    axios.get(`https://api.github.com/users/${ usuario }/repos`)
    .then(response => {
      const repositories = response.data;
      const repositoriesName = [];
      repositories.map((repository) => {
        repositoriesName.push(repository.name);
      });
      // Armazendando no Storage e convertendo pra string
      localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
      // Renderizando
      history.push('/repositories');
    })
    .catch(err => {
      setErro(true);
    });
  };

  return (
    <>
      <S.HomeContainer>
        <S.Content>
          <S.Input placeholder="usuário"  name="usuario" value={ usuario } onChange={ 
          e => setUsuario(e.target.value) } ></S.Input>
          <S.Button type="button" onClick={ handlePesquisa } >Pesquisar</S.Button>
          { erro ? <S.ErrorMsg>Ocorreu um erro. Tente novamente.</S.ErrorMsg> : "" }
        </S.Content>
      </S.HomeContainer>
    </>
  );
};

