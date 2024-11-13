import { Component, JSX } from "solid-js";
import styles from "./BookCard.module.scss";

interface BookCardProps {
  title: string;
  author: string;
  coverUrl: string;
  description: string;
  publishYear?: number;
  children?: JSX.Element;
}

const BookCard: Component<BookCardProps> = (props) => {
  return (
    <div class={styles.card}>
      <div class={styles.cover}>
        <img src={props.coverUrl} alt={`Cover of ${props.title}`} />
      </div>
      <div class={styles.content}>
        <h3 class={styles.title}>{props.title}</h3>
        <p class={styles.author}>by {props.author}</p>
        {props.publishYear && <p class={styles.year}>{props.publishYear}</p>}
        <p class={styles.description}>{props.description}</p>
        {props.children && <div class={styles.actions}>{props.children}</div>}
      </div>
    </div>
  );
};

export default BookCard;
