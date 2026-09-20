import { useState } from "react";

function App() {
  const [price, setPrice] = useState(50000);

  return (
    <div>
      <h1>Product</h1>
      <h2>Lenovo Laptop</h2>
      <p>Price: ₹{price}</p>

      <button onClick={() => setPrice(price + 1000)}>
        Increase Price
      </button>
    </div>
  );
}

export default App;