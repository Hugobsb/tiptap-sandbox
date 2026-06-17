"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import classnames from "classnames";

import styles from "./Editor.module.css";

export default function Editor() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: `
      <h1>Welcome to Tiptap Sandbox 🚀</h1>

      <p>
        Experiment with rich text editing powered by Tiptap.
      </p>

      <ul>
        <li>Custom extensions</li>
        <li>Realtime collaboration</li>
        <li>Markdown support</li>
      </ul>
    `,
    immediatelyRender: false,
  });

  if (!editor) {
    return null;
  }

  return (
    <main className={styles.page}>
      <div className={styles.editorContainer}>
        <div className={styles.toolbar}>
          <ToolbarButton
            active={editor.isActive("bold")}
            onClick={() =>
              editor.chain().focus().toggleBold().run()
            }
          >
            B
          </ToolbarButton>

          <ToolbarButton
            active={editor.isActive("italic")}
            onClick={() =>
              editor.chain().focus().toggleItalic().run()
            }
          >
            I
          </ToolbarButton>

          <ToolbarButton
            active={editor.isActive("strike")}
            onClick={() =>
              editor.chain().focus().toggleStrike().run()
            }
          >
            S
          </ToolbarButton>

          <div className={styles.separator} />

          <ToolbarButton
            active={editor.isActive("heading", { level: 1 })}
            onClick={() =>
              editor
                .chain()
                .focus()
                .toggleHeading({ level: 1 })
                .run()
            }
          >
            H1
          </ToolbarButton>

          <ToolbarButton
            active={editor.isActive("heading", { level: 2 })}
            onClick={() =>
              editor
                .chain()
                .focus()
                .toggleHeading({ level: 2 })
                .run()
            }
          >
            H2
          </ToolbarButton>

          <div className={styles.separator} />

          <ToolbarButton
            active={editor.isActive("bulletList")}
            onClick={() =>
              editor.chain().focus().toggleBulletList().run()
            }
          >
            • List
          </ToolbarButton>

          <ToolbarButton
            active={editor.isActive("orderedList")}
            onClick={() =>
              editor.chain().focus().toggleOrderedList().run()
            }
          >
            1. List
          </ToolbarButton>

          <ToolbarButton
            active={editor.isActive("blockquote")}
            onClick={() =>
              editor.chain().focus().toggleBlockquote().run()
            }
          >
            Quote
          </ToolbarButton>

          <div className={styles.separator} />

          <ToolbarButton
            onClick={() =>
              editor.chain().focus().undo().run()
            }
          >
            ↶
          </ToolbarButton>

          <ToolbarButton
            onClick={() =>
              editor.chain().focus().redo().run()
            }
          >
            ↷
          </ToolbarButton>
        </div>

        <EditorContent
          editor={editor}
          className={styles.editor}
        />
      </div>
    </main>
  );
}

type ToolbarButtonProps = {
  children: React.ReactNode;
  active?: boolean;
  onClick: () => void;
};

function ToolbarButton({
  children,
  active = false,
  onClick,
}: ToolbarButtonProps) {
  return (
    <button
      type="button"
      className={classnames(styles.button, {
        [styles.activeButton]: active,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
