"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function DemoPage() {
  const [content, setContent] = useState("");
  const router = useRouter();

  useEffect(() => {
    const savedContent = localStorage.getItem("editorContent");
    if (savedContent) {
      setContent(savedContent);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-2xl text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Saved Content</h2>
        <button 
          onClick={() => router.push('/editor')} 
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Go to Editor
        </button>
        <div 
          className="mt-6 p-4 border rounded-lg bg-gray-50 text-left text-black"
          dangerouslySetInnerHTML={{ __html: content }} 
        />
      </div>
    </div>
  );
}
