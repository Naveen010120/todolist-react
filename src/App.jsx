import { useEffect, useState } from "react";
import Create from "./components/Create";
import "./components/Styles.css";
import { Route, Routes } from "react-router-dom";
import View from "./components/View";
import FormData from "./components/FormData";
// import Table from "./components/Table";
import Login from "./components/Login";

function App() {
  let [amount, setAmount] = useState(0);

  useEffect(() => {}, [amount]);

  return (
    <Routes>
      {/* Home Route */}
      <Route
        path="/"
        element={
          <>
            <div>
              <h1>Personal Finance Manager</h1>
              <h3>Balance: ${amount}</h3>
              <Create setAmount={setAmount} passAmount={amount} />
              {/* <Table setFun={setAmount} value={amount} /> */}
            </div>
          </>
        }
      />

      {/* View Route */}
      <Route path="/view/:id" element={<View />} />

      {/* FormData Route */}
      <Route path="/formdata" element={<FormData />} />
      <Route path='/login' element={<Login amount={amount} setAmount={setAmount}/>} />
    </Routes>
  );
}

export default App;
