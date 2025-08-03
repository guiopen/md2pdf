# md2pdf

A straightforward tool for converting Markdown to PDF. Write your Markdown, see a live preview, and save it as a PDF.

## Motivation

This project started out of a simple need: an easy way to convert AI-generated responses from Markdown to PDF, whether on a computer or a smartphone. I created this website to streamline that process for my own workflow.

It also served as an opportunity to learn the basics of web development. Although I had experience with JavaScript through React Native, I had never explored web development before.

## How to Use

1.  Open the [md2pdf website](https://md2pdf.org/).
2.  Write or paste your Markdown into the editor on the left.
3.  See the live preview on the right. The panes scroll in sync, so you won't lose your place.
4.  Click the "Save" button to open the print dialog and save the document as a PDF.

## Technologies Used

This project is built with a few key libraries:

-   **[Astro](https://astro.build/)**: The web framework.
-   **[Marked](https://marked.js.org/)**: For parsing Markdown.
-   **[DOMPurify](https://github.com/cure53/DOMPurify)**: To sanitize the HTML output and prevent XSS attacks.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.