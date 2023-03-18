import styled from "styled-components";

export const ContainerCart = styled.section`
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 79%;
    top: -6%;
    width: 20%;
    height: 60vh;
    margin: 0 auto; 
    background: #A9A9A9;
    font-family: 'open sans';
    font-size: 0.85em;
    line-height: 1.6em;  
    border-radius: 15px;
    color: #1C1C1C;
    padding: 1.5vw;
    margin-top: 30px;

    ::before{
        content: "";
    width: 0;
    height: 0;
    position: absolute;
    border-left: 3.5vh solid transparent;
    border-right: 3.5vh solid transparent;
    /*Faz seta "apontar para baixo. Definir o valor como 'top' fará ela "apontar para cima" */
    /*Aqui entra a cor da "aba" do balão */
    border-bottom: 3.5vh solid #A9A9A9;
    top: -3vh; /*localização. Experimente alterar para 'bottom'*/
    left: 70%;
    }
`
export const Text = styled.p`
    margin-top: 2vh;
`

export const Itens = styled.aside`
    display: flex;
    flex-direction: column;
`