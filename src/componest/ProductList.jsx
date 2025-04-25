// src/components/ProductList.jsx
import React from "react";
import ProductCard from "./ProductCard";
import { useGetProductsQuery } from "../services/productsApi";

function ProductList() {
  const { data: products, error, isLoading } = useGetProductsQuery();

  // Agar yuklanayotgan bo'lsa
  if (isLoading)
    return <div className="text-center py-4">Loading products...</div>;

  // Agar xato yuzaga kelsa
  if (error)
    return (
      <div className="text-center text-red-500 py-4">
        Error: {error.message}
      </div>
    );

  return (
    <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {products &&
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );
}

export default ProductList;
