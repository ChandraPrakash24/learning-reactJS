import { useSelector } from "react-redux";

const Cart = () => {
    const cartItem = useSelector((store) => store.cart.items);

    return(
        <div className="text-center m-2 p-2" >
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="mt-4">
                    <div className="mb-2">
                        <p className="text-lg font-bold">{cartItem}</p>
                    </div>
            </div>
        </div>
    );
};

export default Cart;


/***
 * 
 * const Cart = () => {
    const cartItem = useSelector((store) => store.cart.items);

    return(
        <div className="text-center m-2 p-2" >
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="mt-4">
                {cartItem.map((item, index) => (
                    <div key={index} className="mb-2">
                        <p className="text-lg font-bold">{item}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cart;

 */
