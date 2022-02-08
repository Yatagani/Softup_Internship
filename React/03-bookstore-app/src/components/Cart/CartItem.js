import { useDispatch} from "react-redux";
import { cartActions } from "../../store/cart-slice";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const { title, price, amount, id } = props.item;

  const dispatch = useDispatch();

  const removeFromCartHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
        amount: +1,
      })
    );
  };

  return (
      <li className={classes["cart-item"]}>
        <div>
          <h2>{title}</h2>
          <div className={classes.summary}>
            <span className={classes.price}>ALL {price}</span>
            <span className={classes.amount}>x {amount}</span>
          </div>
        </div>
        <div className={classes.actions}>
          <button onClick={removeFromCartHandler}>−</button>
          <button onClick={addToCartHandler}>+</button>
        </div>
      </li>
  );
};

export default CartItem;
