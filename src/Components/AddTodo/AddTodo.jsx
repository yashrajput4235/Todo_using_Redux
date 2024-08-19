import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../Features/Todo/TodoSlice'; // Adjust the import path if needed
import './AddTodo.css'; // Make sure to import the CSS file

function AddTodo() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();
       
        dispatch(addTodo(input));
        setInput('');
    };

    return (
        <form onSubmit={addTodoHandler} className="Form1">
            <input
                type="text"
                className="Input1"
                placeholder="Enter Todo.... "
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" className="btn1">Add Todo</button>
        </form>
    );
}

export default AddTodo;
