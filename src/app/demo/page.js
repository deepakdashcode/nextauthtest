"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css"; // Import Quill styles

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

export default function DemoPage() {
  const [content, setContent] = useState("");
  const router = useRouter();
  const [htmlInput, setHtmlInput] = useState('');

  useEffect(() => {
    const savedContent = localStorage.getItem("editorContent");
    
    console.log("Loaded Content:", savedContent); // Debugging output
    if (savedContent) {
      setContent(savedContent);
      setHtmlInput(savedContent)
    }
  }, []);


  return (
    <div className="text-black min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-2xl text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Saved Content</h2>
        <button 
          onClick={() => router.push('/editor')} 
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Go to Editor
        </button>
        <ReactQuill value={content} readOnly={true}/>
      
    </div>

  </div>
  
  );
}
