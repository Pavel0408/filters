import React, { useRef } from "react";
import {
  Select,
  SelectOption,
  FilterField,
  Button
} from "./styled";



export const FilterRowWrapper = React.memo(({
  filters,
  filter,
  handleDelete,
  id,
  handleFilterChange
}) => {

  const filterRef = useRef(null);
  console.log(filterRef.current)
  const handleChange = (value, field) => {
    handleFilterChange({ field, value, id });
    if (field === "column") {
      handleFilterChange({ field: "condition", value: "", id });
      const filter = filters.find(f => f.field === value);
      
      // const { conditions, Element } = filters.find(f => f.field === value);
      // handleFilterChange({ field: "conditions", value: conditions, id });
      // handleFilterChange({ field: "Element", value: Element, id });

      filterRef.current = filter;

    }
  };

  // console.log(filterRef.current)

  const Element  = filterRef.current ? filterRef.current.Element : null;
  const conditions = filterRef.current ? filterRef.current.conditions : null;
  console.log(filterRef)

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
          {conditions &&
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
      {filter.condition && conditions[filter.condition].hasValue && (
          <Element
            handleChange={(value) => handleChange(value, "value")}
            value={filter.value}
            key={filter.column}
          />
        )}
      </FilterField>

      <Button onClick={handleDelete}>Delete</Button>
    </div>
  );
});
