import React from 'react'
import './functions.css'
import Functions from './Functions'
import { useNavigate } from 'react-router-dom';
const FunctionComponent = () => {
  const navigate = useNavigate();

  const goHome = () => {
    console.log("clicked");
    navigate('/home');
  };


  const goMaps = () => {
    console.log("Maps");
    navigate('/maps');
  };
  return ( 
    <div className='functionstyle'>
      <button onClick={goMaps}>Home</button>
      <Functions props = {{Topic: "Chart", Content: ["Start-wise", "Yearwise", "TypeWise"]}}/>
      <Functions props = {{Topic: "Reg. Societies", Content:["Start-wise List", "All Reg. Societies(pdf)", "Societies Registered before 1986", "Calender Year Wise-List", "Financial Year wise-list"]}}/>
      <Functions props = {{Topic: "Forms", Content:["Form-I", "Form-II", "Form-III", "Form-IV", "Form-V"]}}/>
      <Functions props = {{Topic: "MSCS Act", Content:["MSCS Act, 2002", "MSCS Rule, 2002", "CheckList", "Model Bye-Laws", "National Policy on Cooperative 2002"]}}/>
      <Functions props = {{Topic: "Application", Content:["Received Application", "Status of Application"]}}/>
      <Functions props = {{Topic: "MSCS-MIS", Content:["New User Registration", "User Login", "Admin User"]}}/>
      <Functions props = {{Topic: "Reports", Content:["All Reg Societies", "Registered User", "Filed Annual Returns Online", "Annual Return Offline", "Reminder Message"]}}/>
      <Functions props = {{Topic: "Liquidation", Content:["Societies Under Liquidation", "Liquidation Process Initiated"]}}/>
      <button onClick={goHome}>Bank</button>


    </div>
  )
}

export default FunctionComponent