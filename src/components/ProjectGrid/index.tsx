import { ParentComponent } from "solid-js";
import styles from "./ProjectGrid.module.scss";

const ProjectGrid: ParentComponent = (props) => {
  return <div class={styles.grid}>{props.children}</div>;
};

export default ProjectGrid;
