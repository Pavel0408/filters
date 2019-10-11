import styled from 'styled-components';

export const Wrapper = styled.div`
  border: 1px solid #a5c2d8;
`

export const WrapperFilters = styled.div`
  background-color: #deedf9;
  min-height: 300px ;  
`

export const Header = styled.div`
  height: 30px;
  /* display: flex; */
  background-color: #eef5fc;

`

export const HeaderTab = styled.button`
  background-color: #eef5fc;
  color: #878787;
  height: 30px ;
  padding: 5px 16px;
  font-size: 12px;
  border: none;
  border-bottom: none;
  border-right: 1px solid #a5c2d8;
  :focus {
    outline: none;
  }
`

export const BodyWrapper = styled.div`
  height: 100%;
  width: 80%;
  min-width: 970px;
  margin: auto;
  margin-top: 30px ;
` 

export const FiltersHeader = styled.div`
  margin-bottom: 5px;
`;

export const FilterColumn = styled.span`
  display: inline-block;
  width: 29%;
  margin: 0 10px;
`;


export const Select = styled.select`
  width: 100%;
`;

export const SelectOption = styled.option``;


export const FilterField = styled.div`
  width: 29%;
  float: left;
  margin: 0 10px;
  height: 1px;
`
export const Button = styled.button`
  height: 20px;
  border-radius: 10px;
  border: none;
  margin: 0 5px;
  padding: 3px 5px 10px 5px ;
  :focus {
    outline: none;
  }
`





export const SubmitButton = styled.button`
  float: right;
  height: 30px;
  padding: 5px 10px;
`

export const FilterButton = styled.button`
  font-size: 14px;
  height: 26px;
  padding: 1px 0;
  line-height: 30px;
  font-size: 14px;
  vertical-align: middle;
  color: #ffffff;
  padding: 0 15px;
  height: 100%;
  border: none;
  background-color: #4db625;
`


export const TopPanel = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  margin-top: 70px ;
  border: 1px solid #c4c4c4;
  background-color: #f7fcef;
`
