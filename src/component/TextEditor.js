"use client";
import React from "react";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";

// Dynamically import ReactQuill to prevent SSR issues in Next.js
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, false] }], // Headings
    ["bold", "italic", "underline", "strike"], // Text styles
    [{ list: "ordered" }, { list: "bullet" }], // ✅ Correct list format
    [{ color: [] }, { background: [] }], // ✅ Foreground & background color
    ["link", "image"], // ✅ Links & images (via URL)
    [{ align: [] }], // ✅ Text alignment
    ["clean"], // ✅ Clear formatting
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "list", // ✅ Keep only "list", NOT "bullet"
  "color",
  "background",
  "link",
  "image",
  "align",
];

const TextEditor = ({ value, onChange, className }) => {
  return (
    <ReactQuill
      className={`border rounded-lg text-black ${className}`}
      value={value}
      onChange={onChange}
      modules={modules}
      formats={formats}
      theme="snow"
    />
  );
};

export default TextEditor;
