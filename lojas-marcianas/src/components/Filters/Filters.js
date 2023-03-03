import { Title, Ticket, TextBox, ContainerFilters } from "./filtersStyle"

export const Filters = (props) => {

    return (
        <ContainerFilters>
            <Title>Filtros</Title>
            <Ticket htmlFor="minValue">Filtro Mínimo:</Ticket>
            <TextBox id="minValue" onChange={props.onChangeSetFilters} />
            <Ticket htmlFor="maxValue">Filtro Máximo:</Ticket>
            <TextBox id="maxValue" onChange={props.onChangeSetFilters} />
            <Ticket htmlFor="nameProduct">Buscar por nome:</Ticket>
            <TextBox id="nameProduct" onChange={props.onChangeSetFilters} />
        </ContainerFilters>
    )
}