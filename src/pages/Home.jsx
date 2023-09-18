import Hero from "../components/Hero";
import FlashSales from "../components/FlashSales";
import Trending from "../components/Trending";
import Categories from "../components/Category/Categories";
import Explore from "../components/Explore";
import Discount from "../components/Discount";
import Popular from "../components/Popular";
import Blog from "../components/Blog";
import Others from "../components/Others";
import Footer from "../components/Footer";
function Home() {
  return (
    <>
      <Hero />
      <FlashSales/>
      <Categories/>
      <Trending />
      <Explore />
      <Discount/>
      {/* <Popular /> */}
      <Blog />
      <Others />
      <Footer />
    </>
  );
}

export default Home;