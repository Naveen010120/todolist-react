import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

function View() {
    let {id}=useParams();
    let [stored,setStored]=useState({})
    let fetchedData=()=>{
        fetch('http://localhost:3000/data')
        .then(res=>res.json())
        .then(data=>{
            let filterData=data.find(i=>i.id=id);
            setStored(filterData)
        })
    }
        useEffect(()=>{
            fetchedData()
        },[stored])
        // console.log(stored)
  return (
    <>
    <h2>Details:</h2>
    <p><b>Description:</b>{stored.description}</p>
    <p><b>Amount:</b>{stored.amount}</p>
    <p><b>Money:</b>{stored.dropdown}</p>
    </>
  )
}

export default View