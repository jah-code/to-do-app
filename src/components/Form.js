import React from "react";

const Form = ({inputText, setInputText, todos, setTodos, setStatus}) => {
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };

    const SubmitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, {text: inputText, completed: false, id: Math.random() * 10}
        ])
        setInputText("");
    };

    const statusHandler = (e) => {
        setStatus(e.target.value);
    }

    return (
        <form>
            <div className="row">
                <div className="col-sm-8">
                    <div class="input-group mb-3">
                        <input value={inputText} onChange={inputTextHandler} type="text" className="form-control todo-input" placeholder="Add your task here" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                        <button onClick={SubmitTodoHandler} className="btn btn-outline-secondary todo-btn" type="submit" id="button-addon1"><i className="fa fa-plus"></i></button>
                    </div>
                </div>
           
                <div className="col-sm-4">
                    <select onChange={statusHandler} className="form-control select-picker">
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </div>
        </form>
    );
}

export default Form;