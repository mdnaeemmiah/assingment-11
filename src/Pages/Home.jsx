import Categories from "../Components/Categories/Categories";
import Books from "../Components/Home/Books";
import Carousel from "../Components/Share/Carousel";


const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Categories></Categories>
            <Books></Books>
        </div>
    );
};

export default Home;