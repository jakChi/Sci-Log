import MarkdownRenderer from "./markdown-renderer";
import markdownStyles from "./markdown-styles.module.css";

type Props = {
  content: string; // Always ensure that the content prop is sanitized before passing it to this component to avoid security risks.
};

export function PostBody({ content }: Props) {
  return (
    <div className="max-w-3xl mx-auto">
      <div className={markdownStyles["markdown"]}>
        <MarkdownRenderer content={content} />
      </div>
    </div>
  );
}
