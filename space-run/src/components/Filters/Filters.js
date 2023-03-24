import { ImputValue, ContainerFilters, QuantityResults, Lable, SelectOrdination, OptiosOrdinatin, Order, FilterValues, Line, ButtonClear } from "./filtersStyle"

export const Filters = (props) => {
    const { filters, onChangeSetFilters, toCleanFilters } = props

    const verifyFilters = () => {
        let result = false

        for (const value of Object.values(filters)) {
            if (value) {
                result = true
            }
        }

        if(props.order){
            result = true
        }
        
        return result
    }

    console.log(verifyFilters())
    return (
        <ContainerFilters>

            <Order>
                <Lable htmlFor="ordination">Ordem:</Lable>
                <SelectOrdination id='ordination' value={props.order} onChange={props.onChangeValueSelect}>
                    <OptiosOrdinatin value={''} disabled>Selecione</OptiosOrdinatin>
                    <OptiosOrdinatin value={'crescent'}>Crescente</OptiosOrdinatin>
                    <OptiosOrdinatin value={'decrescent'} >Decrescente</OptiosOrdinatin>
                </SelectOrdination>
            </Order>

            <FilterValues>
                <Lable>Valor:</Lable>
                <ImputValue id="minValue" placeholder={"Mínimo"} onChange={onChangeSetFilters} value={filters.minValue} type="number" />
                <Line/>
                <ImputValue id="maxValue" placeholder={"Máximo"} onChange={onChangeSetFilters} value={filters.maxValue} type="number" />
                
            </FilterValues>
            <ButtonClear onClick={toCleanFilters} disabled={!verifyFilters()} >Limpar Filtros</ButtonClear>
            <QuantityResults>Quantidade de Produtos: {props.quantityResult} </QuantityResults>

        </ContainerFilters>
    )
}