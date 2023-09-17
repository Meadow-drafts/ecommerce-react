
import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'
import { Link } from 'react-router-dom';
import { popular } from '../data/popularData';




function Popular() {

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
           <section id='popular' class="text-gray-600 body-font overflow-hidden">
                <div class="container px-28 py-24 mx-auto">
                    <div className="flex justify-between">
                        <h3 className="text-left mb-5 text-2xl font-semibold text-black">Popular Products </h3>
                        <div className="flex justify-evenly">
                            <h3 className="text-right mb-5 mr-2  font-semibold text-primary">Accessories</h3>
                            <h3 className="text-right mb-5 mr-2 font-semibold text-black">iPhone</h3>
                            <h3 className="text-right mb-5  font-semibold text-black">Laptop</h3>
                            
                        </div>

                    </div>


                    <div class="flex flex-wrap -m-4">
                        {popular.map((item, index) => (
                            <div
                                key={item.id}
                                className="lg:w-1/8 md:w-1/4 p-4   w-full sm:w-1/2 "
                            >
                                <div className=" p-2">
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
                                <h2 class="text-primary title-font text-sm font-bold">$ {item.price}</h2>

                                </div>
                               
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}


export default Popular;