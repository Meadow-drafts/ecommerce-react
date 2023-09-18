import { Link } from "react-router-dom";
import { products } from "../data/productsData";
import Button from "../components/Buttons/Button";

function WishList() {
  return (
    <>
      <section id="latest" class="text-gray-600 body-font overflow-hidden">
        <div class="container px-2 py-24 mx-auto">
          <div className="flex justify-between">
            <h3 className="text-left mb-5 text-2xl font-semibold text-black">
              Wishlist (4)
            </h3>
            <div className="flex">
              <Link to="/trending">
                <h3 className="border-2 border-black p-2 rouded-xl text-right mb-5 text-l font-semibold text-black">
                  Move all to checkout
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
            {products.slice(0, 4).map((item, index) => (
              <div
                key={item.id}
                className="lg:w-1/4 md:w-1/2 p-8   w-full sm:w-1/2 "
              >
                <div className="p-2">
                  <a class="block relative h-48  overflow-hidden -mb-1.5">
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src={item.img}
                    />
                  </a>
                  <Button customClassName="flex  bg-black w-full -mt-2">
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
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                      />
                    </svg>
                    <p className="font-medium">Add to cart</p>
                  </Button>

                  {/* set initial value */}

                  <div className="flex justify-between -mt-2">
                    <h2 class="text-gray-900 title-font text-sm font-medium">
                      {item.title}
                    </h2>
                  </div>
                  <h2 class="text-orange-600 title-font text-left text-sm font-bold">
                    $ {item.price}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default WishList;
