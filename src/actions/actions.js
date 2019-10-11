import {
  GET_ALL_FILTERS_SUCCESS,
  ADD_FILTER_TO_ACTIVE_FILTERS,
  REMOVE_FILTER_FROM_ACTIVE_FILTERS,
  CHANGE_FILTER_IN_ACTIVE_FILTERS,
  REQUEST_DATA_WITH_FILTERS,
  OPEN_FILTERS
} from "./const";

export function getAllFiltersSuccess(payload) {
  return {
    type: GET_ALL_FILTERS_SUCCESS,
    payload
  };
}

export function changeFilterInActiveFilters(payload) {
  //payload {field: "type", value: "String", id: 0}
  return {
    type: CHANGE_FILTER_IN_ACTIVE_FILTERS,
    payload
  };
}
export function addFilterToActiveFilters(payload) {
  // add default obj newFilter
  return {
    type: ADD_FILTER_TO_ACTIVE_FILTERS,
    payload
  };
}

export function removeFilterFromActiveFilters(payload) {
  // payload: id: number, gridName: String
  return {
    type: REMOVE_FILTER_FROM_ACTIVE_FILTERS,
    payload
  };
}

export function requestDataWithFilters(payload) {
  //payload: filters array
  console.log("request width filters: ", payload);
  return {
    type: REQUEST_DATA_WITH_FILTERS,
    payload
  };
}

export function openFilters(payload) {
  //payload: page name : String
  return {
    type: OPEN_FILTERS,
    payload
  };
}
