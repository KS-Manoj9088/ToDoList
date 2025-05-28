import React, {useState} from 'react';
import '../Components/ToDoList.css'

function ToDoList(){

    const [tasks, setTasks] = useState([]); //An Array of Strings
    const [newTask, setNewTask] = useState(""); // To work on newly adding tasks.
    
    // For Placeholder input change
    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){

        if(newTask.trim()!==""){
            setTasks(tasks=> [...tasks, newTask]);
            setNewTask("");   // Task add chesaka remove text content in input tag
        }
    }

    function deleteTask(index){
        const updatedTasks = tasks.filter( (_,i) => i!==index);
        setTasks(updatedTasks)
    }

    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            // Swap Array Values with Upper index.
            [ updatedTasks[index]  , updatedTasks[index-1] ] = 
            [ updatedTasks[index-1], updatedTasks[index] ];

            setTasks(updatedTasks); // After Updating Tasks Array use the Setter Function
        }
    }

    function moveTaskDown(index){
           if(index < tasks.length){
            const updatedTasks = [...tasks];
            // Swap Array Values With below index
            [ updatedTasks[index]  , updatedTasks[index+1] ] = 
            [ updatedTasks[index+1], updatedTasks[index] ];

            setTasks(updatedTasks); // After Updating Tasks Array use the Setter Function
        }
    }

    
    return(
        <div className='to-do-list'>
            <h1>To-Do-List</h1>

            <div>
                <input
                    type="text" 
                    placeholder='Enter a Task ...' 
                    value={newTask} 
                    onChange={handleInputChange}
                />

                <button 
                   onClick={addTask} 
                   className='add-button'>
                   Add
                </button>
            </div>

            <ol>
                {tasks.map( (task,index)=>
                    <li key={index}>
                        <span className='text'>{task}</span>
                        <button className="delete-button" onClick={()=>deleteTask(index)}>
                            Delete
                        </button>

                        <button className="move-button" onClick={()=>moveTaskUp(index)}>
                            👆
                        </button>

                        <button className="move-button" onClick={()=>moveTaskDown(index)}>
                            👇
                        </button>
                    </li>
                )}
            </ol>
        </div>
    );
}

export default ToDoList;