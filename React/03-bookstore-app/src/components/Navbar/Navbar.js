import { useDispatch} from "react-redux";
import { bookActions } from "../../store/book-slice";
import { uiActions } from "../../store/ui-slice";

import classes from "./Navbar.module.css";

const Navbar = (props) => {
  const dispatch = useDispatch();

  const categoryHandler = (e) => {
    dispatch(bookActions.filterCategory(e.target.value));
  };

  const showWishlistHandler = () => {
    dispatch(uiActions.toggleWishlist());
  };

  const showNewBookHandler = () => {
    dispatch(uiActions.toggleNewBook());
  };

  return (
    <div className={classes.navigation}>
      <select onChange={categoryHandler}>
        {/* <option value="Category">Category</option> */}
        <option value="English">English</option>
        <option value="French">French</option>
        <option value="Italian">Italian</option>
        <option value="German">German</option>
        <option value="Spanish">Spanish</option>
      </select>
      <li onClick={showWishlistHandler}>Wishlist</li>
      <li onClick={showNewBookHandler}>Add Book</li>
    </div>
  );
};

export default Navbar;
