export function EmptyToDo() {
    return (
        <div className="flex items-center justify-center">
            <div className="w-[46rem] flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <strong className="text-blue-500 text-sm">Tarefas criadas</strong>
                    <span className="text-gray-200 text-xs bg-gray-400 rounded-lg">0</span>
                </div>

                <div className="flex items-center gap-2">
                    <strong className="text-purple-500 text-sm">Concluídas</strong>
                    <span className="text-gray-200 text-xs bg-gray-400 rounded-lg">0</span>
                </div>
            </div>
        </div>
    );
};