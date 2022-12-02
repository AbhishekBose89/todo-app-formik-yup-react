import { useNavigate } from "react-router-dom";
import './TodoList.css'


let TodoList = () => {

    let navigator = useNavigate()
    let clickHandler = () => {
        navigator("/login", true)
    }

    return (<div>
        <div className="todo-item">
            <h3 className="todo-heading"> TodoList</h3>
            <div>
            <button onClick={clickHandler} id='logout-btn'>Log out</button>
            </div>
        </div>
        <div className="todo-form">
        <form>
                <div className="todo-input">
                    <label  id='todo-label' htmlFor='task'>Task :</label>
                    <input type="text" id="task" name="task" placeholder="Enter Your Task"/>
                </div>
                <div className="todo-buttons">
                    <button type='submit' id='addtask-btn' className="button">Add Task</button>
                    <button id="delete-btn" className="button"> Delete Task</button>
                </div>
            </form>
        </div>
    </div>)
}

export default TodoList;