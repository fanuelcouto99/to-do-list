import { Trash2 } from "lucide-react";

export function ToDoList() {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="w-[46rem] mt-6 bg-gray-500 p-4 rounded-lg flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <input
                        type="checkbox"
                        name="toDoItem"
                        id="toDoItem"
                        className="flex self-start w-5 h-5 rounded-full mt-1 bg-transparent border border-blue-500 hover:border-blue-600 cursor-pointer hover:bg-blue-600/20 transition-colors focus:ring-offset-0 focus:ring-0 checked:bg-purple-600 hover:checked:bg-purple-500"
                    />
                    <span className="text-gray-100 text-sm w-[39.5rem]">
                        Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
                    </span>
                </div>
                <Trash2 size={18} color="#808080" className="cursor-pointer hover:stroke-red-500 transition-colors self-start" />
            </div>

            <div className="w-[46rem] mt-6 bg-gray-500 p-4 rounded-lg flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <input
                        type="checkbox"
                        name="toDoItem"
                        id="toDoItem"
                        className="flex self-start w-5 h-5 rounded-full mt-1 bg-transparent border border-blue-500 hover:border-blue-600 cursor-pointer hover:bg-blue-600/20 transition-colors focus:ring-offset-0 focus:ring-0 checked:bg-purple-600 hover:checked:bg-purple-500"
                    />
                    <span className="text-gray-100 text-sm w-[39.5rem]">
                        Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
                    </span>
                </div>
                <Trash2 size={18} color="#808080" className="cursor-pointer hover:stroke-red-500 transition-colors self-start" />
            </div>

            <div className="w-[46rem] mt-6 bg-gray-500 p-4 rounded-lg flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <input
                        type="checkbox"
                        name="toDoItem"
                        id="toDoItem"
                        checked
                        className="flex self-start w-5 h-5 rounded-full mt-1 bg-transparent border border-blue-500 hover:border-blue-600 cursor-pointer hover:bg-blue-600/20 transition-colors focus:ring-offset-0 focus:ring-0 checked:bg-purple-600 hover:checked:bg-purple-500"
                    />
                    <span className="text-gray-300 line-through text-sm w-[39.5rem]">
                        Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
                    </span>
                </div>
                <Trash2 size={18} color="#808080" className="cursor-pointer hover:stroke-red-500 transition-colors self-start" />
            </div>
        </div>
    );
};