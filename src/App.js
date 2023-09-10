import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import IntakeForm from './IntakeForm';

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

        <Route path="/" exact>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100vh',
              backgroundColor: '#ffffcc',
            }}
          >
            <button
              style={{
                backgroundColor: 'blue',
                color: 'white',
                padding: '20px 40px',
                fontSize: '20px',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              <Link to="/intake">Start</Link>
            </button>
          </div>
        </Route>

        <Route path="/intake" component={Form} />
      </div>
    </Router>
  );
}

export default App;
