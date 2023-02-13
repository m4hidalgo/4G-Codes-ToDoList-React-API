import React, { useState, useEffect } from "react";
import FormToDo from "./formToDo.jsx";
import TaskList from "./taskList.jsx";
import { updateList } from "../updateList.js";
import { getList } from "../getList.js";

const Container = () => {
    const [list, setList] = useState([]);

    const addTodo = (element) => {
        const newTodos = [...list, element];
        setList(newTodos);
    };

    const removeTodo = (index) => {
        const newTodos = [...list];
        newTodos.splice(index, 1);
        setList(newTodos);
      };

    const removeAll = () => {
        const newTodos = [...list];
        newTodos.splice(0, newTodos.length);
        setList([{label: "...", done: false}]);
    }

    useEffect(() => {
        getList().then(response => setList(response))
    }, []);

    useEffect(() => {
        updateList(list);
    }, [list])

    return (<div className="container shadow p-3 mb-5 bg-white rounded">

        <FormToDo addTodo={addTodo} />
        <div>
          {list.map((todo, index) => {

            if (index !== 0) {
            
                return (<TaskList
                    key={index}
                    index={index}
                    todo={todo}
                    removeTodo={removeTodo}
                />)
              
            }})}
        </div>
        <div className="row">
            <div className="col">
                <span 
                    style={{color: "grey", fontStyle: "italic", fontSize: .75+"em"}}>
                        {`${list.length-1} items left`}
                </span>
            </div>

            <div className="col-2">
                <button 
                    type="button" 
                    className="btn btn-outline-danger p-0" 
                    style={{display: "inline", fontSize: .75+"em"}}
                    onClick={() => removeAll()}>
                        Delete All
                </button>
            </div>
        </div>
    </div>);
}

export default Container;