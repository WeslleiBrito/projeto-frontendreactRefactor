import styled from 'styled-components'
import clearFilter from '../../assets/icons/clearFilter.svg'

export const ContainerFilters = styled.section`
    display: flex;
    flex-direction: column;
    height: 30vh;
    width: 17vw;
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    margin-left: 1vw;
    margin-top: 4vh;
`

export const Titles = styled.div``

export const CleanFilter = (props) => {
    const styleClean = {
        width: '5vh',
        height: '5vh'
    }

    return <img src={clearFilter} style={styleClean} alt="Limpar Filtro" onClick={props.toCleanFilters} />
}

export const ImputValue = styled.input`
    width: 11.6vh;
    height: 4vh;
    outline: none;
    padding-left: 0.5vw;
    border-radius: 0.3em;
    border: none;
`

export const Order = styled.div`
    display: flex;
    align-items: center;
`

export const SelectOrdination = styled.select`
    width: 12vw;
    height: 4vh;
    outline: none;
    border-radius: 0.3em;
    border: none;
`

export const Lable = styled.label`
    width: 4vw;
`
export const OptiosOrdinatin = styled.option`
    text-align: center;
`
export const FilterValues = styled.div`
    display: flex;
    align-items: center;
    margin-top: 2vh;
    margin-bottom: 3vh;
`
export const Line = styled.hr`
    width: 0.5vw;
    height: 0.5vh;
    margin-left: 0.3vw;
    margin-right: 0.3vw;
    background-color: black;
    border: none;
`

export const ButtonClear = styled.button`
    display: flex;
    align-self: center;
    background-image: url(${clearFilter});
    background-repeat: no-repeat;
    background-size: 4vh;
    background-position: left; 
    width: 10vw;
    height: 5vh;
    font-weight: 800;
    text-align: center;
    padding-left: 1.5vw;
    border: none;
    box-shadow: 0 0 1.5vh 0 rgba(0, 0, 0, 0.5);
    align-items: center;
    justify-content: center;
    background-color: silver;
    border-radius: 0.5em;
    transition: background-color 0.5s ease;
    margin-left: 1vw;

    &:hover{
        background-color: rebeccapurple;
        color: white;
    }
    
`

export const QuantityResults = styled.h3`
    display: flex;
    align-items: center;
    height: 8vh;
    font-size: 0.95em;
  
`