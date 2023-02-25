import styled from "styled-components";

export const ContainerHome = styled.main`
    display: flex;
    flex-direction: column;
    padding: 0 1vw 0 1vw;
    margin-top: 5vh;
    width: 70%;
`

export const DivSelectionOrdination = styled.div`
    display: flex;
`
export const SelectOrdination = styled.select`
`

export const Navigating = styled.nav`
    display: flex;
    justify-content: space-between;
`

export const Lable = styled.label`
`

export const Cards = styled.section`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 5vh;
    column-gap: 5vh;
    align-self: center;
    margin-top: 8vh;
`
