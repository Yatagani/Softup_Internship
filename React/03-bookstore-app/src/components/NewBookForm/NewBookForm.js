import { useState } from "react";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import { sendBookData } from "../../store/http-actions";
import useInput from "../Hooks/use-input";

import Modal from "../UI/Modal";
import encodeImageFileAsURL from "../../utils/image-to-url";
import classes from "./NewBookForm.module.css";

const isNotEmpty = (value) => value.trim() !== "";

const NewBookForm = (props) => {
  const [uploadedImage, setUploadedImage] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const dispatch = useDispatch();

  const imageChangeHandler = async (event) => {
    setUploadedImage(event.target.files[0]);
    encodeImageFileAsURL(event.target.files[0], setImagePreview);
  };

  const closeNewBookHandler = () => {
    dispatch(uiActions.toggleNewBook());
  };

  const {
    value: titleValue,
    isValid: titleIsValid,
    hasError: titleHasError,
    valueChangeHandler: titleChangeHandler,
    inputBlurHandler: titleBlurHandler,
    reset: resetTitle,
  } = useInput(isNotEmpty);

  const {
    value: authorValue,
    isValid: authorIsValid,
    hasError: authorHasError,
    valueChangeHandler: authorChangeHandler,
    inputBlurHandler: authorBlurHandler,
    reset: resetAuthor,
  } = useInput(isNotEmpty);

  const {
    value: priceValue,
    isValid: priceIsValid,
    hasError: priceHasError,
    valueChangeHandler: priceChangeHandler,
    inputBlurHandler: priceBlurHandler,
    reset: resetPrice,
  } = useInput(isNotEmpty);

  let formIsValid = false;

  if (titleIsValid && authorIsValid && priceIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    const newBook = {
      id: Date.now(),
      title: titleValue,
      author: authorValue,
      price: priceValue,
      category: "English",
      image: imagePreview,
    };

    dispatch(sendBookData(newBook));

    resetTitle();
    resetAuthor();
    resetPrice();
    setUploadedImage("");
    setImagePreview("");
    dispatch(uiActions.toggleNewBook());
  };

  return (
    <Modal onClose={closeNewBookHandler}>
      <form onSubmit={submitHandler}>
        <div className={classes["form-control"]}>
          <label htmlFor="title">Book title</label>
          <input
            type="text"
            id="title"
            onChange={titleChangeHandler}
            onBlur={titleBlurHandler}
            value={titleValue}
          ></input>
          {titleHasError && (
            <p className={classes["error-text"]}>Title must not be empty</p>
          )}
        </div>
        <div className={classes["form-control"]}>
          <label htmlFor="author">Book author</label>
          <input
            type="text"
            id="author"
            onChange={authorChangeHandler}
            onBlur={authorBlurHandler}
            value={authorValue}
          ></input>
          {authorHasError && (
            <p className={classes["error-text"]}>Author must not be empty</p>
          )}
        </div>
        <div className={classes["form-control"]}>
          <label htmlFor="price">Book price</label>
          <input
            type="number"
            id="price"
            min="0"
            onChange={priceChangeHandler}
            onBlur={priceBlurHandler}
            value={priceValue}
          ></input>
          {priceHasError && (
            <p className={classes["error-text"]}>
              Please enter a positive value
            </p>
          )}
        </div>
        <div className={classes["form-control"]}>
          <label htmlFor="image">Select an image</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            value={uploadedImage.url}
            onChange={imageChangeHandler}
            required
          ></input>
        </div>
        <div className={classes["form-actions"]}>
          <button disabled={!formIsValid}>Submit</button>
          <button
            className={classes.button}
            type="button"
            onClick={closeNewBookHandler}
          >
            Close
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default NewBookForm;
