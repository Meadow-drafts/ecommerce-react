import { flashsales } from "../data/flashsalesData";
import Button from "./Buttons/Button";
import ProductCard from "./Product/ProductCard";

function FlashSales() {
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-2 pt-20 mx-auto">
          <div className="flex ">
            <h3 className="text-left mb-5 text-2xl font-semibold text-black">
              Flash Sales
            </h3>
            <div className="flex px-5">
              <div className=" md:mx-2 sm:mx-2 xs:mx-2 p-2 flex flex-col items-center">
                <p className="text-xs">Days</p>
                <p className="font-bold text-xl">310</p>
              </div>
              <div className=" md:mx-2 sm:mx-2 xs:mx-2 p-2 flex flex-col items-center">
                <p className="text-xs">Hours</p>
                <p className="font-bold text-xl">02</p>
              </div>
              <div className="md:mx-2 sm:mx-2 xs:mx-2 p-2 flex flex-col items-center">
                <p className="text-xs">Minutes</p>
                <p className="font-bold text-xl">09</p>
              </div>
              <div className="md:mx-2 sm:mx-2 xs:mx-2 p-2 flex flex-col items-center">
                <p className="text-xs">Seconds</p>
                <p className="font-bold text-xl">02</p>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap -m-4">
            {flashsales.map((item, index) => (
              <div
                key={item.id}
                className="lg:w-1/6 md:w-1/3 p-4   w-full sm:w-1/3 "
              >
                <ProductCard item={item} />

              </div>
            ))}
          </div>
          <Button>See more..</Button>
        </div>
      </section>
    </>
  );
}
export default FlashSales;
