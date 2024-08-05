import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../utils/cartSlice";


const Cart = () => {
    const cartItem = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart())
    }


    return(
        <div className="text-center m-2 p-2" >
        {cartItem.lenth === 0 && (<p className="text-lg font-bold">Cart is Empity</p>)}
            <h1 className="text-2xl font-bold">Cart</h1>
            <button className="border" onClick={handleClearCart} >Clear Cart</button>
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
