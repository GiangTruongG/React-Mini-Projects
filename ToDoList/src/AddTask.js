import { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

const AddTask = () => {
    const [taskname, setTaskName] = useState('');
    const [taskdecs, setTaskDecs] = useState('');
    const [tasktime, setTaskTime] = useState('');
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
       const task = { taskname, taskdecs, tasktime };
       console.log(task);

       fetch('http://localhost:5000/tasklists', {
           method: 'POST',
           headers: {"Content-Type": "application/json"},
           body: JSON.stringify(task)
       }).then(() => {
           history.push('/');
       });
    };

    return ( 
        <div className="add-task">
            <div className="body">
                <div className="top">
                    <Link to="/" style={{color: "#fff"}}>Go Back</Link>
                </div>
                <h2>Add New Task</h2>
                <div className="add-body">
                    <form onSubmit={handleSubmit}>
                        <label>Task Name:</label>
                        <input type="text" 
                            required
                            value={taskname}
                            onChange={(e) => setTaskName(e.target.value)}
                        ></input>
                        <label>Task Description:</label>
                        <textarea 
                            required
                            value={taskdecs}
                            onChange={(e) => setTaskDecs(e.target.value)}
                        ></textarea>
                        <label>Task Time:</label>
                        <input type="text" 
                            required
                            value={tasktime}
                            onChange={(e) => setTaskTime(e.target.value)}
                        ></input>
                        <button>Add Task</button>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default AddTask;
