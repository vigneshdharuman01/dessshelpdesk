import React, {  useEffect, useState} from 'react'
import './Profile.css'
//react redux
import { useSelector,useDispatch } from 'react-redux';
import{getclintdata, getuserdata}from '../../../redux slices/helpdeskSlice'
//react form
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
//import axios
import axios from 'axios';




const Profile = () => { 
  const dispatch=useDispatch();  
 const[userdata,setUserdata]=useState([])
 const[refresh,setRefresh]=useState(false)
 const[passData,setPassData]=useState("")
  const[loginData,setLoginData]=useState([])


//  //get the clint data in a redux state
//  const dataArr=useSelector((state)=>state.helpdesk.clintdata)
//  const data=dataArr[0]

//  //get the userdata in redux where the which user get login
//  const logdataArr=useSelector((state)=>state.helpdesk.userdata)
//  const loginData=logdataArr[0]


 
  

    useEffect(()=>{
      const logindata=JSON.parse(localStorage.getItem('HelpDeskLoginDatas'));
      setLoginData(logindata)
      console.log(loginData)
        GetUserData()
     },[setLoginData])
 
     const GetUserData=()=>{
       //get the login data in local storage
      //  const logindata=JSON.parse(localStorage.getItem('HelpDeskLoginDatas'));
      //  setLoginData(logindata)
      
       getClintProfileData()
       getShowData()
     }

      
    
    const getClintProfileData=()=>{
      axios.get('https://helpdeskservice.desss-portfolio.com/api/ClientProfile/GetClientprofile?ClientID='+loginData.ClientID+'&ClientUserID=' + loginData.ClientUserID)
      .then(response => {
      var data = response.data.data[0];
     
      // console.log(data)
   
      //store the clint data in to localstorage
      localStorage.setItem("ClientprofileData", JSON.stringify(data));
    
      //store the clint data in to redux state
      dispatch(getclintdata(data))
   
      })
     .catch(error => {
      console.log('error', error);
      })  
    
   
    }

    const getShowData=()=>{
       //get the clint data in a localstorage
    const data=JSON.parse(localStorage.getItem('ClientprofileData'));

    setUserdata({
      FirstName:data.FirstName,
      LastName:data.LastName,
      CompanyID:data.CompanyID,
      City:data.City,
      Address:data.Address,
      State:data.State,
      Zip:data.Zip,
      Password:data.ClientPassword,
      ConfirmPassword:data.ClientPassword,
      NewPassword:'',
      UserEmail:data.UserEmail
     })
    
    }
 
const handleSubmit=(event)=>{
  // localStorage.removeItem("ClientprofileData")
  getClintProfileData();
    event.preventDefault();
    console.log("clintid:"+loginData.ClientID+" city:"+userdata.City+" email:"+userdata.UserEmail+" Password"+loginData.Password+" firstname:"+userdata.FirstName+" lastname:"+userdata.LastName+" state"+userdata.State+" Zip"+userdata.Zip+" Address"+userdata.Address+" clintid: "+loginData.ClientUserID+" clintname:"+loginData.ClientUserID+" companyname:"+loginData.CompanyID)

    
    axios.post('https://helpdeskservice.desss-portfolio.com/api/ClientProfile/UpdateClientprofile?ClientID='+loginData.ClientID+'&City='+userdata.City+'&UserEmail='+userdata.UserEmail+'&ClientPassword='+userdata.Password+'&FirstName='+userdata.FirstName+'&LastName='+userdata.LastName+'&ImagePath=~/ChatImages/6_3.jpg&State='+userdata.State+'&Zip='+userdata.Zip+'&Address='+userdata.Address+'&ClientUserID='+loginData.ClientUserID+'&ClientName='+loginData.ClientName+'&CompanyID='+loginData.CompanyID)
                    .then(response => {
                     var ProfileUpdate = response.data.data[0];  
                     })
                   .catch(error => {
                    console.log('error', error);
                    })
                    
                    setRefresh(true)
                    // alert("Profile updated sucessfully")
                 
}

const onPassWordCHeck=()=>{
  if(userdata.Password===userdata.ConfirmPassword){
    setUserdata({...userdata,NewPassword:(userdata.Password)})
    setPassData("Password Matched!!")
  }else{
    setPassData("Password didn't Match")
  }
}



  return (
    // <h1>profile</h1>
     <div className='profile '>
        <div className="profile-container">
        <Form className='profile-form  m-auto ' onSubmit={(event)=>handleSubmit(event)}>
        <div className="rows">
        <Form.Group className="mb-3  form-group" controlId="formBasicFirstName">
        <Form.Label>FirstName</Form.Label>
        <Form.Control type="text" placeholder="FirstName..."  name='FirstName' value={userdata.FirstName} onChange={(e)=>setUserdata({...userdata,FirstName:(e.target.value)})} required />
      </Form.Group>
      <Form.Group className="mb-3  form-group" controlId="formBasicLastName">
        <Form.Label>LastName</Form.Label>
        <Form.Control type="text" placeholder="LastName..." name='LastName' value={userdata.LastName} onChange={(e)=>setUserdata({...userdata,LastName:(e.target.value)})} required />
      </Form.Group>
        </div>
     <div className="rows">
     <Form.Group className="mb-3  form-group" controlId="formBasicCompanyName">
        <Form.Label>CompanyName</Form.Label>
        <Form.Control type="text" placeholder="CompanyName..." name='CompanyID' value={userdata.CompanyID} onChange={(e)=>setUserdata({...userdata,CompanyID:(e.target.value)})} required  />
      </Form.Group>
      <Form.Group className="mb-3  form-group" controlId="formBasicAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" placeholder="Address..." name='Address' value={userdata.Address} onChange={(e)=>setUserdata({...userdata,Address:(e.target.value)})} required  />
      </Form.Group>
      <Form.Group className="mb-3  form-group" controlId="formBasicCity">
        <Form.Label>City</Form.Label>
        <Form.Control type="text" placeholder="City..." name='City' value={userdata.City} onChange={(e)=>setUserdata({...userdata,City:(e.target.value)})}required  />
      </Form.Group>
     </div>
     <div className="rows">
      <Form.Group className="mb-3  form-group" controlId="formBasicState">
        <Form.Label>State</Form.Label>
        <Form.Control type="text" placeholder="State..." name='State' value={userdata.State} onChange={(e)=>setUserdata({...userdata,State:(e.target.value)})} required  />
      </Form.Group>
      <Form.Group className="mb-3  form-group" controlId="formBasicZip">
        <Form.Label>Zip Code</Form.Label>
        <Form.Control type="number" placeholder="Zip Code..." name='Zip' value={userdata.Zip} onChange={(e)=>setUserdata({...userdata,Zip:(e.target.value)})} required  />
      </Form.Group>
      <Form.Group className="mb-3  form-group" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='UserEmail' value={userdata.UserEmail} onChange={(e)=>setUserdata({...userdata,UserEmail:(e.target.value)})} required  />
      </Form.Group>
     </div>
      <div className="rows">
      <Form.Group className="mb-3 form-group" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password..."name='Password' value={userdata.Password} onChange={(e)=>setUserdata({...userdata,Password:(e.target.value)})} required  />
      </Form.Group>
      <Form.Group className="mb-3  form-group" controlId="formBasicAddress">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Confirm Password..." name='ConfirmPassword' value={userdata.ConfirmPassword} onChange={(e)=>setUserdata({...userdata,ConfirmPassword:(e.target.value)},onPassWordCHeck())} required />
        <Form.Text className="text-muted">
          {passData}
        </Form.Text>
      </Form.Group>
      </div>
      <div className="rows">
    <input type="file" onClick={onPassWordCHeck} />
    {/* <div className="upload-img">
      <uploadIMG/>
    </div> */}
      </div>
      
      <Button className='m-3' variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </div>
   
    </div>

  )
}

export default Profile