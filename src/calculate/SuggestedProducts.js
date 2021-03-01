import React from "react";
import "../App";
import {teens} from "./list";
import {adults} from "./list";
import {elders} from "./list";
import "./SuggestedProducts.css";

function SuggestedProducts(props){
    const age=props.age;
    if(NaN){
        return null;
    }

    if(age<=20){
        const listItem=teens.map((teen)=>{
            return(
              <div className="list" >
                  
            <p>{[teen.Title]}</p>
            <p>{[teen.Image]}</p>
            <p>{[teen.content]}</p>
            
            </div>
            )
            }
            );
          
            return(
                <div className="content" >
               <p className="products">Teens Products</p> 
              <p>{listItem}</p>
              </div>
            );
    }
    if(age>20 && age<60){
        const listItem=adults.map((adult)=>{
            return(
              <div className="list">
           <p>{[adult.Title]}</p>
            <p>{[adult.Image]}</p>
            <p>{[adult.content]}</p>
            
            
            </div>
            )
            }
            );
          
            return(
                <div>
              <p className="products">Adult Products</p>  
              <p>{listItem}</p>
              </div>
            );
    }
    if(age>=60){
        const listItem=elders.map((elder)=>{
            return(
              <div className="list">
            <p>{[elder.Title]}</p>
            <p>{[elder.Image]}</p>
            <p>{[elder.content]}</p>
            
            
            </div>
            )
            }
            );
          
            return(
                <div>
               <p className="products">Elders Products</p>  
              <p>{listItem}</p>
              </div>
            );
    }

} 
export default SuggestedProducts;