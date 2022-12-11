import React from "react";

interface InputProps {
  name?: string | any;
  type?: string | any;
  id?: string | any;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  labelName?: any;
  value?: any;
  placeholder: string;
}

const InputField: React.FC<InputProps> = (props) => {
  const { name, type, id, onChange, labelName, value, placeholder } = props;
  return (
    <>
      <label htmlFor={labelName}>{labelName}</label>
      <br />
      <input
        type={type}
        name={name}
        id={id}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        autoComplete="off"
      />
    </>
  );
};

export default InputField;
