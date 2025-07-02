import Editor from "./editor/Editor";
import Preview from "./preview/Preview";
import styles from "./App.module.css";

const App = () => {
  return (
    <div class={styles.page}>
      <div class={styles.container}>
        <Editor />
        <Preview />
      </div>
    </div>
  );
};

export default App;
