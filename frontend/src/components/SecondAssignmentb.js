import React from "react";
import "./Products.css"; 

export default function SecondAssignmentb() {
  const shirts = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    name: `Shirt ${i + 1}`,
    image:
      "https://cdn1.vectorstock.com/i/1000x1000/52/50/cartoon-black-short-sleeve-men-shirt-vector-29565250.jpg",
    price: `$${(10 + i).toFixed(2)}`,
    description: "Comfortable cotton shirt with a stylish design.",
  }));

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center p-6">
      <div className="products-container">
        {shirts.map((shirt) => (
          <div
            key={shirt.id}
            className="product-card"
          >
            <img 
              src={shirt.image} 
              alt={shirt.name} 
              className="product-image" 
              style={{ maxHeight: "120px", width: "auto" }} 
            />
            <h3>{shirt.name}</h3>
            <p className="description">{shirt.description}</p>
            <p className="price" style={{ color: "#2a9d8f", fontWeight: "bold" }}>{shirt.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}