// Dependencies
import Image from 'next/image';

// Styles
import styles from './CartItem.module.css';

// Utils
import brasilianFormatter from '../../utils/brasilianFormatter';


const CartItem = ({ name, imageSource, price, sellingPrice }) => {
    return (
        <section className={styles.ItemWrapper}>
            <div className={styles.ImageWrapper}>
                <Image
                    src={imageSource}
                    layout='fill'
                    objectFit='contain'
                    alt="Product Picture"
                />
            </div>

            <div className={styles.ItemData}>
                <p>{name}</p>
                <p className={styles.Price}>{brasilianFormatter(price)}</p>
                <p className={styles.SellingPrice}>{brasilianFormatter(sellingPrice)}</p>
            </div>
        </section>
    )
}

export default CartItem;