'use client'
import { PlusCircle } from "lucide-react";
import { FormEvent, useState } from "react";
import { EmptyToDo } from "./EmptyToDo";
import { ToDoList } from "./ToDoList";

export function Form() {

    const [tasks, setTasks] = useState<string[]>([]);
    const [newTask, setNewTask] = useState('');

    function handleCreateNewTask(event: FormEvent) {
        event.preventDefault();
        setTasks([...tasks, newTask]);
        setNewTask('');
    };

    function deleteTask(taskToDelete: string) {
        const tasksWithoutDeleteOne = tasks.filter(task => {
            return task !== taskToDelete;
        });
        setTasks(tasksWithoutDeleteOne);
    };

    return (
        <div className="flex flex-col items-center justify-center mt-[calc(0px-1.5rem-6px)]">
            <form onSubmit={handleCreateNewTask} className="w-[46rem] gap-8 flex items-center justify-center">
                <input type="text"
                    className="w-[39.875rem] p-4 rounded-lg bg-gray-500 border border-gray-700 placeholder:text-gray-300 text-base leading-6 text-gray-100 focus:border-none focus:ring-1 focus:ring-purple-600"
                    placeholder="Adicione uma nova tarefa"
                    value={newTask}
                    onChange={event => setNewTask(event.target.value)}
                    required
                />

                <button type="submit" className="flex justify-center items-center gap-2 bg-blue-600 p-4 rounded-lg cursor-pointer hover:bg-blue-500 transition-colors">
                    Criar
                    <PlusCircle />
                </button>
            </form>

            {tasks.length === 0 ? <EmptyToDo /> : <ToDoList tasksInserts={tasks} onDeleteTask={deleteTask}/>}
        </div>
    );
};