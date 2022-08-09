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
                <div className='userhead'>
                    <span>USER ID: 06PPD125 </span>
                    <span>User Name</span>
                    {/* <img src={Logo} alt='insta-logo'></img>
                   <Link to="/formpage"> <img src={Camera} alt='camera'></img></Link> */}
                </div>
            </header>
            <hr/>
            </div>
            
        <div className="content">
        {/* {
        postData.map((user,i) =>{
            return (
                <div className="post">
                    <div className="user">
                        <div>
                            <div className="user-name" >
                                <div key={i}>{user.author}</div>
                            </div>
                            <div className="user-loc">
                                <span>{user.location}</span>
                             </div>
                        </div>
                    
                        <div>
                           <b>...</b> 
                        </div>
                    </div>
                    <div className="user-image">
                        <img src={user.image} alt="user-postImage"></img>
                    </div>
                    <div className="user-meta">
                        <div >
                            <span>
                            <img src={like} alt="user-postImage"></img>
                            </span>
                            <span>
                            <img src={share} alt="user-postImage"></img>
                            </span>
                        </div>
                        <div className="">
                        <span>{user.date}</span>
                         </div>
                    </div>
                    <div className="user-likes">
                        0 likes
                    </div>
                    <div className="user-description">
                        {user.desc}
                    </div>
                    </div>
                    )
                })
        } */}
        </div>
        </div>
        </>
    )
}
export default List