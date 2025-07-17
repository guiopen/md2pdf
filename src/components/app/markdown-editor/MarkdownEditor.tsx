import { createSignal } from "solid-js"
import styles from "./MarkdownEditor.module.css"
import { marked } from "marked"

const MarkdownEditor = () => {
	const [getText, setText] = createSignal<string>("")

	return (
		<div class={styles.container}>
			<textarea // Editor
				class={styles.editorBox}
				spellcheck={false}
				onInput={obj => setText(obj.currentTarget.value)}
			/>
			<div // Preview
				class={styles.previewBox}
				innerHTML={marked(getText(), { async: false })}
			/>
		</div>
	)
}

export default MarkdownEditor
