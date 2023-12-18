import React, { useState } from 'react'
//component
import './Header.css'
//local logo
import ZmartHelpDesk from '../../../Asserts/images/zmart Helpdesk logo.png'
//react icons
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
//react router
import { useNavigate } from 'react-router-dom';
//redux
import { useDispatch,useSelector } from 'react-redux';
import { getclintactive } from '../../../redux slices/helpdeskSlice';

const ClintHeader = () => {
    const dispatch=useDispatch();
    const navigate=useNavigate();

    const [burger,setBurger]=useState(true);

    // window.onscroll=()=>{
    //     setBurger(!burger)
    // }

    const gotologin=()=>{
        navigate("/")
    }

    const ticket=()=>{
        handlechange();
       handleclicktrue();
    }

    const profile=()=>{
        handlechange();
        handleclickflase();
        
    }

    const handlechange=()=>{
        setBurger(true)
    }
    const handleclicktrue=()=>{
        dispatch(getclintactive(true))
    }
    const handleclickflase=()=>{
        dispatch(getclintactive(false))
    }
     
    // console.log("Hello",useSelector((state) => state.helpdesk.clintactive))


  return (
      <>
      <header>
    
        <div className="burger-icon">
            <div className="icon">
            {burger?(<GiHamburgerMenu onClick={()=>setBurger(!burger)}/>):(
                <>
                      <ImCross onClick={()=>setBurger(!burger)}/>
                   <div className="list">
                    <p className='btn-ticket' onClick={()=>ticket()}>Tickets</p>
                    <p className='btn-profile'onClick={()=>profile()}>Profile</p>
                    <button className='btn   fw-bold ' onClick={()=>gotologin()} >Logout</button>
                   </div>
                </>
         
            )
                
            }
            </div>
           
        </div>
        <div className="header-container">
            <div className="header-img ">
            <img  src={ZmartHelpDesk} height="50px" width="100%" alt="Helpdesk" />
            </div>
            
            <div className="logout-btn ">
                <button className='btn btn-light fs-6 fw-bold ' onClick={()=>gotologin()}>Logout</button>
            </div>
        </div>
      </header>
      </>
  )
}

export default ClintHeader