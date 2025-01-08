import { useEffect, useState } from "react"
import img from '../assets/loading.jpg'
import './Style.css'

function Table({details}) {
    let [data, setData] = useState([])
    let fetchedData = () => {

        fetch('http://localhost:3000/data')
            .then(res => res.json())
            .then(data => setData(data))
            
    }

    useEffect(() => {
        fetchedData()
    }, [data])
    console.log(data)
    let deleteHandle=(id)=>{
        fetch(`http://localhost:3000/data/${id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
        setData(prev=>prev-Number(data.amount))
    }
    return (

        <>
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