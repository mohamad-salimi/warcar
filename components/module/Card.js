import styles from './Card.module.css';

//Icons
import Location from '../icons/Location';
import Link from 'next/link';


const Card = (props) => {

  const {id, name, model, year, distance, location, image, price} = props;

  return (
    <Link href={`/cars/${id}`}>
      <div className={styles.container}>
        <img src={image} className={styles.image} />
        <p className={styles.title}>{`${name} ${model}`}</p>
        <p className={styles.detail}>{`${year} . ${distance}km`}</p>
        <div className={styles.footer}>
          <p className={styles.price}>$ {price}</p>
          <div className={styles.location}>
            <p>{location}</p>
            <Location />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;