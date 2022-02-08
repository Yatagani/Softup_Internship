import { bookActions } from "./book-slice";
import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

export const fetchBookData = () => {
  return async (dispatch) => {
    // Dispatch START action
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Fetching...",
        message: "Fetching books!",
      })
    );

    const fetchData = async () => {
      const response = await fetch(
        "https://bookapp-af310-default-rtdb.europe-west1.firebasedatabase.app/books.json"
      );

      if (!response.ok) {
        throw new Error("Could not fetch book data");
      }

      const data = await response.json();

      return data;
    };

    try {
      const bookData = await fetchData();
      dispatch(bookActions.fetchAllBooks(bookData));

      // Dispatch SUCCESS action
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Fetched books successfully!",
        })
      );
    } catch {
      // Dispatch ERROR action
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching books failed!",
        })
      );
    }
  };
};

export const sendBookData = (book) => {
  return async (dispatch) => {
    // Dispatch START action
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending book data!",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://bookapp-af310-default-rtdb.europe-west1.firebasedatabase.app/books.json",
        {
          method: "POST",
          body: JSON.stringify(book),
        }
      );
      if (!response.ok) {
        throw new Error("Sending book data failed.");
      }

      const responseData = await response.json();

      const data = { [responseData.name]: book };

      return data;
    };

    try {
      const bookData = await sendRequest();

      dispatch(bookActions.addNewBook(bookData));
      // Dispatch SUCCESS action
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent book data successfully!",
        })
      );
    } catch (error) {
      // Dispatch ERROR action
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending book data failed!",
        })
      );
    }
  };
};

export const fetchCartData = () => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Fetching...",
        message: "Fetching cart data!",
      })
    );

    const fetchCart = async () => {
      const response = await fetch(
        "https://bookapp-af310-default-rtdb.europe-west1.firebasedatabase.app/cart.json"
      );

      if (!response.ok) {
        throw new Error("Fetching cart data failed.");
      }

      const data = await response.json();

      return data;
    };

    try {
      const cartData = await fetchCart();

      dispatch(
        cartActions.fetchAllCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
          totalAmount: cartData.totalAmount,
        })
      );
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Fetched books successfully!",
        })
      );
    } catch {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching cart failed!",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://bookapp-af310-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalAmount: cart.totalAmount,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }
    };

    try {
      await sendRequest();

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    }
  };
};
