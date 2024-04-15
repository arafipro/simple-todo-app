import { getTodos } from "@/lib/api";
import TodoForm from "./components/TodoForm";
import TodoTable from "./components/TodoTable";

export const runtime = "edge";

export default async function Home() {
  const todos = await getTodos();
  return (
    <main className="container mx-auto space-y-4">
      <TodoForm />
      <TodoTable todos={todos} />
    </main>
  );
}
