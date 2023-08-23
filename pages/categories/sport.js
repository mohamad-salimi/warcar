import CarsList from '../../components/templates/CarsList';
import carsData from '../../data/carsData'


const Sport = () => {

    const sportCars = carsData.filter((car) => car.category === "sport")
    

    return (
        <CarsList data={sportCars} />
    );
};

export default Sport;