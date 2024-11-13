import { Component } from "solid-js";
import styles from "./ProjectCard.module.scss";
import {
  FaBrandsUnity,
  FaBrandsAndroid,
  FaSolidVrCardboard,
  FaSolidGamepad,
  FaBrandsPython,
  FaBrandsReact,
  FaBrandsDocker,
} from "solid-icons/fa";
import { SiFlutter, SiPytorch } from "solid-icons/si";

const iconMap = {
  Unity: FaBrandsUnity,
  Android: FaBrandsAndroid,
  VR: FaSolidVrCardboard,
  Gaming: FaSolidGamepad,
  Python: FaBrandsPython,
  React: FaBrandsReact,
  Docker: FaBrandsDocker,
  Flutter: SiFlutter,
  AI: SiPytorch,
};

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  tags?: string[];
}

const ProjectCard: Component<ProjectCardProps> = (props) => {
  return (
    <div class={styles.card}>
      <div class={styles.image}>
        <img src={props.imageUrl} alt={`Preview of ${props.title}`} />
      </div>
      <div class={styles.content}>
        <h3 class={styles.title}>{props.title}</h3>
        <p class={styles.description}>{props.description}</p>
        {props.tags && (
          <div class={styles.tags}>
            {props.tags.map((tag) => (
              <span class={styles.tag}>
                {iconMap[tag] && <Dynamic component={iconMap[tag]} />} {tag}
              </span>
            ))}
          </div>
        )}
        <div class={styles.actions}>
          <a href={props.link} target="_blank" rel="noopener noreferrer">
            Visit Project →
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
