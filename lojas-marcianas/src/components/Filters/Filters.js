import { TextBox, ContainerFilters, Clean, Lable, SelectOrdination } from "./filtersStyle"

export const Filters = (props) => {
    const { filters, onChangeSetFilters, toCleanFilters } = props

    const verifyFilters = () => {
        let result = false

        for (const value of Object.values(filters)) {
            if (value) {
                result = true
            }
        }

        return result
    }

    return (
        <ContainerFilters>

            <Lable htmlFor='ordination'>Ordenação:</Lable>
            <SelectOrdination id='ordination' value={props.order} onChange={props.onChangeValueSelect}>
                <option value={''} disabled>Selecione</option>
                <option value={'crescent'}>Crescente</option>
                <option value={'decrescent'} >Decrescente</option>
            </SelectOrdination>

            <TextBox id="minValue" placeholder={"Mínimo"} onChange={onChangeSetFilters} value={filters.minValue} type="number" />
            <TextBox id="maxValue" placeholder={"Máximo"} onChange={onChangeSetFilters} value={filters.maxValue} type="number" />
            {verifyFilters() ? <Clean toCleanFilters={toCleanFilters} /> : false}

            <Lable>Quantidade de Produtos: {props.quantityResult} </Lable>

        </ContainerFilters>
    )
}