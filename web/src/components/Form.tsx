import { PlusCircle } from "lucide-react";


export function Form() {
    return (
        <div className="flex items-center justify-center mt-[calc(0px-1.5rem-6px)]">
            <form className="w-[46rem] gap-8 flex items-center justify-center">
                <input type="text"
                    className="w-[39.875rem] p-4 rounded-lg bg-gray-500 border border-gray-700 placeholder:text-gray-300 text-base leading-6 text-gray-100 focus:border-none focus:ring-1 focus:ring-purple-600"
                    placeholder="Adicione uma nova tarefa" />

                <button type="submit" className="flex justify-center items-center gap-2 bg-blue-600 p-4 rounded-lg cursor-pointer hover:bg-blue-500 transition-colors">
                    Criar
                    <PlusCircle />
                </button>
            </form>
        </div>
    );
};