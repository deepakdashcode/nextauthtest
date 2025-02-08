"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

export default function RichTextEditor() {
  const [content, setContent] = useState("");

  useEffect(() => {
    const savedContent = localStorage.getItem("editorContent");
    if (savedContent) {
      setContent(savedContent);
    }
  }, []);

  const handleChange = (value) => {
    setContent(value);
    localStorage.setItem("editorContent", value);
  };

  return (
    <div>
      <ReactQuill value={content} onChange={handleChange} />
    </div>
  );
}
