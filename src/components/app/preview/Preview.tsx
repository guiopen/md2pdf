import { createResource, Suspense } from "solid-js";
import { marked } from "marked";
import { getUserText } from "../../../shared/store";
import styles from "./Preview.module.css";

const Preview = () => {
  return (
    <div
      class={styles.previewBox}
      innerHTML={marked.parse(getUserText(), { async: false })}
    />
  );
};

export default Preview;
