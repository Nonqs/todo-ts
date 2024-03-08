import { type TodoTitle } from "../types"
import { CreateTodo } from "./CreateTodo"


interface Props {
    onAddTodo: ({title}: TodoTitle) => void
}

export const Header: React.FC<Props> = ({ onAddTodo }) =>{
    return(
        <header>
            <h1>Todo 
                <img 
                style={{width: "60px" , height: "auto"}} 
                src="https://www.tutorialsteacher.com/Content/images/home/typescript.svg"
                />
            </h1>
            <CreateTodo
             saveTodo={onAddTodo}
            />
        </header>
    )
}