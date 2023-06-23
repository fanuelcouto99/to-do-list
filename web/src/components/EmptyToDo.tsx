import Image from "next/image";
import clipboard from '../assets/clipboard.svg';

export function EmptyToDo() {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="w-[46rem] flex items-center justify-between mt-16">
                <div className="flex items-center gap-2">
                    <strong className="text-blue-500 text-sm">Tarefas criadas</strong>
                    <span className="text-gray-200 text-xs bg-gray-400 rounded-lg px-2 py-[0.125rem]">0</span>
                </div>

                <div className="flex items-center gap-2">
                    <strong className="text-purple-500 text-sm">Concluídas</strong>
                    <span className="text-gray-200 text-xs bg-gray-400 rounded-lg px-2 py-[0.125rem]">0</span>
                </div>
            </div>

            <div className="mt-6 flex flex-col items-center justify-center w-[46rem] py-16 px-6 text-base leading-6 text-gray-300 border-t border-gray-400 rounded-lg">

                <Image src={clipboard} alt="" className="mb-4"/>

                <strong>
                    Você ainda não tem tarefas cadastradas
                </strong>

                <span>
                    Crie tarefas e organize seus itens a fazer
                </span>
            </div>
        </div>
    );
};