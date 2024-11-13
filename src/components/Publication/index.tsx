import { Component } from "solid-js";
import styles from "./Publication.module.scss";

interface PublicationProps {
  title: string;
  authors: string[];
  venue: string;
  year: number;
  link?: string;
}

const Publication: Component<PublicationProps> = (props) => {
  return (
    <div class={styles.publication}>
      <h3 class={styles.title}>
        {props.link ? (
          <a href={props.link} target="_blank" rel="noopener noreferrer">
            {props.title}
          </a>
        ) : (
          props.title
        )}
      </h3>
      <p class={styles.authors}>{props.authors.join(", ")}</p>
      <p class={styles.venue}>
        <span class={styles.venueName}>{props.venue}</span>
        <span class={styles.year}>{props.year}</span>
      </p>
    </div>
  );
};

export default Publication;
