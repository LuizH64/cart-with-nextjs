// Dependencies
import { useRouter } from 'next/router';
import Head from 'next/head';
import fsPromises from 'fs/promises';
import path from 'path';

// Components
import CartItem from '../../components/CartItem/CartItem';

// Styles
import styles from './cart.module.css';

// Utils
import brasilianFormatter from '../../utils/brasilianFormatter';
import capitalize from '../../utils/capitalize';


const Cart = ({ items, value }) => {
    const router = useRouter();
    const { cartType } = router.query;
    const otherCartType = cartType === "small" ? "big" : "small";

    const onClickHandler = () => {
        alert(`Redirecting to ${otherCartType} cart`);
    };

    return (
        <>
            <Head>
                <title>{capitalize(cartType)} cart</title>
            </Head>
            <main className={styles.MainWrapper}>
                <h1 className={styles.Title}>Meu carrinho</h1>

                <div className={styles.ItemsWrapper}>
                    {items.map(item => (
                        <CartItem
                            key={item.uniqueId}
                            name={item.name}
                            price={item.price}
                            sellingPrice={item.sellingPrice}
                            imageSource={item.imageUrl}
                        />
                    ))}
                </div>

                <div className={styles.Pricing}>
                    <div className={styles.TotalPrice}>
                        <span>Total</span>
                        <span>{brasilianFormatter(value)}</span>
                    </div>

                    {value > 10 ? (
                        <div className={styles.FreeShippingAlert}>
                            <span>Parabéns, sua compra tem frete grátis !</span>
                        </div>
                    ) : null}
                </div>


                <div className={styles.ButtonWrapper}>
                    <a href={`./${otherCartType}`}>
                        <button onClick={onClickHandler}>Finalizar compra</button>
                    </a>
                </div>
            </main>
        </>
    )
}

const getStaticProps = async ({ params }) => {
    const filePath = path.join(process.cwd(), `/public/${params.cartType}.json`);
    const jsonData = await fsPromises.readFile(filePath);
    const data = JSON.parse(jsonData);

    return {
        props: {
            items: data.items,
            value: data.value
        }
    }

}

const getStaticPaths = () => {
    const paths = [
        { params: { cartType: 'small' } },
        { params: { cartType: 'big' } }
    ];

    return {
        paths,
        fallback: false
    }
}

export default Cart;
export { getStaticProps, getStaticPaths };