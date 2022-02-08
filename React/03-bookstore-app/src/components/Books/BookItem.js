import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import { uiActions } from "../../store/ui-slice";
import { wishlistActions } from "../../store/wishlist-slice";
import classes from "./BookItem.module.css";

const BookItem = (props) => {
  const [amountValue, setAmountValue] = useState(1);
  const dispatch = useDispatch();

  const { title, author, price, image, id } = props.item;
  // const [isLiked, setIsLiked] = useState(false);
  const isLiked = useSelector((state) => state.ui.isLiked);

  const amountHandler = (event) => {
    setAmountValue(event.target.value);
  };

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        amount: amountValue,
        price,
      })
    );
  };

  const wishlistHandler = () => {
    dispatch(
      wishlistActions.manageWishlistItem({
        id,
        title,
        author,
        image,
      })
    );
    // setIsLiked(!isLiked);
    dispatch(uiActions.toggleLikeButton());
  };

  return (
    <div className={classes.container}>
      <div className={classes.summary}>
        <img src={image} alt={title}></img>
        <h3>{title}</h3>
        <div className={classes.author}>{author}</div>
        <div className={classes.price}>ALL {price}</div>
      </div>
      <div className={classes.actions}>
        <input
          value={amountValue}
          onChange={amountHandler}
          type="number"
          min={1}
        ></input>
        <button onClick={addToCartHandler}>Cart</button>
        <button onClick={wishlistHandler}>{isLiked ? "Unlike" : "Like"}</button>
      </div>
    </div>
  );
};

export default BookItem;
