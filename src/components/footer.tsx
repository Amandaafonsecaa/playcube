import React from "react";
import Logo from "../assets/logo-footer.png"

export default function Footer(){
    return(
        <div className="bg-brand-beige flex w-full justify-around pb-[3rem] pt-[3rem]">
            <div>
                <img src={Logo} className="w-[9rem] h-[3rem]" alt="" />
            </div>
            <div className="flex flex-col space-y-2">
                <a href="">Sobre</a>
                <a href="">Contato</a>
                <a href="">Suporte</a>
            </div>
            <div className="flex flex-col space-y-2">
                <a href="">Adicione um Filme</a>
                <a href="">Adicione uma série</a>
                <a href="">Discussões</a>
            </div>
            <div className="flex flex-col space-y-2">
                <a href="">Termos de Uso</a>
                <a href="">Política de Privacidade</a>
                <a href="">Diretrizes</a>
            </div>
        </div>
    )
}