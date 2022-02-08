import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";

import Modal from "../UI/Modal";
import WishlistItem from "../Wishlist/WishlistItem";
import classes from "./Wishlist.module.css";

const Wishlist = (props) => {
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const isEmpty = wishlistItems.length === 0
  const dispatch = useDispatch();


  const closeWishlistHandler = () => {
    dispatch(uiActions.toggleWishlist());
  };

  return (
    <Modal onClose={closeWishlistHandler}>
      {isEmpty && <h2>No items found in wishlist</h2>}
      <ul className={classes["wishlist-items"]}>
        {wishlistItems.map((item) => (
          <WishlistItem
            key={item.id}
            item={{
              id: item.id,
              title: item.title,
              image: item.image,
              author: item.author,
            }}
          />
        ))}
      </ul>
      <button className={classes.button} onClick={closeWishlistHandler}>
        Close
      </button>
    </Modal>
  );
};

export default Wishlist;
