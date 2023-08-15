import { useNavigate } from "react-router-dom";

function GetStarted() {
    const navigate = useNavigate();
    return (
        <div>
            <h1> Get Started By Adding A Credit Card </h1>
            {/* <Link to="/add-card"> Add a Card</Link> */}
            <button onClick={() => navigate('add-card')}> Add Card </button>
        </div>
    );
}

export default GetStarted;