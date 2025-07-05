"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function CategoryPage() {
  const [products, setProducts] = useState([]);
  console.log(products);

  useEffect(() => {
    fetch("/api/categories")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data); // Optional: দেখতে পারেন কী আসছে
        setProducts(data.data); // যদি "products" নামে আসছে
      })
      .catch((err) => {
        console.error("Error loading products:", err);
      });
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Category List</h1>
      <ul className="grid gap-4 grid-cols-2 lg:grid-cols-8">
        {products.map((product) => (
          <li key={product.id} className="border p-4 rounded shadow">
            <h2 className="text-[20px] font-semibold">{product.name}</h2>
            <div>
              {product.image && (
                <Image
                  src={product.image}
                  alt={product.name}
                  width={100}
                  height={100}
                />
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
