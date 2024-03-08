import { FilterValue } from "../const"
import { ListOfTodos } from "../types"
import { Filters } from "./Filters"

interface Props {
    activeCounts: number
    completedCount: number
    filterSelected: FilterValue
    onClearCompleted: () => void
    handleFilterChange: (filter: FilterValue) => void
}

export const Footer: React.FC<Props> = ({
    activeCounts = 0,
    completedCount = 0,
    filterSelected,
    onClearCompleted,
    handleFilterChange
}) =>{
    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{activeCounts}</strong> Tareas pendientes
            </span>

            <Filters 
                filterSelected={filterSelected}
                onFilterChange={handleFilterChange}
            />
            {
                completedCount > 0 && (
                    <button
                    className="clear-completed"
                    onClick={onClearCompleted}
                    >
                        Borrar Completados
                    </button>
                )
            }
        </footer>
    )
}