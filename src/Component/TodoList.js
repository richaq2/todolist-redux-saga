
import {useSelector} from 'react-redux';
import TodoItem from './Todoitem';
// import TodoItem from './Todoitem';

const TodoList = () => {
    let todos = useSelector((state)=> state.app);
    console.log("todos",todos)
    return (
        <>
        <div className='my-3'>
            {todos.map((todo)=>{
                return <TodoItem key ={todo.id} todo={todo}/>
            })}
        </div>
        </>
    )
    
}
export default TodoList;