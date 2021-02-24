import React, { useState } from "react";
import "./App.css";


import SuggestedProducts from "./SuggestedProducts"
function App(){
  
        const [Name,setname]= useState("");  
        const [Dob,setdob] = useState ("");
        const [Age,setage] = useState ("");

           
        const [teens, setteens] = useState([]);
        const [adults, setadults] = useState([]);
        const [elders,setelders] = useState([]);

        
        const handleName=(e)=>{

            setname(e.target.value);
  
        }
        const handleAge=(e)=>{
            setdob(e.target.value);
        }

        const Updated=(e)=>{

            e.preventDefault();
            let monthstring;
            let month;
            let today = new Date(),
            dob1= new Date(Dob),
            year= today.getFullYear() -  dob1.getFullYear(),
            dob1mon=dob1.getMonth(),
            todaymon=today.getMonth();

            if(year<0){
                monthstring=`enter vaild Dob`;
                setage(monthstring);
            }

            else if( year >0 && year <=1){
              {todaymon>dob1mon? month=todaymon-dob1mon : month=0};
              
              setage(month);
            }
            else{
            
            
           setage(year);
            }

           //grouping

          if (year<=20){
            setteens([
              ...teens,
              {
                name1: Name,
                age1 : Age
              }
            ]);
          } 
          if (year>20 && year <60){
            setadults([
              ...adults,
              {
                name1: Name,
                age1 : Age
              }
            ]);
          } 
          if (year>=20){
            setelders([
              ...elders,
              {
                name1: Name,
                age1 : Age
              }
            ]);
          } 


         

    }

        return(
          <div>
              <div className="header">

                    <form  onSubmit={Updated}>
                    <p>Enter Name :</p> 
                    <input type="text" onChange={handleName} required/>
                    <p>Enter DOB :</p>
                    <input type="date" onChange={handleAge}  required/>
                    <button>Calculate Age</button>
                    </form>
                    
                    <p>{Age}</p>

                   
                    
              </div>

               {Age>0 && 
                <SuggestedProducts age={Age}/>

               } 
               
              
              
              
                
          </div>
    

        );

}


export default App;