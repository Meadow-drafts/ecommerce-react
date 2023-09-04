import React, { useState } from 'react'
import { Outlet, Link } from "react-router-dom";
import { Rating } from 'react-simple-star-rating'

export const trends = [
    {
        id: "drou-watch",
        title: "Drou watch with ultra",
        img: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png",
        price: "70.00",
    },
    {
        id: "drou-book",
        title: "Droubook space gray",
        img: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png",
        price: "80.00",

    },
    {
        id: "homepod",
        title: "Homepod mini 2022",
        img: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png",
        price: "39.00",

    },
    {
        id: "charger",
        title: "DroSafe Charger",
        img: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png",
        price: "65.00",

    },
    {
        id: "entertainment",
        title: "Home entertainment",
        img: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png",
        price: "79.00",

    },
    // {
    //     id: "bag",
    //     title: "Bag",
    //     img: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png",
    //     price:"80.00",

    // },
];


function Latest() {
    const [rating, setRating] = useState(2)

    // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate)
  }

  const handleReset = () => {
    // Set the initial value
    setRating(2.5)
  }
    return (
        <>
            <section id='latest' class="text-gray-600 body-font overflow-hidden">
                <div class="container px-28 py-24 mx-auto">
                    <div className="flex justify-between">
                        <h3 className="text-left mb-5 text-2xl font-semibold text-black">Latest Products</h3>
                        <div className="flex">
                            <Link to='/trending'>
                            <h3 className="text-right mb-5 text-l font-semibold text-black">View all products</h3>
                            </Link>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3.5} stroke="currentColor" className="w-6 h-4 mt-1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>
                        </div>

                    </div>


                    <div class="flex flex-wrap -m-4">
                        {trends.map((item, index) => (
                            <div
                                key={item.id}
                                className="lg:w-1/5 md:w-1/3 p-4   w-full sm:w-1/3 "
                            >
                                <div className="border-2 border-gray-300 p-2">
                                <a class="block relative h-48 rounded overflow-hidden">
                                    <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={item.img} />
                                </a>
                                <div className='-mb-4 '>
                                <Rating onClick={handleRating} initialValue={rating} size={16} style={{transform: 'rotate(90deg)'}} />
                               </div>
                                {/* set initial value */}
   
                                <div class="">
                                    <h2 class="text-gray-900 title-font text-sm font-medium">{item.title}</h2>
                                </div>
                                <h2 class="text-orange-600 title-font text-sm font-bold">$ {item.price}</h2>

                                </div>
                               
                            </div>
                        ))}
                    </div>




                </div>
            </section>
        </>
    );
}

export default Latest;