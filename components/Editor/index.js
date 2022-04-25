import dynamic from "next/dynamic";
const QuillNoSSRWrapper = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});
import "react-quill/dist/quill.bubble.css";

export default function ReadOnlyEditor({ content }) {
  return (
    <QuillNoSSRWrapper
      defaultValue={JSON.parse(content)}
      theme="bubble"
      readOnly
    />
  );
}
