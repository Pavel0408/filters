Фильтр принимает параметры:


  filters={mappedFilters} - array of objects
    {
      field: string,  filter name
      displayName: string,  filter name for user
      conditions: object,  conditions current filter
        Object with key:value 
          equalsTo: { // name
            displayName: string, // name for user
            hasValue: boolean // need show value element
          },
      Element: ReactElement,  value Element
      Element recive props:
         handleChange - event handler function
         value - value current filter 
    }




  activeFilters: array, selected filters

  
  handleFilterChange: fn // handler change current filter, recive params 
    {
      field: string, field that changes
      value: string, value filter 
      id: number, id in activeFilters array
    } 
  
  handleAddFilter: fn // handler add filter
  
  handleRemoveFilter: fn // handler remove filter, recive params 
    {
      id: number, id in activeFilters array 
    }
  
  handleSubmit: fn // handler submit