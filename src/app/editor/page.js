"use client";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

export default function EditorPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [content, setContent] = useState("");

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  useEffect(() => {
    const savedContent = localStorage.getItem("editorContent");
    if (savedContent) {
      setContent(savedContent);
    }
  }, []);

  const handleChange = (value) => {
    setContent(value);
    localStorage.setItem("editorContent", value);
    console.log(value)
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-2xl text-center">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Welcome, {session?.user?.name}</h2>
        <div className="flex justify-center gap-4 mb-4">
          <button 
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition"
            onClick={() => signOut()}
          >
            Logout
          </button>
          <button 
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition"
            onClick={() => { router.push('/demo'); }}
          >
            View Demo Page
          </button>
        </div>
        <ReactQuill className="border rounded-lg text-black" value={content} onChange={handleChange} />
      </div>
    </div>
  );
}
