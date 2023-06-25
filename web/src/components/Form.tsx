'use client'
import { PlusCircle } from "lucide-react";
import { FormEvent, useState } from "react";
import { EmptyToDo } from "./EmptyToDo";
import { ToDoList } from "./ToDoList";
import { v4 as uuid } from 'uuid';
import { CountTask } from "./CountTask";

interface TaskProps {
    id: string;
    title: string;
    isCompleted: boolean;
};

export function Form() {

    const [tasks, setTasks] = useState<TaskProps[]>([]);
    const [newTask, setNewTask] = useState('');

    function handleCreateNewTask(event: FormEvent) {
        event.preventDefault();
        setTasks([...tasks,
        {
            id: uuid(),
            title: newTask,
            isCompleted: false
        }
        ]);
        setNewTask('');
        console.log(tasks)
    };

    function deleteTask(taskToDelete: string) {
        const tasksWithoutDeleteOne = tasks.filter(task => {
            return task.id !== taskToDelete;
        });
        setTasks(tasksWithoutDeleteOne);
    };

    function handleToggleTaskComplet(idTask: string) {
        const tasksCompleted = tasks.map((task) => {
            if (task.id === idTask) {
                task.isCompleted = !task.isCompleted;
            };

            return task;
        });
        setTasks(tasksCompleted);
    };

    const tasksCompleted = tasks.filter((task) => {
        return task.isCompleted !== false;
    });

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

            <CountTask numberTask={tasks.length} completedTask={tasksCompleted.length} />

            {tasks.length === 0 ? <EmptyToDo /> : tasks.map((task) => {
                return (
                    <ToDoList
                        key={task.id}
                        id={task.id}
                        title={task.title}
                        isCompleted={task.isCompleted}
                        onToggleTask={handleToggleTaskComplet}
                        onDeleteTask={deleteTask}
                    />
                )
            })}
        </div>
    );
};