import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemInCart {
    productName: string;
    quantity: number;
}

const itemsInCart: ItemInCart[] = [
    { productName: 'Nintnedo Switch 2', quantity: 1 },
    { productName: 'Pro controller', quantity: 2 },
    { productName: 'Super Smash Bross', quantity: 5 },
    { productName: 'Super Mario Wonder', quantity: 3 },
]

export function FirstStepsApp() {
    return (
        <>
            <h1>Shopping Cart</h1>

            {/* <ItemCounter name='Nintendo Switch 2' quantity={1} />
            <ItemCounter name='Pro controller' quantity={2} />
            <ItemCounter name='Super Smash Bross' quantity={3} />
            <ItemCounter name='Super Mario Wonder' quantity={2} /> */}

            {
                itemsInCart.map(({ productName, quantity }) => (
                    <ItemCounter key={productName} name={productName} quantity={quantity} />
                ))
            }

        </>
    );
}