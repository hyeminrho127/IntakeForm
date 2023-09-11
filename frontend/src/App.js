import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Form from './components/Form';
import ProcessingInformation from './components/ProcessingInformation';
import axios from 'axios';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/intake" element={<Form />} />
          <Route path="/processing" element={<ProcessingInformation />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  // State to store the fetched data
  const [data, setData] = useState([]);

  // Function to fetch data from the backend API
  const fetchData = async () => {
    try {
      // Make a GET request to your backend API
      const response = await axios.get('http://localhost:3001/api/beneficiary_info'); // Adjust the URL if needed

      // Set the fetched data in state
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Call the fetchData function when the component mounts
  useEffect(() => {
    fetchData();
  }, []); // The empty dependency array ensures this effect runs once when the component mounts

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column', // Display data in a column
        alignItems: 'center',
        backgroundColor: '#ffffcc',
      }}
    >
      <h2>Fetched Data:</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Anum</th>
            <th>Country</th>
            <th>Province</th>
            <th>Nationality</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.anum}</td>
              <td>{item.country}</td>
              <td>{item.province}</td>
              <td>{item.nationality}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button
        style={{
          backgroundColor: 'cornflowerblue',
          color: 'white',
          padding: '20px 40px',
          fontSize: '20px',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginTop: '20px', // Add spacing between the table and the button
        }}
      >
        <Link to="/intake">Start</Link>
      </button>
    </div>
  );
}

export default App;
