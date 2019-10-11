import React, { useEffect } from "react";
import { connect } from 'react-redux';
import {
  Wrapper,
  FilterButton,
  TopPanel,
  WrapperFilters,
  Header,
  HeaderTab,
  BodyWrapper,
  FilterColumn,
  FiltersHeader,
  Button,
  SubmitButton,
} from "./styled";
import FilterRow from './FilterRow'
import {
  changeFilterInActiveFilters,
  addFilterToActiveFilters,
  removeFilterFromActiveFilters,
  requestDataWithFilters,
  openFilters
} from './actions'


interface IFilter {
  field: any;
  displayName: any;
  conditions: any;
  Element: any;
}

interface IOwnProps {
  filters: IFilter[];
  name: string;
  
}

interface IFilterProps {
  filters: IFilter[];
  activeFilters: any;
  handleFilterChange: any;
  handleAddFilter: any;
  handleRemoveFilter: any;
  handleSubmit: any;
  openFilters: any;
  name: string
}

const Filter: React.SFC<IFilterProps> = ({
  filters,
  activeFilters = [],
  handleFilterChange,
  handleAddFilter,
  handleRemoveFilter,
  handleSubmit,
  openFilters,
  name
}: IFilterProps): any => {

  useEffect(() => {
    openFilters()
  }, [])

  return (
    <Wrapper>
      <TopPanel>
        <FilterButton>Filter</FilterButton>
      </TopPanel>
      <WrapperFilters>
        <Header>
          <HeaderTab>Filter</HeaderTab>
          <SubmitButton onClick={() => handleSubmit(activeFilters)} >Submit</SubmitButton>
        </Header>

        <BodyWrapper>
          <FiltersHeader>
            <FilterColumn>Filter name</FilterColumn>
            <FilterColumn>Condition</FilterColumn>
            <FilterColumn>Value</FilterColumn>
          </FiltersHeader>
          {activeFilters.map((filter, id) => {
            return (
              <FilterRow
                id={id}
                filters={filters}
                filter={filter}
                name={name}
                key={filter.key}
              />
            );
          })}

          <Button 
            disabled={activeFilters.find(({ condition }) => !condition)}
            onClick={handleAddFilter}
          >
            Add new filter
          </Button>
        </BodyWrapper>
      </WrapperFilters>
    </Wrapper>
  );
};




const mapStateToProps = (state, ownProps: IOwnProps) => {
  return {
    activeFilters: state.filters[ownProps.name],
    ...ownProps
  }
}

const mapDispatchToProps = (dispatch, { name }: IOwnProps) => {
  return {
    handleFilterChange: (params) => dispatch(changeFilterInActiveFilters({...params, name})),
    handleAddFilter: () => dispatch(addFilterToActiveFilters({name})),
    handleRemoveFilter: (params) => dispatch(removeFilterFromActiveFilters({...params, name})),
    handleSubmit: (params) => dispatch(requestDataWithFilters({...params, name})),
    openFilters: () => dispatch(openFilters(name))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Filter);
