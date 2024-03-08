import { type TodoIdComplete, type TodoId, type Todo as TodoType } from "../types"

interface Props extends TodoType {
    onRemoveTodo: ({id}: TodoId) => void
    onToggleCompleteTodo: ({id, completed}: TodoIdComplete) => void
}
export const Todo: React.FC<Props> = ({ id, title, completed, onRemoveTodo, onToggleCompleteTodo }) => {

    return (
        <div className="view">
            <input
                className="toggle"
                checked={completed}
                type="checkbox"
                onChange={(e) => { 
                    onToggleCompleteTodo({id, completed: e.target.checked})
                }}
            />
            <label>{title}</label>
            <button
                className="destroy"
                onClick={() => { onRemoveTodo({id}) }}
            > 

            </button>
        </div>
    )

}