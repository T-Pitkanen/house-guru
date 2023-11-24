import Image from "next/image";
import styles from "./property.module.css";
import Link from "next/link";

const Property = ({ property }) => {
  // console.log('property.id:', property.id);
  // console.log('Rendering property', property);
  return (
    <div className={styles.propertyContainer}>
      <Link href={`/buy/${property.id}`}>
        <div className={styles.header}>
          <Image
            src={property.image}
            alt={property.address}
            width={300}
            height={300}
          />
        </div>

        <div className={styles.body}>
          <div className={styles.info}>
            <div className={styles.addressLoc}>
              <div className={styles.address}>{property.address},</div>
              <div className={styles.location}>{property.location}</div>
            </div>

            <div className={styles.size}>{property.square_meters} m²</div>
          </div>

          <div className={styles.details}>
            <div className={styles.description}>{property.description}</div>
            <div className={styles.price}>{property.price}€</div>
            {/* <Link href={`/buy/${property.id}`}>
            <button className={styles.button}>Read More</button>
          </Link> */}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Property;
