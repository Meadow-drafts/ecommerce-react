


function Discount() {
    return (
        <>
            <section className="bg-gray-100 ">
                <div className="grid max-w-screen-xl px-8 py-8 mx-auto lg:gap-2 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div className="place-self-center text-left ml-10 lg:col-span-7">
                        <a href="#" className="inline-flex bg-primary items-center justify-center mb-5 px-5 py-3 text-base font-medium text-center text-white focus:ring-4 focus:ring-gray-100 border-gray-700 hover:bg-gray-700 dark:focus:ring-gray-800">
                            Hurry Up !
                        </a>
                        <p className="max-w-2xl font-semibold text-black md:text-lg lg:text-3xl ">Up To 25% Discount</p>
                        <p className="max-w-2xl font-semibold text-center text-black md:text-lg lg:text-3xl ">Check it Out</p>
                        <div className="flex justify-between mt-2">
                            <div className="border-2 rounded-lg border-gray-200 shadow-lg md:mx-2 sm:mx-2 xs:mx-2 p-2">
                                <p className="font-bold">310</p>
                                <p className="text-xs">DAYS</p>
                            </div>
                            <div className="border-2 rounded-lg border-gray-200 shadow-lg md:mx-2 sm:mx-2 xs:mx-2 p-3">
                                <p className="font-bold">02</p>
                                <p className="text-xs">HRS</p>
                            </div>
                            <div className="border-2 rounded-lg border-gray-200 shadow-lg md:mx-2 sm:mx-2 xs:mx-2 p-2">
                                <p className="font-bold">09</p>
                                <p className="text-xs">MINS</p>
                            </div>
                            <div className="border-2 rounded-lg border-gray-200 shadow-lg p-2">
                                <p className="font-bold">02</p>
                                <p className="text-xs">SECS</p>
                            </div>
                        </div>
                        <p className="text-center mt-5 font-semibold">Shop Now</p>

                    </div>
                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Discount;