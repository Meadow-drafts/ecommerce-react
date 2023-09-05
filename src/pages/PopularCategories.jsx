import { trends } from "../data/trendingData"

function PopularCategories(){
    return(
        <>
        <div className="trending-categories">
            <h1> Test  Trending Categories</h1><br/><hr />

            <div class="flex flex-wrap -m-4">
                        {trends.map((item, index) => (
                            <div
                                key={item.id}
                                className="lg:w-1/5 md:w-1/3 p-4   w-full sm:w-1/3 "
                            >
                                <div className="border-2 border-gray-100 p-2">
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

        </>
    )
};

export default PopularCategories