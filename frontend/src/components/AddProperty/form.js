
import { useState } from 'react'
import BasicInfo from './basicInfo';
import PropertDetail from './propertDetail';
import GeneralInfo from './generalInfo';
import LocationInfo from './locationInfo';
import axios from 'axios'
import '../assets/styles/style.css';
import { useNavigate } from "react-router-dom";

const Form = () => {

    const navigate = useNavigate();

    const [page, setPage] = useState(0);

    const [formData, setFormData] = useState({
        propertyType: '',
        price: '',
        propertyAge: '',
        propertyDiscription: '',
        negotiable: '',
        ownership: '',
        propertyApproved: '',
        bankLoan: '',
        length: '',
        breadth: '',
        totalArea: '',
        areaUnit: '',
        noOfBHK: '',
        noOfFloor: '',
        attached: '',
        westernToilet: '',
        furnished: '',
        carParking: '',
        lift: '',
        electricity: '',
        facing: '',
        name: '',
        mobile: '',
        postedBy: '',
        saleType: '',
        featuredPackage: '',
        PPDPackage: '',
        email: '',
        city: '',
        area: '',
        pincode: '',
        address: '',
        landmark: '',
        latitude: '',
        longitude: ''
    });
    
    function handlePage() {
        setPage(page + 1);
    };

    function handleSubmit() {
        // axios.post('http://localhost:3011/add', formData).then((res) =>{ 
            axios.post('https://real-estate-app-b.herokuapp.com/add', formData).then((res) =>{ 
            console.log(res);
            navigate("/listproperty");
    })
    }; 

    function handelCancel() {
        navigate("/listproperty")
    };

    const conditionalComponent = () => {
        switch(page) {
            case 0:
                return <BasicInfo formData={formData} setFormData={setFormData}/>;
            case 1:
                return <PropertDetail formData={formData} setFormData={setFormData}/>;
            case 2:
                return <GeneralInfo formData={formData} setFormData={setFormData}/>;
            case 3:
                return <LocationInfo formData={formData} setFormData={setFormData}/>;
            default:
                return <BasicInfo formData={formData} setFormData={setFormData}/>;
            
        }
    }

    const activeSpan = {
        borderRadius: "50%",
        width: "10px",
        height: "5px",
        padding: "0.25px 6px",
        margin: "4px",
        textAlign: "center",
        color: "black",
        backgroundColor: "white",
    }

    const inacticeSpan = {
        borderRadius: "50%",
        width: "10px",
        height: "5px",
        padding: "0.25px 6px",
        margin: "4px",
        textAlign: "center",
        color: "grey",
        backgroundColor: "#E1F9F4"
    }

    const activeTd = {
        backgroundColor: "#6AB4F8",
        color: "white",
        borderRadius: "50px",
        margin: "10px",
        padding: "10px",
        width: "150px",
        border:"none",
    }

    const inactiveTd = {
        backgroundColor: "white",
        color: "grey",
        borderRadius: "50px",
        margin: "10px",
        padding: "10px",
        width: "150px",
        border:"none"
    }

    return (
        <>
            <div className='add-property-container'>
                <h3 >
                    ADD NEW PROPERTY
                </h3>
                <table className='navbar'>
                    <tr>
                        <td style={page === 0 ? activeTd: inactiveTd}><span className='number' style={page === 0 ? activeSpan: inacticeSpan}>1</span>Basic Info</td>
                        <td style={page === 1 ? activeTd: inactiveTd}><span className='number' style={page === 1 ? activeSpan: inacticeSpan}>2</span>Property Detail</td>
                        <td style={page === 2 ? activeTd: inactiveTd}><span className='number' style={page === 2 ? activeSpan: inacticeSpan}>3</span>General Info</td>
                        <td style={page === 3 ? activeTd: inactiveTd}><span className='number' style={page === 3 ? activeSpan: inacticeSpan}>4</span>Location Info</td>
                    </tr>
                </table>
                <div className='mainform'>
                    <div className='form-style' style={{textAlign: "left"}}>
                    {conditionalComponent()}
                    </div>
                    <div className='twobtn'>
                          {/* <button className="btn1" onClick={() => setPage(page - 1)}>
                            {page <= 0 ? "Cancel" : "Previous"}
                            </button> */}

                        {page <= 0 ? <button className="btn1" onClick={handelCancel}>Cancel</button> : <button className="btn1" onClick={() => setPage(page - 1)}>Previous</button>}

                        {page < 3 ? <button className='btn2 btn1' onClick={handlePage}>Save & Continue</button> : <button className='btn2 btn1' onClick={handleSubmit}>Add Property</button>}

                    </div>
             
                </div>
                
              
            </div>
        </>
    );
}

export default Form;