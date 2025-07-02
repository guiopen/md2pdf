
import { getUserText, setUserText } from "../../../shared/store";
import styles from "./Editor.module.css";

const Editor = () => {
  return (
      <textarea
        class={styles.textarea}
        onInput={(e) => setUserText(e.currentTarget.value)}
      >
        {getUserText()}
      </textarea>
  );
};

export default Editor;
