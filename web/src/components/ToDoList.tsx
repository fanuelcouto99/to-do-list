'use client'
import { Trash2 } from "lucide-react";
import { CountTask } from "./CountTask";
import { useEffect, useState } from "react";

interface TasksProps {
    id: string;
    title: string;
    isCompleted: boolean;
    onToggleTask: (idTask: string) => void;
    onDeleteTask: (idTask: string) => void;
};

export function ToDoList({ id, title, isCompleted, onToggleTask, onDeleteTask }: TasksProps) {

    function handleDeleteTask(task: string) {
        onDeleteTask(task);
    };

    return (
        <div className="flex flex-col items-center justify-center">

            <div className="w-[46rem] bg-gray-500 p-4 rounded-lg flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <input
                        type="checkbox"
                        name="toDoItem"
                        id="toDoItem"
                        value="true"
                        defaultChecked={isCompleted}
                        onClick={() => onToggleTask(id)}
                        className="flex self-start w-5 h-5 rounded-full mt-1 bg-transparent border border-blue-500 hover:border-blue-600 cursor-pointer hover:bg-blue-600/20 transition-colors focus:ring-offset-0 focus:ring-0 checked:bg-purple-600 hover:checked:bg-purple-500"
                    />
                    <span className={`text-sm w-[39.5rem] transition-all ${!isCompleted === false ? 'text-gray-300 line-through' : 'text-gray-100'}`}>
                        {title}
                    </span>
                </div>
                <Trash2 size={18} color="#808080" onClick={() => handleDeleteTask(id)} className="cursor-pointer hover:stroke-red-500 transition-colors self-start" />
            </div>

            <div className="mt-4" />
        </div>
    );
};