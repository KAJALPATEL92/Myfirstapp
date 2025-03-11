import axios from "axios";
import { useEffect , useState} from "react";
import { data, useNavigate, useParams } from "react-router-dom";


function Update(){
    const {id} = useParams();

    const [inputData, setInputData] = useState({
        id: id,
        username: '',
        email: ''
    })
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3000/users/'+id)
        .then(res => setInputData(res.data))
        .catch(err => console.log(err))
    },[])
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put("http://localhost:3000/users/"+id, inputData)
        .then(res => {
            alert('Data Updated Successfully')
            navigate('/')
        })
    }

    return(
        <div className="container mt-5">
            <h2>Update User</h2>
            <form onSubmit={handleSubmit}>
            <div className="form-group">
                    <label htmlFor="id">ID</label>
                    <input type="text" disabled className="form-control" id="id" placeholder="ID" 
                    name="id" value={inputData.id} />
                </div>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control" id="username" placeholder="Enter username" 
                    name="username" value={inputData.username} onChange={e => setInputData({...inputData, username: e.target.value})} />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter email" 
                    name="email" value={inputData.email} onChange={e => setInputData({...inputData, email: e.target.value})} />
                </div>

                <button type="submit" className="btn btn-primary mt-3">Update</button>
            </form>
        </div>
    )
}

export default Update;