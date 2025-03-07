import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/users")
      .then(res => setData(res.data))
      .catch(err => console.error("Error fetching data:", err));
  }, []);

  return (
    <div className="container mt-5">
      <h2>Crud App with Json Server</h2>
      <Link to="/create" className="btn btn-success my-3">Create +</Link>
      <table className="table">
        <thead> 
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => (
            <tr key={i}>
              <td>{d.id}</td>
              <td>{d.username}</td>
              <td>{d.email}</td>
              <td><button>Update</button>
                  <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;