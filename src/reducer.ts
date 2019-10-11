import {
  GET_ALL_FILTERS_SUCCESS,
  ADD_FILTER_TO_ACTIVE_FILTERS,
  REMOVE_FILTER_FROM_ACTIVE_FILTERS,
  CHANGE_FILTER_IN_ACTIVE_FILTERS,
  PAGE_GET_SUCCESS
} from "./actions/const";

const newFilter = {
  column: "",
  condition: "",
  value: "",
};

const defaultState = {
  config: [],
  filters: {}
};
const guid = () => {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  return (`${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`);
};

const filterReducer = (state: any = defaultState, action: any) => {
  switch (action.type) {
    case PAGE_GET_SUCCESS: {
      const newFilters = { ...state.filters };
      newFilters[action.payload] = [{...newFilter, key: guid()}]
      
      return {
        ...state,
        filters: newFilters
      };
    }

    case GET_ALL_FILTERS_SUCCESS:
      return {
        ...state,
        config: action.payload
      };

    case ADD_FILTER_TO_ACTIVE_FILTERS:

        


      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload.name]:  [
              ...state.filters[action.payload.name],
              {...newFilter, key: guid()}
            ]
        }
      };

    case REMOVE_FILTER_FROM_ACTIVE_FILTERS:
      const newActiveFilters = [
        ...state.filters[action.payload.name]
      ];
      delete newActiveFilters[action.payload.id];
      const newActiveFiltersFiltered = newActiveFilters.filter(Boolean);
      if (!newActiveFiltersFiltered.length)
        newActiveFiltersFiltered.push({...newFilter, key: guid()});

      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload.name]: newActiveFiltersFiltered
          
        }
      };

    case CHANGE_FILTER_IN_ACTIVE_FILTERS:
      const { id, field, value, name } = action.payload;
      const newFilters: object[] = [...state.filters[name]];
      const changedFilter = { ...newFilters[id] };
      changedFilter[field] = value;
      newFilters[id] = changedFilter;

      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: newFilters
        }
      };

    default:
      return state;
  }
};

export { filterReducer };
