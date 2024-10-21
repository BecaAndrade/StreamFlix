import React from "react";
import * as S from "./styleheader"
// importando as img
import Perfil from "../../public/Img/perfil.png"
import Lupa from "../../public/Img/lupa.png"
import Inicio from "../../public/Img/Inicio.png"
import Filmes from "../../public/Img/filmes.png"
import Series from "../../public/Img/Series.png"
import MinhaLista from "../../public/Img/Minhalista.png"
import Configuracoes from "../../public/Img/configuracoes.png"
import Logo from "../../public/Img/Logo.png"

function Header(){
    return(
        <>
        <S.Header>
            <S.Navheader>
                <S.Perfil>
                    <img src={Perfil} alt="foto de perfil do app" />
                </S.Perfil>

                <S.UlHeader>
                    <li><img src={Lupa} alt="" /></li>
                    <S.Inicio><img src={Inicio} alt="" />Inicio</S.Inicio>
                    <S.Filmes><img src={Filmes} alt="" />Filmes</S.Filmes>
                    <S.Series><img src={Series} alt="" />Series</S.Series>
                    <S.MinhaLista><img src={MinhaLista} alt="" />Minha Lista</S.MinhaLista>
                    <S.Configuracoes><img src={Configuracoes} alt="" />Configurações</S.Configuracoes>
                </S.UlHeader>
                <S.Logo>
                    <img src={Logo} alt="" />
                </S.Logo>
            </S.Navheader>
        </S.Header>
        </>
    )
}
export default Header