import { useState } from "react";

function TodoList() {
    const [tasks, setTasks] = useState(["sleep"]);
    const handleTaskADD = () => {
      if(document.querySelector("input").value!=""){
          const newtask=document.querySelector("input").value; 
    
     setTasks(t=>[...t,newtask]);
      };
     document.querySelector("#inputTask").value="";
     
    }
    const handleTaskRemove = (index) => {
    setTasks(tasks.filter((_,i)=>{return i!==index}));
    }
    const incPriority = (index) => {
      if(index!=0){
        let tempTask=[...tasks];
    [tempTask[index-1],tempTask[index]]=[tempTask[index],tempTask[index-1]];
    setTasks([...tempTask]);}
    }
    const decPriority = (index) => {
        if(index!=tasks.length-1){
        let tempTask=[...tasks];
    [tempTask[index+1],tempTask[index]]=[tempTask[index],tempTask[index+1]];
    setTasks([...tempTask]);}
    }
    return (<div>
        <h1>To-Do-List</h1>
        <input type="text"  id="inputTask" />
        <button onClick={handleTaskADD} id="add">ADD</button>
     <div className="list">   
        <ul>
            {tasks.map((task, index) => {
               return <li key={index}><h2>{task}</h2>
                   <div className="right"> <button id="delete"onClick={()=>handleTaskRemove(index)}>Delete</button>
                    <button id="up"onClick={()=>incPriority(index)}><i class="fa-solid fa-up-long"></i></button>
                    <button id="down"onClick={()=>decPriority(index)}><i class="fa-solid fa-down-long"></i></button>
                    </div>                
                </li>
            })}
        </ul>
        </div>
    </div>);
}
export default TodoList;