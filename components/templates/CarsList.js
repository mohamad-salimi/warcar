import { useRouter } from 'next/router';

//Module
import Card from '../module/Card';

//Styles
import styles from './CarsList.module.css';

//Icons
import Back from '../icons/Back';

const CarsList = ({data}) => {

    const router = useRouter();

    const backHandler = () => {
        router.back();
    }

    return (
        <div className={styles.container}>
            <div className={styles.cards}>
                {
                    data.map(item => <Card key={item.id} {...item} />)
                }
            </div>
            <div className={styles.back} onClick={backHandler}>
                <Back />
                <p>Back</p>
            </div>
        </div>
    );
};

export default CarsList;