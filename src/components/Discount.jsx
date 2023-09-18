import { interests } from "./Trending";


function Discount() {
    return (
        <>
            <section className=" ">
                <div class="flex mx-auto w-full md:w-1/2 ">
                    {interests.map((item) => (
                        <div key={item.id} class="p-4 md:w-1/2 w-full">
                        <div class="h-full p-8 rounded">
                            
                            <p class="leading-relaxed font-semibold mb-6">{item.title}</p>
                            <p class="leading-relaxed md:text-2xl lg:text-3xl mb-6">Just Starting At {item.price}</p>
                            <a href="#" className="inline-flex  bg-primary items-center justify-center px-5 py-3 text-base font-medium text-center text-white rounded-full focus:ring-4 focus:ring-gray-800 border-gray-700 hover:bg-gray-700 hover:text-white ">
                            Shop Now
                        </a>
                        <img alt="interest" src={item.img} className="mt-2 h-100" />

                        </div>
                    </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Discount;