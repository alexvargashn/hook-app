import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const init = () => {
    return localStorage.getItem('todos') ?
        JSON.parse(localStorage.getItem('todos')) :
        [];
}

export const useTodos = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos) || []);
    }, [todos])


    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }

        dispatch(action);
        increment();
    }

    const handleDeleteTodo = (id) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        });
        decrement();
    }

    const handleToggleTodo = (id) => {
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        });

    }

    return {
        todos, 
        todosCounter: todos.length, 
        pendingTodosCount: todos.filter( t => !t.done).length,
        handleDeleteTodo, 
        handleToggleTodo, 
        handleNewTodo
    }
}
