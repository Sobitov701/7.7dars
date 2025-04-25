// src/components/ProductCard.jsx
import React from "react";

function ProductCard({ product }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
      {/* Tasvir va narxni ajratib ko'rsatish */}
      <div className="relative">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-40 object-cover rounded-lg mb-4" // Rasmni kichiklashtirish uchun h-40 qo'shildi
        />
        {/* Narxni yuqorida ko'rsatish */}
        <div className="absolute top-4 left-4 bg-black text-white py-1 px-4 rounded-lg">
          ${product.price}
        </div>
      </div>

      {/* Maxsulot nomi */}
      <h3 className="text-lg font-semibold text-gray-800 mb-2">
        {product.title}
      </h3>

      {/* Maxsulot tavsifi */}
      <p className="text-sm text-gray-600 mb-4 line-clamp-3">
        {product.description}
      </p>

      {/* Tugma */}
      <button className="bg-green-600 text-white py-2 px-4 rounded-full hover:bg-green-700 transition-colors duration-200 w-full">
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
