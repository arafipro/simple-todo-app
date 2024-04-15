"use client";

import { createTodo } from "@/lib/api";
import { useRouter } from "next/navigation";
import { FormEvent, useRef } from "react";

const TodoForm = () => {
  const router = useRouter();
  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLInputElement>(null);
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const title = titleRef.current!.value;
    const content = contentRef.current!.value;
    if (!title || !content)
      return console.log("タイトル、または内容を入力してください");
    console.log(`タイトル：${title} 内容：${content}`);
    await createTodo({ title, content });
    titleRef.current!.value = "";
    contentRef.current!.value = "";
    router.refresh();
  };
  return (
    <form className="flex flex-col w-full" onSubmit={handleSubmit}>
      <label>タイトル</label>
      <input type="text" className="border-2 rounded-lg p-1" ref={titleRef} />
      <label>内容</label>
      <input type="text" className="border-2 rounded-lg p-1" ref={contentRef} />
      <div className="flex space-x-4 mt-4">
        <button
          type="submit"
          className="bg-black text-white rounded-lg w-full p-1"
        >
          登録
        </button>
        <button
          type="reset"
          className="bg-white text-black border-2 border-black/30 rounded-lg w-full p-1"
        >
          リセット
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
