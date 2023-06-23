import { Trash2 } from "lucide-react";

export function ToDoList() {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="w-[46rem] mt-6 bg-gray-500 p-4 rounded-lg flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <input type="checkbox" name="toDoItem" id="toDoItem" className="flex self-start"/>
                    <span className="text-gray-100 text-sm w-[39.5rem] self-start">
                        Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
                    </span>
                </div>
                <Trash2 size={18} color="#808080" className="cursor-pointer hover:stroke-red-500 transition-colors self-start" />
            </div>
        </div>
    );
};