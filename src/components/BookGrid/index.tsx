import { ParentComponent } from 'solid-js';
import styles from './BookGrid.module.scss';

const BookGrid: ParentComponent = (props) => {
  return (
    <div class={styles.grid}>
      {props.children}
    </div>
  );
};

export default BookGrid;
