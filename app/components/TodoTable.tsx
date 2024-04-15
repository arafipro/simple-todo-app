"use client";

import { deleteTodo } from "@/lib/api";
import { useRouter } from "next/navigation";

const TodoTable = ({ todos }: { todos: Todo[] }) => {
  const router = useRouter();
  return (
    <table className="w-full border-y-2 border-black">
      <thead className="border-b border-black/50">
        <tr>
          <th>タイトル</th>
          <th>内容</th>
          <th></th>
        </tr>
      </thead>
      <tbody className="text-center">
        {todos.map((todo) => (
          <tr key={todo.id}>
            <td>{todo.title}</td>
            <td>{todo.content}</td>
            <td>
              <button
                onClick={async () => {
                  await deleteTodo(todo.id!);
                  router.refresh();
                }}
                className="bg-red-500 text-white rounded-lg p-1 w-full"
              >
                削除
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TodoTable;
