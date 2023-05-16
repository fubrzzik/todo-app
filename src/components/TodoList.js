import React from 'react';

const TodoList = ({ todos, deleteTodo }) => {
    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>
                    <span>
                        {todo.text}
                    </span>
                    <button onClick={() => deleteTodo(todo.id)}>-</button>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;