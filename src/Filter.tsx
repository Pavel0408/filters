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
import { FilterRowWrapper } from './filterRowWrapper'
import {
  changeFilterInActiveFilters,
  addFilterToActiveFilters,
  removeFilterFromActiveFilters,
  requestDataWithFilters,
  pageGetSuccess
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
  resetFiltersEveryMount: boolean
}

interface IFilterProps {
  filters: IFilter[];
  activeFilters: any;
  handleFilterChange: any;
  handleAddFilter: any;
  handleRemoveFilter: any;
  handleSubmit: any;
  pageGetSuccess: any;
  resetFiltersEveryMount: boolean
}

const Filter: React.SFC<IFilterProps> = ({
  filters,
  activeFilters = [],
  handleFilterChange,
  handleAddFilter,
  handleRemoveFilter,
  handleSubmit,
  pageGetSuccess,
  resetFiltersEveryMount = false
}: IFilterProps): any => {

  useEffect(() => {
    if (resetFiltersEveryMount) {
      pageGetSuccess()
    } else {
      if (!activeFilters.length) pageGetSuccess() 
    }
  }, [activeFilters.lenght])

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
              <FilterRowWrapper
                id={id}
                handleFilterChange={handleFilterChange}
                handleDelete={() => handleRemoveFilter({ id })}
                filters={filters}
                filter={filter}
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
    handleAddFilter: (params) => dispatch(addFilterToActiveFilters({...params, name})),
    handleRemoveFilter: (params) => dispatch(removeFilterFromActiveFilters({...params, name})),
    handleSubmit: (params) => dispatch(requestDataWithFilters({...params, name})),
    pageGetSuccess: () => dispatch(pageGetSuccess(name))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Filter);
