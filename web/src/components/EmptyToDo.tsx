import Image from "next/image";
import clipboard from '../assets/clipboard.svg';
import { CountTask } from "./CountTask";

export function EmptyToDo() {
    return (
        <div className="flex flex-col items-center justify-center">
            <CountTask />
            
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