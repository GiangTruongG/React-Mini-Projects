import { useHistory } from "react-router";

const Header = () => {
    const history = useHistory();

    const goToAddPage = () => {
        history.push('/addtask');
    }

    return ( 
        <div className="header">
            <div className="header-content">
                <img src="https://wallpaper.dog/large/10991978.jpg"></img>
                <div className="header-body">
                    <p>To Do Tasks</p>
                    <button onClick={goToAddPage}>+</button>
                </div>
            </div>
            
        </div>
     );
}
 
export default Header;