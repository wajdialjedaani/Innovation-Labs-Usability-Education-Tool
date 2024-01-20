import styles from "@/styles/Textbook.module.scss"
import Markdown from 'react-markdown';
const fs = require('fs');

export default function Textbook({ markdownSrc }) {
  let markdown;

  try {
    markdown = fs.readFileSync(`${process.env.BASE_PATH}${markdownSrc}`, 'utf-8');
    console.log(markdown);
  } catch (error) {
    console.error(error);
  }

  if (markdown) {
    console.log('erm');
    return (
      <Markdown className={styles.markdownBody}>{markdown}</Markdown>
    );
  } else {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }
}