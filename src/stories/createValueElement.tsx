import React from "react";
import { Select, SelectOption } from "../styled";
import DatePicker  from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";





const Input = ({handleChange, value}) => <input style={{width: "100%"}} value={value}  onChange={e => handleChange(e.target.value)} />

const DictionarySelector = ({name, dictionaries, value, handleChange}) => {
  return ( 
    <Select
      onChange={e => handleChange(e.target.value)}
      >
        {!value && (
          <SelectOption selected>Please select...</SelectOption>
        )}
      {dictionaries[name] && dictionaries[name].map(({ id, name }) => (
          <SelectOption
            key={id}
            value={id}
            selected={+value === id}
          > 
            {name}
          </SelectOption>
      ))}
    </Select>
  )
} 

const BooleanSelector = ({ handleChange, value }) => {
  return ( 
    <Select
      onChange={handleChange}
      >
        {!value && (
          <SelectOption selected>Please select...</SelectOption>
        )}
          <SelectOption
            key={'yes'}
            value={'yes'}
          > 
            Yes
          </SelectOption>
          <SelectOption
            key={'no'}
            value={'no'}
          > 
            No
          </SelectOption>
    </Select>
  )
}

const DateSelector = ({ handleChange, value }) => {
  const handleDateChange = (date) => {
    let dd = date.getDate();
    let mm = date.getMonth() + 1; //January is 0!
    let yyyy = date.getFullYear();
    let hh = date.getHours();
    let MM = date.getMinutes();

    if (mm < 10) mm = '0' + mm;
    if (dd < 10) dd = '0' + dd;

    if (hh < 10) hh = '0' + hh;
    if (MM < 10) MM = '0' + MM;

    const needFormat = `${yyyy}-${mm}-${dd} ${hh}:${MM}`;
    handleChange(needFormat)
  } 

  const getDate = value => {
    if (!value) {
      const defaultValue = new Date() 
      return new Date(defaultValue.getFullYear(), defaultValue.getMonth(), defaultValue.getDate())
    }
    
    const full = value.split(' ');
    const date = full[0].split('-');
    const yyyy = date[0];
    const mm = date[1] - 1;
    const dd = date[2];
    
    const time = full[1].split(':');
    const hh = time[0];
    const MM = time[1];
    return new Date(yyyy, mm, dd, hh, MM)

  }


  return <DatePicker
        selected={getDate(value)}
        showTimeSelect
        onChange={handleDateChange}
        timeFormat="HH:mm"
        timeCaption="time"
        dateFormat="MMMM d, yyyy h:mm aa"
  />
}

export const createElement = ({ name, type, dictionaries }) => {
  switch (type) {
    case 'String':
    case 'Numeric':
    case 'Currency':
      return Input
    case 'Enum':
      return ({handleChange, value}) => DictionarySelector({name, dictionaries, value, handleChange})
    case 'Boolean':
      return BooleanSelector
    case 'Date':
      return DateSelector
    default:
      return Input
  }
}