import React, { useState, useEffect } from "react";
import { connect } from 'react-redux'

import {
  Select,
  SelectOption,
  FilterField,
  Button
} from "./styled";
import {
  changeFilterInActiveFilters,
  removeFilterFromActiveFilters,
} from './actions'



const FilterRow = ({
  filters,
  filter,
  handleDelete,
  id,
  handleFilterChange,
}) => {
  
  const [currentFilter, changeCurrentFilter] = useState(null) 

  useEffect(() => {
    if (filter.column && !currentFilter) {
      changeCurrentFilter(filters.find(f => f.field === filter.column))
    }
  })
  

  const handleChange = (value, field) => {
    handleFilterChange({ field, value, id });
    if (field === "column") {
      handleFilterChange({ field: "condition", value: "", id });
    }
  };

  const Element = currentFilter ? currentFilter.Element : null;
  const conditions = currentFilter ? currentFilter.conditions : null;

  console.log('rerender filter id ', id)


  return (
    <div>
      <FilterField>
        <Select
          id="id_select"
          onChange={e => handleChange(e.currentTarget.value, "column")}
        >
          {!filter.condition && (
            <SelectOption selected>Please select...</SelectOption>
          )}
          {filters
            .map(({ displayName, field }) => (
              <SelectOption
                key={displayName}
                value={field}
                selected={filter.column === field}
              >
                {displayName}
              </SelectOption>
            ))}
        </Select>
      </FilterField>

      <FilterField>
        <Select
          id="id_select2"
          onChange={e => handleChange(e.currentTarget.value, "condition")}
          disabled={!filter.column}
        >
          {!filter.condition && (
            <SelectOption selected>Please select...</SelectOption>
          )}
          {filter.column && conditions &&
            Object.entries(conditions).map(
              ([condition, { displayName }]: any) => (
                <SelectOption
                  selected={filter.condition === condition}
                  key={displayName}
                  value={condition}
                >
                  {displayName}
                </SelectOption>
              )
            )}
        </Select>
      </FilterField>
        <FilterField>
      {Element && filter.condition && conditions[filter.condition].hasValue && (
          <Element
            handleChange={(value) => handleChange(value, "value")}
            value={filter.value}
            key={filter.column}
          />
        )}
      </FilterField>

      <Button onClick={() => handleDelete({ id })}>Delete</Button>
    </div>
  );
};



const mapDispatchToProps = (dispatch, { name }: any) => {
  return {
    handleFilterChange: (params) => dispatch(changeFilterInActiveFilters({...params, name})),
    handleDelete: (params) => dispatch(removeFilterFromActiveFilters({...params, name})),
  }
}

export default connect(null, mapDispatchToProps)(FilterRow)