import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Hero() {
    return (
        <>
        <Carousel>
        <section className="bg-gray-100 m-8 rounded-md">
                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div className="mr-auto place-self-center text-left ml-10 lg:col-span-7">
                    <p className="max-w-2xl font-semibold text-orange-500 md:text-lg lg:text-2xl capitalize">SALE UP TO 30% OFF</p>
                        <h1 className="max-w-2xl mb-4 text-5xl  tracking-tight leading-none md:text-5xl xl:text-6xl text-black">Samsung Galaxy Series</h1>
                        <p className="max-w-2xl mb-6 font-light text-black lg:mb-8 md:text-lg lg:text-xl ">Feature packed at better value than ever powerful sensors to monitor your fitnes.</p>
                        <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-black rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                            Get started
                            <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                        <a href="#" className="inline-flex bg-primary items-center justify-center px-5 py-3 text-base font-medium text-center text-white border  rounded-lg focus:ring-4 focus:ring-gray-100 border-gray-700  ">
                            Speak to Sales
                        </a>
                    </div>
                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup" />
                    </div>
                </div>
            </section>
        <section className="bg-gray-100 m-8 rounded-md">
                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div className="mr-auto place-self-center text-left ml-10 lg:col-span-7">
                    <p className="max-w-2xl font-semibold text-orange-500 md:text-lg lg:text-2xl capitalize">SALE UP TO 30% OFF</p>
                        <h1 className="max-w-2xl mb-4 text-5xl  tracking-tight leading-none md:text-5xl xl:text-6xl text-black">Samsung Galaxy Series</h1>
                        <p className="max-w-2xl mb-6 font-light text-black lg:mb-8 md:text-lg lg:text-xl ">Feature packed at better value than ever powerful sensors to monitor your fitnes.</p>
                        <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-black rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                            Second slide
                            <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                        <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border  rounded-lg focus:ring-4 focus:ring-gray-100 border-gray-700 hover:bg-gray-700 dark:focus:ring-gray-800">
                            Speak to Sales
                        </a>
                    </div>
                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup" />
                    </div>
                </div>
            </section>
        <section className="bg-gray-100 m-8 rounded-md">
                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div className="mr-auto place-self-center text-left ml-10 lg:col-span-7">
                    <p className="max-w-2xl font-semibold text-orange-500 md:text-lg lg:text-2xl capitalize">SALE UP TO 30% OFF</p>
                        <h1 className="max-w-2xl mb-4 text-5xl  tracking-tight leading-none md:text-5xl xl:text-6xl text-black">Samsung Galaxy Series</h1>
                        <p className="max-w-2xl mb-6 font-light text-black lg:mb-8 md:text-lg lg:text-xl ">Feature packed at better value than ever powerful sensors to monitor your fitnes.</p>
                        <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-black rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                            Third slide
                            <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                        <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border  rounded-lg focus:ring-4 focus:ring-gray-100 border-gray-700 hover:bg-gray-700 dark:focus:ring-gray-800">
                            Speak to Sales
                        </a>
                    </div>
                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup" />
                    </div>
                </div>
            </section>
          
        </Carousel>
           
        </>
    );
}

export default Hero;
