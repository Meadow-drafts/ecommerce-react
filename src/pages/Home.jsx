import Hero from "../components/Hero";
import Trending from "../components/Trending";
import Categories from "../components/Category/Categories";
import Latest from "../components/Latest";
import Discount from "../components/Discount";
import Popular from "../components/Popular";
import Blog from "../components/Blog";
import Others from "../components/Others";
import Footer from "../components/Footer";
function Home() {
  return (
    <>
      <Hero />
      <Trending />
      <Categories/>
      <Latest />
      <Discount />
      <Popular />
      <Blog />
      <Others />
      <Footer />
    </>
  );
}

export default Home;