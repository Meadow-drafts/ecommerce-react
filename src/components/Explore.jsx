import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import { products } from "../data/productsData";
import ProductDetail from "./Product/ProductDetail";
import ProductCard from "./Product/ProductCard";

function Explore() {
  const [rating, setRating] = useState(2);

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
  };
  const handleReset = () => {
    // Set the initial value
    setRating(2.5);
  };

  return (
    <>
      <section id="latest" class="">
        <div class="container px-2 py-24 mx-auto">
          <div className="flex justify-between">
            <h3 className="text-left mb-5 text-2xl font-semibold text-black">
              Explore our Products
            </h3>
            <div className="flex">
              <Link to="/trending">
                <h3 className="text-right mb-5 text-l font-semibold text-black">
                  View all products
                </h3>
              </Link>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3.5}
                stroke="currentColor"
                className="w-6 h-4 mt-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </div>
          </div>

          <div class="flex flex-wrap -m-4">
            {products.map((item, index) => (
              <div
                key={item.id}
                className="lg:w-1/6 md:w-1/3 p-4   w-full sm:w-1/3 "
                style={{ cursor: "pointer" }}
              >
                <Link to={`/product/${item.id}`}>
                  <ProductCard item={item} />

                    <div className="-mt-10 ">
                      <Rating
                        onClick={handleRating}
                        initialValue={rating}
                        size={16}
                        style={{ transform: "rotate(90deg)" }}
                      />
                    </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Explore;
