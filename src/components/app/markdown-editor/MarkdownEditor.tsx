import { createSignal, type Component } from "solid-js"
import { marked } from "marked"
import content from "@shared/content.json"
import styles from "./MarkdownEditor.module.css"

type HtmlRef = HTMLElement | undefined

const MarkdownEditor: Component = () => {
	const [getText, setText] = createSignal("")
	let editorRef: HTMLTextAreaElement | undefined
	let previewRef: HTMLDivElement | undefined
	let isScrolling = false

	function syncScroll(ownRef: HtmlRef, otherRef: HtmlRef) {
		// This is a programmatic scroll. Consume the event and release the lock.
		if (isScrolling) {
			isScrolling = false
			return
		}
		// This is a user-initiated scroll. Acquire the lock and sync the other pane.
		if (ownRef && otherRef) {
			isScrolling = true
			const ownScrollableHeight = ownRef.scrollHeight - ownRef.clientHeight
			const otherScrollableHeight = otherRef.scrollHeight - otherRef.clientHeight
			const scrollFactor = ownRef.scrollTop / ownScrollableHeight
			otherRef.scrollTop = scrollFactor * otherScrollableHeight
		}
	}

	return (
		<div class={styles.page}>
			<div class={styles.editorPreviewContainer}>
				<textarea // Editor
					ref={editorRef}
					class={styles.editorBox}
					placeholder={content.about}
					spellcheck={false}
					onInput={e => setText(e.currentTarget.value)}
					onScroll={() => syncScroll(editorRef, previewRef)}
				/>
				<div // Preview
					ref={previewRef}
					class={styles.previewBox}
					innerHTML={marked.parse(getText(), { async: false })}
					onScroll={() => syncScroll(previewRef, editorRef)}
				/>
			</div>
			<button
				class={styles.printButton}
				onClick={() => {
					window.print()
				}}
			>
				<p class={styles.printButtonText}>Save</p>
			</button>
		</div>
	)
}

export default MarkdownEditor
