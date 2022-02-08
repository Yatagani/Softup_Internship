import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import { sendCartData } from "../../store/http-actions";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const cartItems = useSelector((state) => state.cart.items);
  const isEmpty = totalQuantity === 0;

  const dispatch = useDispatch();

  const closeCartHandler = () => {
    dispatch(uiActions.toggleCart());
  };

  const orderHandler = () => {
    dispatch(sendCartData({ totalAmount, totalQuantity, items: cartItems }));
    dispatch(uiActions.toggleCart());
  };

  return (
    <Modal onClose={closeCartHandler}>
      {isEmpty && <h2>No items found in your cart</h2>}
      <ul className={classes["cart-items"]}>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={{
              id: item.id,
              title: item.title,
              amount: item.amount,
              price: item.price,
            }}
          />
        ))}
      </ul>
      {!isEmpty && (
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>{totalAmount}</span>
        </div>
      )}
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={closeCartHandler}>
          Close
        </button>
        <button disabled={isEmpty} className={classes.button} onClick={orderHandler}>
          Order
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
