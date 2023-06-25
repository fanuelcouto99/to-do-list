'use client'

interface CountTaskProps {
    numberTask?: number;
    completedTask?: number;
};

export function CountTask({numberTask = 0, completedTask}: CountTaskProps) {
    return (
        <div className="w-[46rem] flex items-center justify-between mt-16">
            <div className="flex items-center gap-2">
                <strong className="text-blue-500 text-sm">Tarefas criadas</strong>
                <span className="text-gray-200 text-xs bg-gray-400 rounded-lg px-2 py-[0.125rem]">{numberTask}</span>
            </div>

            <div className="flex items-center gap-2">
                <strong className="text-purple-500 text-sm">Concluídas</strong>
                <span className="text-gray-200 text-xs bg-gray-400 rounded-lg px-2 py-[0.125rem]">0</span>
            </div>
        </div>
    );
};