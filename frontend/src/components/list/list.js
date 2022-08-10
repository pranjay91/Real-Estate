import "./list.css"
import axios from "axios";
import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";


const List = ()=>{

    const [listData,setListData] = useState([])

    useEffect(() =>{
        axios({
            method: "GET",
            url: "http://localhost:3010/list/list",
        }).then((userData) => {
            console.log(userData)
            setListData((userData.data).reverse())
        }).catch((err) => {
            console.log(err)
        })
    }, [])
    return(
        <>
        <div className='container'>
            <div className="left-section">
                <h2>Logo</h2>
                <ul>
                    <li className="blue">Property</li>
                    <li className="gray">Assistance</li>
                    <li className="gray">Received Interest</li>
                    <li className="gray">Sent Interest</li>
                    <li className="gray">Property Views</li>
                    <li className="gray">Tariff Plan</li>
                </ul>
            </div>
            <div className="right-section">
            <header>
                
                    <div className="userhead">
                        <span>USER ID:06PPD125</span>
                        <span>username</span>
                    </div>
      
            </header>
            <hr/>
            <div className="nav">
            <input type="text" placeholder="Search PPD ID" />
            <Link to="/basicInfo" ><button className="btn" >+ Add Property</button></Link>
            </div>
            <div className="list">
                
                <ul className="blue">
                    <li>PPD ID</li>
                    <li>Image</li>
                    <li>Property</li>
                    <li>Contact</li>
                    <li>Area</li>
                    <li>Views</li>
                    <li>Status</li>
                    <li>Day Left</li>
                    <li>Action</li>
                </ul>
                {
                 listData.map((user,i) =>{
                  return (
                    <ul>
                        <li>{user.ppdId}</li>
                        <li><img src={user.image} alt="" width="20" height="20"></img></li>
                        <li>{user.property}</li>
                        <li>{user.contact}</li>
                        <li>{user.area}</li>
                        <li>0</li>
                        <li>Unsold</li>
                        <li>00</li>
                        <li>...</li>
                    </ul>
                    )
                })
              }
              
            </div> 
            </div>
        </div>
        </>
    )
}
export default List