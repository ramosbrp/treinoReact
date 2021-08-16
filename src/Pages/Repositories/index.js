import React, { useEffect, useState } from 'react';
import * as S from './styled';

export default function Repositories() {
    const [ repositories, setRepositories ] = useState([]);

    useEffect ( () => {
        let repositoriesName = localStorage.getItem('repositoriesName');
        repositoriesName = JSON.parse(repositoriesName);
        console.log(repositoriesName);
        setRepositories (repositoriesName);
    }, [] );
    return(
        <S.Container>
            <S.Title>Repositórios</S.Title>
            <S.List>
                <S.ListItem>Repositório: Nome Repositório</S.ListItem>
                <S.ListItem>Repositório: Nome Repositório</S.ListItem>
                <S.ListItem>Repositório: Nome Repositório</S.ListItem>
                <S.ListItem>Repositório: Nome Repositório</S.ListItem>
                <S.ListItem>Repositório: Nome Repositório</S.ListItem>
                <S.ListItem>Repositório: Nome Repositório</S.ListItem>
                <S.ListItem>Repositório: Nome Repositório</S.ListItem>
                <S.ListItem>Repositório: Nome Repositório</S.ListItem>
                <S.ListItem>Repositório: Nome Repositório</S.ListItem>
                <S.ListItem>Repositório: Nome Repositório</S.ListItem>
            </S.List>
        </S.Container>
    );
};



