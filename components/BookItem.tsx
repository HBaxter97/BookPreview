"use client";

import { Book } from "./BookShelf";
import styles from "./BookItem.module.css";

interface BookItemProps {
  book: Book;
  isExpanded: boolean;
  onLookInside: () => void;
  onShowDetails: () => void;
}

export default function BookItem({
  book,
  isExpanded,
  onLookInside,
  onShowDetails,
}: BookItemProps) {
  return (
    <figure className={styles.figure}>
      <div className={styles.bookContainer}>
        <div
          className={styles.book}
          style={{
            backgroundImage: `url(${book.image})`,
            backgroundColor: "#ddd",
          }}
        >
          {/* Placeholder for book image */}
        </div>
        <div className={styles.buttons}>
          <button onClick={onLookInside} className={styles.button}>
            Look inside
          </button>
          <button onClick={onShowDetails} className={styles.button}>
            Details
          </button>
        </div>
      </div>
      <figcaption className={styles.caption}>
        <h3>{book.title}</h3>
        <p className={styles.author}>{book.author}</p>
      </figcaption>

      {isExpanded && (
        <div className={styles.details}>
          <ul>
            <li>{book.description}</li>
            <li>{book.publisher}</li>
            <li>{book.publishDate}</li>
            <li>{book.pages} pages</li>
          </ul>
        </div>
      )}
    </figure>
  );
}
