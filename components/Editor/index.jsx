import { useState } from "react";
import { useFormikContext } from "formik";
import dynamic from "next/dynamic";
const QuillNoSSRWrapper = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});
import "react-quill/dist/quill.snow.css";

export default function Editor() {
  const { setFieldValue } = useFormikContext();

  return (
    <QuillNoSSRWrapper
      theme="snow"
      onChange={(content, delta, source, editor) => {
        console.log(editor.getContents());
        setFieldValue("about", JSON.stringify(editor.getContents()));
      }}
      // defaultValue={{
      //   ops: [
      //     { insert: "hello world!!" },
      //     { attributes: { header: 1 }, insert: "\n" },
      //   ],
      // }}
    />
  );
}
