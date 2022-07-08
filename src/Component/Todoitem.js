import React   from 'react';
import {deleteTodo} from '../redux/app.actions';
import { useDispatch } from 'react-redux';
import {Button} from 'antd';

const TodoItem = ({todo})=> {
    console.log("todo=>",todo)
    const dispatch = useDispatch();
return (
    <>
    <div className=''>
        
        <div>
            <div><h4>#{Math.trunc(todo.id*10)}&nbsp;{todo.name}</h4><p>{todo.description}&nbsp;{todo.start_date}&nbsp;{todo.end_date}&nbsp;{todo.assignes}</p>
            <Button type='primary'
        onClick={()=> dispatch(deleteTodo({id:todo.id}))} 
        danger
        >
           Delete </Button>
            </div>
            
        
        </div>
        
    </div>
    </>
)
}

export default TodoItem;