import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function Home() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  
  const fetchData = () => {
    axios.get("http://localhost:3000/users")
      .then(res => setData(res.data))
      .catch(err => console.error("Error fetching data:", err));
  };

  
  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Would you like to delete?");
    if (confirmDelete) {
      axios.delete(`http://localhost:3000/users/${id}`)
        .then(() => {
          alert("Record deleted");
          setData(data.filter(user => user.id !== id)); // Update UI immediately
        })
        .catch(err => {
          console.error("Error deleting record:", err);
          alert("Failed to delete record.");
        });
    }
  };

  return (
    <div className="container mt-5">
      <h2>CRUD App with JSON Server</h2>
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
          {data.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <Link to={`/update/${user.id}`} className="btn btn-success btn-sm">Update</Link>
                <button onClick={() => handleDelete(user.id)} className="btn btn-danger btn-sm ms-2">Delete</button>
                <Link to={`/read/${user.id}`} className="btn btn-primary btn-sm">Read</Link>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
