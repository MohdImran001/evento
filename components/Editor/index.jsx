import { useState } from "react";
import dynamic from "next/dynamic";

import "react-quill/dist/quill.snow.css";

const QuillNoSSRWrapper = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

export default function Editor() {
  const [value, setValue] = useState("");
  return (
    <QuillNoSSRWrapper
      theme="snow"
      onChange={(content, delta, source, editor) => {
        console.log("Content - ", content);
        console.log("Editor - ", editor, JSON.stringify(editor.getContents()));
      }}
      defaultValue={{
        ops: [
          { insert: "hello world!!" },
          { attributes: { header: 1 }, insert: "\n" },
        ],
      }}
    />
  );
}
