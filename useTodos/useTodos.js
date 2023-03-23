import { useReducer, useEffect } from "react";
import { todoReducer } from "./todoReducer";

const initialState = [];

const init = () => {
    //si se intenta parsear un valor null, se devuelve un array vació
    return JSON.parse(localStorage.getItem("todos")) || [];
}

export const useTodos = () => {

  const[ todos, dispatch ] = useReducer(todoReducer, [], init);

    //AÑADIR ELEMENTOS
    //cada vez que se añada, modifique o elimine un elemento, se almacena automáticamente en el localstorage
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const handleNewTodo = (todo) => {
        const action = {
            type: "[TODO] Add Todo",
            payload: todo
        }

        dispatch(action);
    }

    //ELIMINAR ELEMENTOS
    const handleDeleteTodo = (id) => {
        dispatch({
            type: "[TODO] Remove Todo",
            payload: id
        });
    }

    //TACHAR ELEMENTOS
    const handleToggleTodo = (id) => {
        dispatch({
            type: "[TODO] Toggle Todo",
            payload: id
        });
    }

    return {
      todos,
      todosCount: todos.length,
      pendingTodosCount: todos.filter(todo => !todo.done).length,
      handleNewTodo,
      handleDeleteTodo,
      handleToggleTodo
    }
}
