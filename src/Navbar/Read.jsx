import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";


function Read(){
  const {id} = useParams()
  const navigate = useNavigate()
  const [Data, setData] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/users/'+id)
    .then(res => setData(res.data))
    .catch(err => console.log(err))

  }, [])
     return (
      <div className="container">
        
            <div className="container p-5">
             <p>{Data.id}</p> 
             <p>{Data.username}</p>
             <p>{Data.email}</p>  
             <Link to='/'>Back</Link>
            </div>
           
   
      
  
      </div>
    )
  }
  
  export default Read;