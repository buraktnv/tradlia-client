import type { NextPage } from "next";
import ProductCard from "../components/home/ProductCard";
import PopularProducts from "../components/home/PopularProducts";
import AltCategories from "../components/home/AltCategories";
import DiscoverCategory from "../components/home/DiscoverCategory";
import Slider from "../components/home/Slider";
import FilterSelection from "../components/home/FilterSelection";
import DiscoverCategoryMobile from "../components/home/DiscoverCategoryMobile";
import Stories from "../components/home/Stories";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col w-full">
      <FilterSelection />
      <Slider />
      <ProductCard />
      <DiscoverCategory />
      <DiscoverCategoryMobile />
      <Stories />
      <PopularProducts />
      <AltCategories />
    </div>
  );
};

export default Home;
