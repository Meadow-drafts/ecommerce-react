import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/productsData';

function ProductDetail({ match }) {
  const { productId } = match.params;
  const product = products.find((item) => item.id === productId);

  if (!product) {
    // Handle the case where the product is not found
    return (
      <div className="container mx-auto p-4">
        <p className="text-center text-2xl font-semibold text-red-600">
          Product not found
        </p>
        <div className="text-center mt-4">
          <Link to="/" className="text-blue-600 hover:underline">
            Back to Explore
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center">
        <div className="max-w-screen-md p-4 bg-white shadow-md rounded-lg">
          <div className="mb-4">
            <img
              src={product.img}
              alt={product.title}
              className="object-cover object-center w-full h-64 rounded-lg"
            />
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-900">{product.title}</h2>
            <p className="text-gray-600 text-sm mb-4">{product.description}</p>
            <p className="text-orange-600 text-lg font-bold">${product.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
