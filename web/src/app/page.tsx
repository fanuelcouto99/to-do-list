import { Form } from "@/components/Form";
import { Header } from "../components/Header";
import { EmptyToDo } from "@/components/EmptyToDo";
import { ToDoList } from "@/components/ToDoList";

export default function Home() {
  return (
    <div className="bg-gray-600">
      <Header />

      <Form />

      {/* <EmptyToDo /> */}

      <ToDoList />
    </div>
  );
};