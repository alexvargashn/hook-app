
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';
import { useTodos } from '../hooks/useTodos';


export const TodoApp = () => {

    const {todos, todosCounter, pendingTodosCount, handleDeleteTodo, handleToggleTodo, handleNewTodo} = useTodos();

    return (
        <div className="container">
            <div className="row mt-2">
                <h1>TodoApp: {todosCounter} - <small>Pendientes: {pendingTodosCount}</small></h1>
                <hr />
            </div>
            <div className="row mt-1">
                <div className="col-7">
                    <TodoList 
                        todos={todos} 
                        onDeleteTodo={ handleDeleteTodo } 
                        onToggleTodo={handleToggleTodo}
                    />
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd onNewTodo={ handleNewTodo } />
                </div>
            </div>
        </div>
    )
}
