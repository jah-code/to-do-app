import React from 'react';

const Todo = ({text, todos, setTodos, todo}) => {
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    };

    const completeHandler = () => {
        setTodos(
            todos.map((item) => {
                if (item.id === todo.id) {
                    return {
                        ...item,
                        completed: !item.completed,
                    };
                }
                return item;
            })
        );
    };

    return (
        <div className="col-sm-3">
            <div className="todo">
                <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
                <div className="list-btns">
                    <button onClick={completeHandler} className="btn complete-btn btn-sm">
                        <i className="fa fa-check"></i>
                    </button>
                    <button onClick={deleteHandler} className="btn trash-btn btn-sm">
                        <i className="fa fa-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Todo;