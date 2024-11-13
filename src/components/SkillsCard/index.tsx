import {
  FaBrandsPython,
  FaBrandsReact,
  FaBrandsDocker,
  FaBrandsUnity,
  FaSolidVrCardboard,
  FaSolidGamepad,
} from "solid-icons/fa";
import { SiFlutter, SiPytorch } from "solid-icons/si";
import styles from "./SkillsCard.module.scss";

const SkillsCard = () => {
  return (
    <div class={styles.skillsGrid}>
      <div class={styles.skillCategory}>
        <h3>Development</h3>
        <div class={styles.skillItems}>
          <span>
            <FaBrandsPython /> Python
          </span>
          <span>
            <FaBrandsReact /> React
          </span>
          <span>
            <SiFlutter /> Flutter
          </span>
          <span>
            <FaBrandsDocker /> Docker
          </span>
          <span>
            <SiPytorch /> PyTorch
          </span>
        </div>
      </div>

      <div class={styles.skillCategory}>
        <h3>Game & XR</h3>
        <div class={styles.skillItems}>
          <span>
            <FaBrandsUnity /> Unity
          </span>
          <span>
            <FaSolidVrCardboard /> VR Development
          </span>
          <span>
            <FaSolidGamepad /> Game Design
          </span>
        </div>
      </div>
    </div>
  );
};

export default SkillsCard;
