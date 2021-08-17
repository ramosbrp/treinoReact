import React, { useEffect, useState } from 'react';
import * as S from './styled';
import { Link } from 'react-router-dom';

export default function Repositories(props) {
    // Instanciando repositories como array vazio
    const [ repositories, setRepositories ] = useState([]);

    useEffect ( () => {
        // Pegando itens do storage
        let repositoriesName = localStorage.getItem('repositoriesName');
        // Convertendo pra JSON
        repositoriesName = JSON.parse(repositoriesName);
        setRepositories (repositoriesName);
        // localStorage.clear();
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
            <Link to="/">Voltar</Link>
        </S.Container>
    );
};

