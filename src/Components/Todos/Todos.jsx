import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { removeTodo } from '../../Features/Todo/TodoSlice';
import './Todo.css'
function Todos() {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    return (
        <div className="container">
            <h2>Todos</h2>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.text}
                        <button onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todos;