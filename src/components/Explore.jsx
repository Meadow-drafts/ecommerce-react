import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import { trends } from "../data/trendingData";
import { products } from "../data/productsData";

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
              >
                <div className="p-2">
                  <a class="block relative h-48 rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      class="object-cover object-center w-full h-full block"
                      src={item.img}
                    />
                  </a>
                 
                  {/* set initial value */}

                  <div className="flex justify-between mt-2">
                    <h2 class="text-gray-900 title-font text-sm font-medium">
                      {item.title}
                    </h2>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                      />
                    </svg>
                  </div>
                  <h2 class="text-orange-600 title-font text-left text-sm font-bold">
                    $ {item.price}
                  </h2>
                 
                    <div className="-mt-7 ">
                    <Rating
                      onClick={handleRating}
                      initialValue={rating}
                      size={16}
                      style={{ transform: "rotate(90deg)", }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Explore;
