import React, { useState } from "react";
import Button from "./components/Button";
import InputField from "./components/InputField";

function App() {
  const [values, setValue] = useState({
    firstName: "",
    lastName: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    // console.log("name", name);
    // console.log("value", value);
    setValue((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(values);
    setValue({
      firstName: "",
      lastName: "",
    });
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <InputField
          type="text"
          name="firstName"
          id="firstName"
          labelName="First Name"
          placeholder="Enter Your Name"
          value={values.firstName}
          onChange={handleChange}
        />
        <br />
        <InputField
          type="text"
          name="lastName"
          id="lastName"
          labelName="Last Name"
          placeholder="Enter Your Name"
          value={values.lastName}
          onChange={handleChange}
        />
        <br />
        <Button btnText="Click Here" type="submit" />
      </form>
    </div>
  );
}

export default App;
