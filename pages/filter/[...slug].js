//data
import carsData from "../../data/carsData";

//Components
import CarsList from '../../components/templates/CarsList';

//Hooks
import { useRouter } from "next/router";


const FilteredCars = () => {

    const router =useRouter();
    const [min, max] = router.query.slug || [];

    const filteredData = carsData.filter(item => item.price > min && item.price < max)

    if (!filteredData.length) return <h3 style={{"color" : "white"}}>NotFound</h3>

    return (
        <div>
            <CarsList data={filteredData} />
        </div>
    );
};

export default FilteredCars;