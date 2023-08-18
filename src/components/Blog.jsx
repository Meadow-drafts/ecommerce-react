
export const events = [
    {
        date: "January 21, 2023 ",
        title: "Musis magnate headphones",
        img: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png",
    },
    {
        date: "January 21, 2023 ",
        title: "Macbook Air labore et dolore",
        img: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png",
    },
    {
        date: "January 21, 2023 ",
        title: "Ipsum available but the majority",
        img: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png",
    },
]

function Blog() {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                <div className="flex justify-between">
                        <h3 className="text-left mb-5 text-2xl font-semibold text-black">Blog & Events</h3>
                        <div className="flex">
                            <h3 className="text-right mb-5 text-l font-semibold text-black">View all events</h3>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3.5} stroke="currentColor" className="w-6 h-4 mt-1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>
                        </div>

                    </div>

                    <div className="flex flex-wrap -m-4">

                        {events.map((item) => (
                            <div className="p-4 md:w-1/3">
                                <div className="h-full  overflow-hidden">
                                    <img className="p-2 border-2 border-gray-100 mb-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup" />
                                    <div className="px-6 text-left">
                                        <p className="leading-relaxed flex mb-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                                                <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clipRule="evenodd" />
                                            </svg>
                                            {item.date}
                                        </p>

                                    </div>
                                    <p className=" text-left px-6 pb-2 font-semibold text-black md:mb-2 lg:mb-0">{item.title}
                                    </p>

                                </div>

                            </div>
                        ))}

                    </div>
                </div>
            </section>
        </>
    )
}

export default Blog;