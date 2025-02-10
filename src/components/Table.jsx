import { useEffect, useState } from "react"
import img from '../assets/loading.jpg'
import './Styles.css'
import {  Link, useNavigate } from "react-router-dom"
import FormData from "./FormData"
function Table({setFun,value}) {
    let [data, setData] = useState([])
    let navigate =useNavigate();
    let fetchedData = () => {

        fetch('http://localhost:3000/data')
            .then(res => res.json())
            .then(data => setData(data)) 
           
    }

    useEffect(() => {
        fetchedData()
    }, [data])
   
    let deleteHandle=(id)=>{
        fetch(`http://localhost:3000/data/${id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>setData(data))
        let filterData=data.filter(i=>i.id==id)
        if(filterData[0].id==id){
           
                setFun(prev=>prev-Number(filterData[0].amount))
            
        }
        // setFun(prev=>prev-Number(data.amount))
        // console.log(amount)
       
        
    }
    function loginClick(){
        navigate('/formdata')
    }
    return (

        <>
        <button onClick={loginClick} style={{padding:'10px',fontSize:'1.5rem',borderRadius:'20px',translate:'10vw'}}>Logout</button>
            <h3>Transcation</h3>
            <table border={1}  cellPadding={10} cellSpacing={0}>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Type</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length>0?
                        data.map(i => (
                            
                                <tr key={i.id}>
                                    <td>{i.description}</td>
                                    <td>{i.amount}</td>
                                    <td>{i.dropdown}</td>
                                    <button onClick={()=>deleteHandle(i.id)}>Delete</button>
                                    <button><Link to={`view/${i.id}`}>View</Link></button>
                                </tr>
                            
                        ))
                :
                <tr>
                    <img src={img} alt="loading" style={{width:'300px'}}/>
                </tr>
            }
                    
                </tbody>
            </table>
           

        </>
    )
}

export default Table