import { useSelector } from "react-redux";

import BookItem from "./BookItem";
import classes from "./Books.module.css";

const Books = () => {
  const bookItems = useSelector((state) => state.book.items);
  const category = useSelector((state) => state.book.category);

  return (
    <div className={classes.booksContainer}>
      {bookItems
        .filter((item) => item.category === category)
        .map((book) => (
          <BookItem
            key={book.id}
            item={{
              id: book.id,
              title: book.title,
              author: book.author,
              price: book.price,
              image: book.image,
              category: book.category,
            }}
          />
        ))}
    </div>
  );
};

export default Books;
