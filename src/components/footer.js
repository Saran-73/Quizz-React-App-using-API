import React from "react"

export default function Footer({handleClick,checkans,newGame,finalData}){
    
    //check for the conditio where clicked is true and correct ans is == clciked option  
     const getMarks=finalData.map(x=>{
            return x.options.filter(y=>(y.isClicked && x.correctans=== y.eachoption))
                 })
    // for false values filter give empty array 
    //combine the empty array with array of value and get its length            
    const marksArr=getMarks[0].concat(getMarks[1]).concat(getMarks[2]).concat(getMarks[4]).concat(getMarks[3])        
        
    const marks=()=>marksArr.length
    
    return  ( <footer>
             { checkans ? <div className="footer--marks">
             <p>You scored {marks()}/5 correct answers</p>
             <button className="new--game" onClick={newGame}>Play again</button> </div> :
              <button className="check--ans" onClick={handleClick}>Check answers</button> }
            </footer>
    )
}
   
