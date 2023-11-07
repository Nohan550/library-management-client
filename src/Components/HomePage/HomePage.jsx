import Categories from "./Categories";
import Slider from "./Slider";
import Sponsors from "./Sponsors";
import Subscription from "./Subscription";


const HomePage = () => {
    return (
        <div>
            <Slider></Slider>
            <Categories></Categories>
            <Sponsors></Sponsors>
            <Subscription></Subscription>
        </div>
    );
};

export default HomePage;