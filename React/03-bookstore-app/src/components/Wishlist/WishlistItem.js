import { useDispatch } from "react-redux";
import { wishlistActions } from "../../store/wishlist-slice";
import classes from "./WishlistItem.module.css";

const WishlistItem = (props) => {
  const { title, author, image, id } = props.item;

  const dispatch = useDispatch();

  const removeFromWishlistHandler = () => {
    dispatch(
      wishlistActions.manageWishlistItem({
        id,
        title,
        author,
        image,
      })
    );
  };

  return (
    <li className={classes["wishlist-item"]}>
      <div className={classes.summary}>
        <img src={image} alt={title}></img>
        <div>
          <h2>{title}</h2>
          <p>{author}</p>
        </div>
      </div>
      <button className={classes.actions} onClick={removeFromWishlistHandler}>
        X
      </button>
    </li>
  );
};

export default WishlistItem;
