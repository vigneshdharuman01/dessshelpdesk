import React, { useEffect, useState } from 'react'
import './Loginform.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import ZmartHelpDesk from '../../Asserts/images/zmart Helpdesk logo.png'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

import { useDispatch } from 'react-redux';
import { getuserdata } from '../../redux slices/helpdeskSlice';

const Loginform = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
    
   const[companyId,setCompanyId]=useState("");
   const[emailId,setEmailId]=useState("");
   const[password,setPassword]=useState("");
   const [loading, setLoading] = useState(false);

   
   
  //  const userdata=useSelector((state)=>state.helpdesk.userdata)
  //  console.log(userdata);

   const onHandleSubmit=(e)=>{
    e.preventDefault();
    setLoading(true)
    axios.post('https://helpdeskservice.desss-portfolio.com/api/Login/LoginAdmin?CompanyID=' + companyId + '&EmailID=' + emailId+ '&Password=' + password)
    
     .then(response=>{
      if(response){
        setLoading(false)
      }
      
      const LoginDatas=response.data.data[0];
      const Loginstatus=response.data.status;
     //  console.log(LoginDatas)

      //to store user data in redux 
       dispatch(getuserdata(LoginDatas))

      //to store the user data in localstorage
       localStorage.setItem('HelpDeskLoginDatas', JSON.stringify(LoginDatas))
    
    
      if(Loginstatus === 200){

        if(LoginDatas.UserType === "Client"){
           navigate("/client")
        }
        else if(LoginDatas.UserType === "Admin"){
          navigate("/admin")
        }
        else if(LoginDatas.UserType === "User"){
          navigate("/worker")
        }
        
      }
      else{
        alert('Invalid Credentials');
      }
     })
     .catch(error=>{
      alert("Invalid Authentication!")
       setCompanyId("")
       setEmailId("")
       setPassword("")
     })


   }
 
  
  return (
    <div className='loginform'>

      {loading?(
      
    <div className="loader-container">
        <div className="spinner">
        </div>
      </div>
      ):(
          

  <div className="formouter">
    <div className="formcontainer ">
      <div className="formheader">
          <div className='login-img' style={{width:"100%"}}>
              <img  src={ZmartHelpDesk} height="80px" width="100%" alt="Helpdesk" />
          </div>
          <h3>Login To Your Account</h3>
      </div>
      <div className="formbody">

      <form className='needs-validation' onSubmit={onHandleSubmit}>
      <div className="col-md-12">
    <label for="validationServer01" className="form-label">Company ID</label>
    <input type="text" className="form-control " id="validationServer01" value={companyId} onChange={(e)=>setCompanyId(e.target.value)} required/>
    </div>

   
      <div className="col-md-12">
    <label for="validationServer01" className="form-label">Email Id</label>
    <input type="email" className="form-control" id="validationServer01" value={emailId} onChange={(e)=>setEmailId(e.target.value)} required/>
    </div>

    <div className="col-md-12">
    <label for="validationServer01" className="form-label">Password</label>
    <input type="password" className="form-control" id="validationServer01" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
    </div>
 
    <div className="col-12 text-center">
    <button className="btn btn-primary mt-3 form-btn" type="submit">Submit form</button>
    </div>
       
      </form>
      </div>
      <div className="formfooter">
        <ul>
          <li>
          <a href="https://www.desss.com/" target='_blank'><i><FcGoogle /></i></a> 
          </li>
          <li className='linkedin'>
          <a href="https://www.linkedin.com/company/desss-inc/" target='_blank'><i> <FaLinkedin/> </i></a>
          </li>
          <li className='instagram'>
          <a href="https://www.instagram.com/desss_inc/" target='_blank'><i> <FaInstagram/> </i></a>
          </li>
          <li className='twiter'>
          <a href="https://twitter.com/desssinc" target='_blank'><i> <FaXTwitter/> </i></a>
          </li>
          <li>
          <a href="https://www.facebook.com/desssinc" target='_blank'><i> <FaFacebook/> </i></a>
          </li>
        </ul>
      
      </div>
    </div>
  </div>
      )
  }
  </div>
         
        )
        }

export default Loginform