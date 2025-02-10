import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './Styles.css'

function FormData() {
  const [nameData, setNameData] = useState({
    name: "",
    password: "",
  });
  const [adminData, setAdminData] = useState("");
  const [userData, setUserData] = useState("");
  const [state, setState] = useState(false);
  const navigate = useNavigate();

  const changeHandle = (e) => {
    const { name, value } = e.target;
    setNameData((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
console.log(nameData.name,nameData.password)
console.log(adminData[0].name === nameData.name.toLowerCase() &&
adminData[0].password == nameData.password);

    if (
      adminData[0].name === nameData.name.toLowerCase() &&
      adminData[0].password == nameData.password
    ) {
      console.log('hello')
      navigate("/");
    } else {
      setState(true);
    }

    if (
      userData[0].name === nameData.name.toLowerCase() &&
      userData[0].password === nameData.password
    ) {
      navigate("/login");
    } else {
      setState(true);
    }
  };

  const fetchingAdminData = async () => {
    const adminRes = await fetch("http://localhost:3000/admin");
    const adminData = await adminRes.json();
    setAdminData(adminData);
  };

  const fetchingUserData = async () => {
    const userRes = await fetch("http://localhost:3000/user");
    const userData = await userRes.json();
    setUserData(userData);
  };

  useEffect(() => {
    fetchingAdminData();
    fetchingUserData();
  }, []);

  return (
    <div className="form-container">
      <form className="form-card">
        <h2 className="form-heading">Login</h2>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={nameData.name}
          onChange={changeHandle}
          className="form-input"
        />
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={nameData.password}
          onChange={changeHandle}
          className="form-input"
        />
        <button onClick={handleSubmit} className="form-button">
          Submit
        </button>
        {state && <p className="error-message">Invalid details</p>}
      </form>
    </div>
  );
}

export default FormData;
