import { useDispatch, useSelector } from "react-redux";
import { Fragment, useEffect } from "react";
import { fetchBookData, fetchCartData } from "./store/http-actions";

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Books from "./components/Books/Books";
import Cart from "./components/Cart/Cart";
import Wishlist from "./components/Wishlist/Wishlist";
import NewBookForm from "./components/NewBookForm/NewBookForm";
import Notification from "./components/Notifications/Notification";

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const showWishlist = useSelector((state) => state.ui.wishlistIsVisible);
  const showNewBook = useSelector((state) => state.ui.newBookIsVisible);

  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(fetchBookData());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      {showCart && <Cart />}
      {showWishlist && <Wishlist />}
      {showNewBook && <NewBookForm />}
      <Header />
      <Navbar />
      <Books />
    </Fragment>
  );
}

export default App;
