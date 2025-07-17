import "@shared/colors.css"
import styles from "./App.module.css"
import MarkdownEditor from "./markdown-editor/MarkdownEditor"

const App = () => {
	return (
		<div class={styles.page}>
			<MarkdownEditor />
		</div>
	)
}

export default App
