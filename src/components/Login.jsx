import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Styles.css'

function Login({ amount, setAmount }) {
  const [state, setState] = useState(true);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const fetchingData = async () => {
    try {
      const res = await fetch('http://localhost:3000/data');
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchingData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/formdata');
  };

  return (
    <div className="login-container">
      <h1 className="title">User Dashboard</h1>
      <h5 className="subtitle">Welcome to your personal finance overview</h5>

      <h3 className="balance">
        Your Current Balance: <span className="amount">₹{amount}.00</span>
      </h3>

      <button onClick={handleSubmit} className="logout-btn">
        Logout
      </button>

      <h4 className="transactions-title">Recent Transactions</h4>
      <ul className="transactions-list">
        {data.length === 0 && state ? (
          <li className="no-transactions">No transactions</li>
        ) : (
          data.map((val, ind) => (
            <li key={ind} className="transaction-item">
              {val.description}: <span className="transaction-amount">₹{val.amount}</span> ({val.dropdown})
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default Login;
