import { useState } from 'react';
import Select from 'react-select';
import s from './Select.module.css';

export function customTheme(theme) {
  return {
    ...theme,
    colors: {
      ...theme.colors,
      primary25: '#F5F6FB',
    },
  };
}

export const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: state.isFocused ? '#52555F' : '#C7CCDC',
    paddingLeft: 20,
    paddindRight: 20,
  }),
  singleValue: provided => ({
    ...provided,
    color: '#52555f',
  }),
  control: (base, state) => ({
    ...base,
    border: state.isFocused ? 0 : 0,
    boxShadow: state.isFocused ? 0 : 0,
    '&:hover': {
      border: state.isFocused ? 0 : 0,
    },
  }),
};

export default function Dropdown({ onChange, options, value }) {
  return (
    <Select
      isClearable
      options={options}
      theme={customTheme}
      value={value}
      className={s.dropdown}
      styles={customStyles}
      placeholder="Product category"
      onChange={onChange}
    />
  );
}
