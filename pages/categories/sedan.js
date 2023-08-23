import CarsList from '../../components/templates/CarsList';
import carsData from '../../data/carsData'


const Sedan = () => {

    const sedanCars = carsData.filter((car) => car.category === "sedan")
    

    return (
        <CarsList data={sedanCars} />
    );
};

export default Sedan;