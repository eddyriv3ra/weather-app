import React, { ReactElement } from 'react';

type OptionType = {
  id: number;
  value: string;
};

type SelectTypes = {
  options: OptionType[];
  title: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Select = ({ options, title, onChange }: SelectTypes): ReactElement => {
  const renderOptions = options.map(
    (option: OptionType): ReactElement => (
      <option key={option.id} value={option.id}>
        {option.value}
      </option>
    ),
  );

  return (
    <div>
      <select name="citySearch" onChange={onChange}>
        <option>{title}</option>
        {renderOptions}
      </select>
    </div>
  );
};

export default Select;
