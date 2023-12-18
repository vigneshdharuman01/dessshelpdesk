import React, { useEffect, useState } from 'react'
import './Clint.css'
//react components
import Footer from '../subComponent/Footer/Footer'
import ClintHeader from '../subComponent/ClintHeader/ClintHeader'
//react icons
import { FcPlus } from "react-icons/fc";
import { FaDeleteLeft } from "react-icons/fa6";
import { FaUserEdit } from "react-icons/fa";
//react redux
import { useDispatch,useSelector } from 'react-redux';
import { getclintactive,getclintdata} from '../../redux slices/helpdeskSlice';
//axios
import axios from 'axios';

//react tabs
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Profile from '../subComponent/profile/Profile';



const Clint = () => {
  const dispatch=useDispatch();
  
  const[userData,setUserData]=useState()
  const[refresh,setRefresh]=useState(false)

  //  //get the userdata in redux where the which user get login
   const dataArr=useSelector((state)=>state.helpdesk.userdata)
   const data=dataArr[0]
  //  setUserData(data)
 
  //  //get the userdata in localstorage
  //       const datas=JSON.parse(localStorage.getItem('HelpDeskLoginDatas'));
  //         setUserData(datas)

  
     
  useEffect(()=>{
             //get the userdata in localstorage
        // const datas=JSON.parse(localStorage.getItem('HelpDeskLoginDatas'));
        //   setUserData(datas)
  
 

      //  //  get the userdata in localstorage
      //  const data=JSON.parse(localStorage.getItem('HelpDeskLoginDatas'));
      //  setUserData(data)
  
      //  getClintProfileData();

      //    console.log(userData)



      
// 	axios.get('https://helpdeskservice.desss-portfolio.com/api/ClientProfile/GetClientprofile?ClientID='+userdata.ClientID+'&ClientUserID=' + userdata.ClientUserID)
//   .then(response => {
//   var data = response.data.data[0];
//   // console.log(data)

//   //store the clint data in to localstorage
//   localStorage.setItem("ClientprofileData", JSON.stringify(data));

//   //store the clint data in to redux state
//   useDispatch(data)
//   })
//  .catch(error => {
//   console.log('error', error);
//   })
     
  },[])
  // console.log(userdata)
   
      


  
  const getClintProfileData=()=>{
    axios.get('https://helpdeskservice.desss-portfolio.com/api/ClientProfile/GetClientprofile?ClientID='+userData.ClientID+'&ClientUserID=' + userData.ClientUserID)
    .then(response => {
    var data = response.data.data[0];
 
    //store the clint data in to localstorage
    localStorage.setItem("ClientprofileData", JSON.stringify(data));
  
    //store the clint data in to redux state
    dispatch(getclintdata(data))
    })
   .catch(error => {
    console.log('error', error);
    })
  }






  //usestate for ticket datas(open tickets,processing tickets,close Tickets)
  // const[userdata,setUserdata]=useState(finaluserdata);
  // const[openTicketDatas,setOpenTicketDatas]=useState([]);
  // const[processingTicketDatas,setProcessingTicketDatas]=useState([]);
  // const[closedTicketDatas,setClosedTicketDatas]=useState([]);
 
  
 //used for Ticket or Profile page
const handleclicktrue=()=>{
    dispatch(getclintactive(true))
}
const handleclickflase=()=>{
    dispatch(getclintactive(false))
}

// console.log(useSelector((state) => state.helpdesk.clintactive))



//store the open ticket datas in state while using api
// const GetOpenTicketDatas=()=>{
//   var OpenTicketURL = 'https://helpdeskservice.desss-portfolio.com/api/Login/GetTicketsDetails?UserTypeID='+userdata.UserTypeID+'&EmpID='+userdata.ClientUserID+'&CompanyID='+userdata.CompanyID;
//   axios.get(OpenTicketURL)
//   .then(res => {
//     //  console.log(res.data.data)
//     setOpenTicketDatas(res.data.data);
//     //  console.log(openTicketDatas)

//     var OpenTicketDatas1 = [];
//     var data1 = res.data.data;

//     data1.forEach((key, value) => {

//        OpenTicketDatas1.push({
//         CreatedBy:key.CreatedBy,
//         CreatedOn:  moment(key.CreatedOn).format("MM/DD/YYYY"),
//         Subject:key.Subject,
//         Source:key.Source,
//         TicketSeverity:key.TicketSeverity,
//         TicketStatus:key.TicketStatus,
//         MiscEID:key.MiscEID,
//      })
//     })
//     setOpenTicketDatas(OpenTicketDatas1);
    
//     // console.log(openTicketDatas)
// })  
//    .catch(error => {
//   console.log(error);
//   })

// }

 
// //store the processed ticket datas in state while using api

// const GetProgressingTicketsDatas=()=>{
//   var ProcessedTicketURL = 'https://helpdeskservice.desss-portfolio.com/api/ProgressTickets/GetTicketsProgressDetails?UserTypeID='+userdata.UserTypeID+'&EmpID='+userdata.ClientUserID+'&CompanyID='+userdata.CompanyID;
//   axios.get(ProcessedTicketURL)
//   .then(res => {
//     //  console.log(res.data.data)
//     setProcessingTicketDatas(res.data.data);
//     //  console.log(processingTicketDatas);

//     var processingTicketDatas1 = [];
//     var data2 = res.data.data;

//     data2.forEach((key, value) => {

//       processingTicketDatas1.push({
//        CreatedBy:key.CreatedBy,
//        CreatedOn:  moment(key.CreatedOn).format("MM/DD/YYYY"),
//        Subject:key.Subject,
//        Source:key.Source,
//        TicketSeverity:key.TicketSeverity,
//        TicketStatus:key.TicketStatus,
//        MiscEID:key.MiscEID,
//     })
//    })
//    setProcessingTicketDatas(processingTicketDatas1);
//   //  console.log(processingTicketDatas);
   

//   })
//   .catch(error => {
//     console.log(error);
//    })
// }

// //store the closed ticket datas in state while using api

// const GetClosedTicketDatas=()=>{
//   var ClosedTicketURL = 'https://helpdeskservice.desss-portfolio.com/api/ClosedTickets/GetTicketsClosedDetails?UserTypeID='+userdata.UserTypeID+'&EmpID='+userdata.ClientUserID+'&CompanyID='+userdata.CompanyID;
//   // console.log(ClosedTicketURL)
//   axios.get(ClosedTicketURL)
//   .then(res=>{
//       //  console.log(res.data.data)
//    setClosedTicketDatas(res.data.data)
//   //  console.log(closedTicketDatas)

//   var ClosedTaskDatas1 = [];
//   var data3 = res.data.data;
//   data3.forEach((key, value) => {
//       ClosedTaskDatas1.push({
//          CreatedBy:key.CreatedBy,
//          CreatedOn:  moment(key.CreatedOn).format("MM/DD/YYYY"),
//          Subject:key.Subject,
//          Source:key.Source,
//          TicketSeverity:key.TicketSeverity,
//          TicketStatus:key.TicketStatus,
//          MiscEID:key.MiscEID,
//       });
//    })
//    setClosedTicketDatas(ClosedTaskDatas1)
//   //  console.log(closedTicketDatas);

//   })
//   .catch(error => {
//     console.log(error);
//    })
// }
 //function calling

//  useEffect(()=>{
//  GetOpenTicketDatas()
//  GetProgressingTicketsDatas()
//  GetClosedTicketDatas()
//  },[])
 

//state la erruka ticket datas

// console.log("stateopenticket"+openTicketDatas)


//edit tickets
// const EditTicket=(res,datas)=>{
// console.log("edit function ready")
// }
//delete tickets
// const DeleteTicket=(res, datas)=>{
//   console.log("delete function ready")
//   // console.log('DeleteTicket 1' , datas);
//   var URL = 'https://helpdeskservice.desss-portfolio.com/api/ProgressTickets/DeleteTicketbyid?MiscEID=' + datas.MiscEID;
//   axios.delete(URL)
//   .then(res => {
//    console.log('Delete Ticket',  res);
//    this.componentDidMount();
     
//  })
//   .catch(error => {
//   console.log(error);
//  })
// }


// const EmailMethod=(res,datas,TicketStatus)=>{
// console.log(data)
// console.log(TicketStatus)
// }


  return (
   <>
   <ClintHeader/>
   <div className="clint-navigation">
    <button className='btn btn-warning btn-ticket' onClick={()=>handleclicktrue()} >Ticket</button>
    <button className='btn btn-warning btn-profile' onClick={()=>handleclickflase()}>Profile</button>
   </div>
  <div className="row-12 clint-container">
    <div className="row-12 clint-Name">
      <h3 className='row-12 '>Tropy Dealer</h3>
      {
      useSelector((state) => state.helpdesk.clintactive)?(
        <Tabs
      defaultActiveKey="NEW-TICKETS"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="NEW-TICKETS" title="NEW-TICKETS">
        Tab content for openTicketDatas
      </Tab>
      <Tab eventKey="PROCESSED-TICKETS" title="PROCESSED-TICKETS">
        Tab content for processedtickets
      </Tab>
      <Tab eventKey="CLOSED-TICKETS" title="CLOSED-TICKETS">
        Tab content for closed tickets
      </Tab>
  
    </Tabs>
        
        
      ):(
     <Profile/>
      )}
    
    </div>
  </div>

   <Footer/>
   </>
  )
}

export default Clint