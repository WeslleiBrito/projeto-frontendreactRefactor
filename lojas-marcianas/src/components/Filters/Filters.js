import { Title, Ticket, TextBox, ContainerFilters } from "./filtersStyle"

export const Filters = (props) => {

    return (
        <ContainerFilters>
            <Title>Filtros</Title>
            <Ticket htmlFor="minimum-filter">Filtro Mínimo:</Ticket>
            <TextBox id="minimum-filter" />
            <Ticket htmlFor="maximum-filter">Filtro Máximo:</Ticket>
            <TextBox id="maximum-filter" />
            <Ticket htmlFor="find-name">Buscar por nome:</Ticket>
            <TextBox id="find-name" />
        </ContainerFilters>
    )
}