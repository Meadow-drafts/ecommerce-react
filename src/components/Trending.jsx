import { trends } from "../data/trendingData";


export const interests = [
    {
        id: "camera",
        title: "SECURITY SMART CAMERA",
        price:"$850",
        img: "https://images.pexels.com/photos/1178337/pexels-photo-1178337.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
        id: "game-console",
        title: "ENTERTAINMENT & GAMES",
        price:"$850",
        img: "https://images.pexels.com/photos/12160522/pexels-photo-12160522.jpeg?auto=compress&cs=tinysrgb&w=1600"

    },
]

function Trending() {

    return (
        <>
            <section class="text-gray-600 body-font">

                <div class="container px-5 py-24 mx-auto">
                    <p className="text-left mb-5 text-2xl font-semibold text-black">Trending Categories</p>
                    <div class="flex flex-wrap -m-4">
                        {trends.map((item, index) => (
                            <div
                                key={item.id}
                                className="lg:w-1/5 md:w-1/3 p-4   w-full sm:w-1/3 "
                            >
                                <div className=" p-2">
                                <a class="block relative h-48 rounded overflow-hidden">
                                    <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={item.img} />
                                </a>
                                <div class="mt-4">
                                    <h2 class="text-gray-900 title-font text-lg font-medium">{item.title}</h2>
                                </div>
                                </div>
                               
                            </div>
                        ))}
                    </div>
                </div>

                <div class="flex mx-auto w-full md:w-1/2 ">
                    {interests.map((item) => (
                        <div key={item.id} class="p-4 md:w-1/2 w-full">
                        <div class="h-full bg-gray-100 p-8 rounded">
                            
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

export default Trending;