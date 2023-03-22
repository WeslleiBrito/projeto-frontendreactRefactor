import styled from 'styled-components'
import clear from '../../assets/icons/clear.gif'

export const ContainerFilters = styled.section`
    display: flex;
    width: 100%;
    align-items: center;
    flex-direction: column;
`

export const Titles = styled.div``

export const Clean = (props) => {
    const styleClean = {
        with: '3vh',
        height: '3vh'
    }

    return <img src={clear} style={styleClean} alt="Limpar Filtro" onClick={props.toCleanFilters} />
}

export const TextBox = styled.input`
    width: 12vh;
    height: 4vh;
`

export const SelectOrdination = styled.select`
`

export const Lable = styled.label`
`