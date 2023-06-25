'use client'
import { Trash2 } from "lucide-react";
import { CountTask } from "./CountTask";
import { useEffect, useState } from "react";

interface TasksProps {
    tasksInserts: string[];
    onDeleteTask: (task: string) => void;
};

export function ToDoList({ tasksInserts, onDeleteTask }: TasksProps) {

    const [isChecked, setIsChecked] = useState(false);

    function handleDeleteTask(task: string) {
        onDeleteTask(task);
    };

    return (
        <div className="flex flex-col items-center justify-center">

            <CountTask numberTask={tasksInserts.length}/>

            {tasksInserts.map((taskInsert, index) => {
                return (
                    <>
                        <div key={index+1} className="w-[46rem] mt-6 bg-gray-500 p-4 rounded-lg flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <input
                                    type="checkbox"
                                    name="toDoItem"
                                    id="toDoItem"
                                    value="true"
                                    onChange={event => setIsChecked(event.target.checked)}
                                    className="flex self-start w-5 h-5 rounded-full mt-1 bg-transparent border border-blue-500 hover:border-blue-600 cursor-pointer hover:bg-blue-600/20 transition-colors focus:ring-offset-0 focus:ring-0 checked:bg-purple-600 hover:checked:bg-purple-500"
                                />
                                <span className={`text-sm w-[39.5rem] transition-all ${isChecked ? 'text-gray-300 line-through' : 'text-gray-100'}`}>
                                    {taskInsert}
                                </span>
                            </div>
                            <Trash2 size={18} color="#808080" onClick={() => handleDeleteTask(taskInsert)} className="cursor-pointer hover:stroke-red-500 transition-colors self-start" />
                        </div>
                    </>
                )
            })}
            <div className="mt-4"/>
        </div>
    );
};