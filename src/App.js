//import hooks
import TodoList from "./TodoList";
import "./styles/App.css";

function App() {
    return (
        //TODO: Add todo list (maybe form)
        <>
        <TodoList />
        <div class="paper">
            <div class="lines">
                <div class="text">
                    <form>
                        <h1>Todo List</h1>
                        <input type="text" placeholder="Add a todo"/>
                        <button>Clear list</button>
                        <p>some text</p>
                    </form>
                </div>
            </div>
            <div class="holes hole-top"></div>
            <div class="holes hole-middle"></div>
            <div class="holes hole-bottom"></div>
        </div>
        </>
    )
}

export default App;
