import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import { addTodo } from "../redux/app.actions";
import {Button,Input}from 'antd';
const TodoInput = ()=> {
    const [ name,setName] = useState('');
    const [ description,setDescription] = useState('');
    const [ start_date,setStart_date] = useState(new Date());
    const [ end_date,setEnd_date] = useState(new Date());
    const [ assignes,setAssignes] = useState('');
    let dispatch = useDispatch();
    const handleAddTodo = () => {
dispatch(addTodo({
    id:Math.random(),
    name,
    description,
    start_date,
    end_date,
    assignes,
  
}));
setName('');
    }
    return(
        <>
        <div className='row m-2'>
            <label>Title</label>
            <Input 
            type='text'
            style={{width:'200px'}}
            onChange = {(e)=>setName(e.target.value)}
            value ={name}
            className = "col-8"
            placeholder='title...'
            />&nbsp;&nbsp;&nbsp;
            <label>Description</label>
            <Input 
            type='text'
            style={{width:'200px'}}
            onChange = {(e)=>setDescription(e.target.value)}
            value ={description}
            className = "col-8"
            placeholder='description...'
            />&nbsp;&nbsp;&nbsp;
            <label>Start date</label>
            <Input 
            type='date'
            style={{width:'200px'}}
            onChange = {(e)=>setStart_date(e.target.value)}
            value ={start_date}
            className = "col-8"
            placeholder='Start'
            />&nbsp;&nbsp;&nbsp;
            <label>End date</label>
            <Input 
            type='date'
            style={{width:'200px'}}
            onChange = {(e)=>setEnd_date(e.target.value)}
            value ={end_date}
            className = "col-8"
            placeholder='End'
            />&nbsp;&nbsp;&nbsp;
            <label>Assignes</label>
            <Input 
            type='text'
            style={{width:'200px'}}
            onChange = {(e)=>setAssignes(e.target.value)}
            value ={assignes}
            className = "col-8"
            placeholder='Assignes..'
            />&nbsp;&nbsp;&nbsp;
            <Button className='ml-3' type='primary' onClick={handleAddTodo} size="middle" style={{width:"135px"}}>Add</Button>

        </div>
        </>
    );
}
export default TodoInput;