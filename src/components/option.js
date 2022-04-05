import React from "react"

//button component
const Option=({handleClick,eachoption,id,isClicked,ansCheck,ans})=>{

  
   const styles = ansCheck ? { 
// when evaluvating soln
 backgroundColor: (isClicked && eachoption===ans) ? "#94D7A2" : //option clicked and correct ans
                  (isClicked && eachoption!=ans) ? "#F8BCBC" : // option clicked but wrong ans
                  eachoption===ans ? "#94D7A2"  // display correct ans 
                  : "#F5F7FB" ,
          border: (isClicked && eachoption===ans) ? "0.794239px solid #94D7A2" : //option clicked and correct ans
                  (isClicked && eachoption!=ans) ? "0.794239px solid #F8BCBC" : // option clicked but wrong ans
                  eachoption===ans ? "0.794239px solid #94D7A2"  // display correct ans 
                  : "0.794239px solid #4D5B9E",
        opacity:  (isClicked && eachoption===ans) ? 1 :  
                  (isClicked && eachoption!=ans) ? 0.5 : 
                  eachoption===ans ? 1  : 0.5               
                  } : { 
//when choosen the option
 backgroundColor: isClicked ? "#D6DBF5": "#F5F7FB",
          border: isClicked ? "0.794239px solid #D6DBF5" : "0.794239px solid #4D5B9E"
   }
   
    return  <button onClick={()=>handleClick(id)} style={styles} className="option">{eachoption}</button>
}

export default Option;
