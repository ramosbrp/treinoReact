import React, { useEffect, useState } from 'react';
import * as S from './styled';
import { useHistory } from 'react-router-dom';

export default function Repositories(props) {
    const history = useHistory();
    // Instanciando repositories como array vazio
    const [ repositories, setRepositories ] = useState([]);

    useEffect ( () => {
        // Pegando itens do storage
        let repositoriesName = localStorage.getItem('repositoriesName');
        if(repositoriesName != null) {
            // Convertendo pra JSON
        repositoriesName = JSON.parse(repositoriesName);
        setRepositories (repositoriesName);
        localStorage.clear();
        } else {
            history.push('/');
        }
        
    }, [] );

    return(
        <S.Container>
            <S.Title>Repositórios</S.Title>
            <S.List>
                { repositories.map(repository => {
                    return (
                        <S.ListItem> Repositório: { repository } </S.ListItem>
                    )
                }) }
            </S.List>
            <S.LinkHome to="/">Voltar</S.LinkHome>
        </S.Container>
    );
};

