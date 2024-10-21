import React from "react";
import * as S from "./stylemain"

import LogoWandinha from "../../public/Img/logoWandinha.png"
import Idade from "../../public/Img/16.png"
import Play from "../../public/Img/play.png"
import Star from "../../public/Img/Star.png"

import Castelo from "../../public/Img/casteloanimado.png"
import Naruto from "../../public/Img/naruto.png"
import Avengers from "../../public/Img/avengers.png"
import Avatar from "../../public/Img/avatar.png"
import Enola from "../../public/Img/enola.png"

function Main(){
    return(
        <>
        <S.Main>
        <S.BOXMAE>
        <S.Box1><img src={LogoWandinha} alt="" />
        <S.Group>
            <h4>Séries de Mistério  • 2022  •</h4>
            <img src={Idade} alt="" />
        </S.Group>
        <S.Caixap>
        <p>Inteligente, sarcástica e apática, Wandinha Addams pode estar meio morta por dentro, mas na Escola Nunca Mais ela vai fazer amigos, inimigos e investigar assassinatos. 
        Assista o quanto quiser. Tim Burton dirige esta série sombria e divertida estrelada por Jenna Ortega (Você).</p>
        </S.Caixap>
        </S.Box1>
        <S.BoxButton>
            <S.Button1> <img src={Play} alt="" /> Assistir</S.Button1>
            <S.Button2> <img src={Star} alt="" /> Adicionar aos Favoritos</S.Button2>
        </S.BoxButton>
        </S.BOXMAE>

        <S.BOXMAE2>
        <S.Caixadiv>
            <h2>Continue Assistindo</h2>
        </S.Caixadiv>
        <S.CaixadeImagens>
        <img src={Castelo} alt="" />
        <img src={Naruto} alt="" />
        <img src={Avengers} alt="" />
        <img src={Avatar} alt="" />
        <img src={Enola} alt="" />
        </S.CaixadeImagens>
        <S.CaixaText>
            <h2>Filmes de Terror</h2>
        </S.CaixaText>
        </S.BOXMAE2>
        </S.Main>
        </>
    )
}
export default Main