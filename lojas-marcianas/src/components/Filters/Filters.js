import { TextBox, ContainerFilters } from "./filtersStyle"

export const Filters = (props) => {

    return (
        <ContainerFilters>
            <TextBox id="minValue" placeholder={"Mínimo"} onChange={props.onChangeSetFilters} />
            <TextBox id="maxValue" placeholder={"Máximo"} onChange={props.onChangeSetFilters} />
        </ContainerFilters>
    )
}