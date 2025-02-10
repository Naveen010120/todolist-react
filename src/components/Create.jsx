/* eslint-disable react/prop-types */
import { useState } from "react";
import Table from "./Table"
import './Styles.css'
function Create({setAmount,passAmount}) {

    let [details, setDetails] = useState({
        description: '',
        amount: '',
        dropdown: 'income'
    })
    //  console.log(details)
    let handleSubmit = (e) => {
        // console.log(details)
        e.preventDefault();
        let options = {
            method: 'POST',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(
                details
            )
        }
        fetch('http://localhost:3000/data', options)
            .then(res => res.json())
            .then(data => console.log(data))
        // setAmount(details.amount)
        if(details.dropdown=='income'){
        setAmount(prev=>prev+Number(details.amount))
        }else{
            setAmount(prev=>prev-Number(details.amount))
        }
        
    }
    const changeHandle = (e) => {
        const { name, value } = e.target;
        // console.log(e.target.name.value)
        setDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };
    // console.log(details);
    return (
        <>
            <form action="" onSubmit={(e) => handleSubmit(e)}>
                <input type="text" placeholder='Description' id='description' name='description' value={details.description} onChange={changeHandle} required/>
                <input type="number" placeholder='Amount' id='amount' name='amount' value={details.amount} onChange={changeHandle} required />
                <select name="dropdown" id="" value={details.dropdown} onChange={changeHandle}>
                    <option value="income">Income</option>
                    <option value="expend">Expend</option>
                </select>
                <button type='submit' >Add Transcation</button>
            </form>
            
            <Table setFun={setAmount} value={passAmount}/>
        </>
    )
}

export default Create