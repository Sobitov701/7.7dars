import React from "react";
import ProductList from "./componest/ProductList";

function App() {
  return (
    <div>
      <h2 className="font-bold border-b-2 border-black/20 text-5xl py-3 text-center">
        Product List
      </h2>
      <ProductList />
    </div>
  );
}

export default App;
