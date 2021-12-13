import { useEffect, useState } from "react";
import TaskList from "./TaskList";

const Body = () => {
    const [tasks, setTasks] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/tasklists')
            .then(res => {
                return res.json();
            })
            .then(data => {
                console.log(data);
                setTasks(data);
            })
    }, []);

    return ( 
        <div className="body">
            {tasks && <TaskList tasks={tasks} setTasks={setTasks} />}
        </div>
     );
}
 
export default Body;
