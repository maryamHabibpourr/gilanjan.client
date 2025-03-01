import Banner from "./components/Banner";
import Categories from "./components/Categories";
import ContactAdminButton from "./components/ContactAdminButton";
import PropertyList from "./components/properties/PropertyList";
import { getUserId } from "@/app/lib/actions";
import BlogList from "./components/blog/BlogList";
import FoodList from "./components/food/FoodList";
import FestivalItemShow from "./components/festival/FestivalItemShow";
import Gallary from "./components/gallary/Gallary";





const Home = async () => {
  const userId = await getUserId();


  return (
    <main className="w-full mx-auto bg-grayMedium">
      <Categories />
      <PropertyList />
      <Gallary/> 
       <BlogList/>  
      <FoodList/>
      <FestivalItemShow/>
      <ContactAdminButton userId={userId} />
    </main>
  );
};

export default Home;
