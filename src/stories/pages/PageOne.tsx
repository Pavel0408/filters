import React from "react";
import Filter from "../../Filter";
import { connect } from "react-redux";
import { conditions } from "../conditions";
import { createElement } from '../createValueElement';
interface IFilter {
  field: any;
  displayName: any;
  conditions: any;
  Element: any;
}

const pageName = 'one';
const PageOne = ({
  filters,
  dictionaries,
}) => {
  const mappedFilters: IFilter[] = filters ? filters.sort((a,b) => a.displayName > b.displayName ? 1 : -1).map(
    ({ field, name, type, displayName }) => {
      return {
        field, // что отправится в редюсер в поле column
        displayName, // выводится пользователю
        conditions: conditions[type], // conditions текущего фильтра
        Element: createElement({name, type, dictionaries}), // элемент для value
      };
    }
  ) : [];
  return (
    <>
    <h1>Page {pageName}</h1>
    <Filter
      filters={mappedFilters}
      name={ pageName }
      resetFiltersEveryMount={ false }
      />
    </>
  );
};



const mapStateToProps = (state) => {
  return {
    filters: state.config.columns,
    dictionaries: state.config.dictionaries,
  };
};

export const PageOneContainer = connect(
  mapStateToProps,
)(PageOne);

