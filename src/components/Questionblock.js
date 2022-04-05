import React from "react"
import Option from "./option.js"

//question block component
   const Questionblock=({question,correct,checkans,options,chooseopt})=>{
 //map the options array to create options
    return(
        <div className="question--block">  
         <h2>{question}</h2>
         <div className="option--btn">
             {options.map((opt,i)=>{
                return  <Option key={i} 
                                id={opt.id} 
                                handleClick={chooseopt} 
                                eachoption={opt.eachoption}
                                isClicked={opt.isClicked}
                                ansCheck={checkans} 
                                ans={correct}
                                />
             })}
          </div>
        </div>
    ) 
}

export default Questionblock; 