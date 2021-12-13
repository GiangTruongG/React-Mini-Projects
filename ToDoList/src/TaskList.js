import { useEffect } from "react";
import { useHistory } from "react-router";


const TaskList = ({ tasks, setTasks }) => {

    const history = useHistory();

    const handleDelete = (id) => {
        
        fetch('http://localhost:5000/tasklists/' + id, {
        method: 'DELETE'
        }).then(() => {
             history.push('/');
             fetch('http://localhost:5000/tasklists')
            .then(res => {
                return res.json();
            })
            .then(data => {
                console.log(data);
                setTasks(data);
            })
        })
    }
    
    return ( 
        <div>
            {tasks.map(task => (
                <div className="task" key={task.id}>
                    <div>
                        <h5>{task.taskname}</h5>
                        <p>{task.taskdecs}</p>
                        <p>{task.tasktime}</p>
                    </div>   
                    <button onClick={() => {handleDelete(task.id)}}>Done</button>
                </div>
            ))}
        </div>
     );
}
 
export default TaskList;