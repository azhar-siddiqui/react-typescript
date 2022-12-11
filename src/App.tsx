import React, { useState } from "react";
import Button from "./components/Button";

interface Book {
  name: string;
  price: number;
}

// Explicite casting useState hook
function App() {
  const [value, setValue] = useState<Book>({
    name: "geo",
    price: 10,
  });
  return (
    <div className="App">
      <p>
        {value.name} {value.price}
      </p>
      <Button
        onClick={() => {
          setValue({ name: "alma", price: 520 });
        }}
        btnText="Click Here"
      />
      <Button btnText="Click Here" />
    </div>
  );
}

export default App;
