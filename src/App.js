import React,{useState,useEffect} from "react"
import Questionblock from "./components/Questionblock.js"
import Footer from "./components/footer.js"
import { nanoid } from 'nanoid'

 const App=()=>{
    const [start,setStart]=useState(false)
    const [data,setData]=useState('')
    const [check,setCheck]=useState(false)
    const [res,setRes]=useState(false)
    
//fetch occurs on initial rendering and on res state update when play again clicked    
useEffect(()=>{
    fetch('https://opentdb.com/api.php?amount=5&category=22&difficulty=easy&type=multiple',{cache:"no-cache"})
    .then(res=>res.json())
    .then(data=>{
        setData(data)
    })
    },[res]) 
    
//enter the quiz page
    const enter=()=>{
        modifiedArr()
        setStart(pre=>!pre)
    }
    
//modified array
    const modifiedArr=()=>{
    setData(pre=>pre.results.map((x,i)=>{
        return {
            id:i,
            choosen:false,
            category:x.category,
            question:x.question,
            correctans:x.correct_answer,
            options:[x.correct_answer,...x.incorrect_answers].sort(()=>0.5-Math.random()).map(y=>{
                                         return {
                                                    id:nanoid(),
                                                    eachoption:y,
                                                    isClicked:false
                                                }
                                        })}
                                   }))
                                 }
             
//select options with onClick  
const choose=(id)=>{
//prevent click after ans checked
if(check===true) return;
//update isClicked value to true in array when button clicked
 setData(pre=>pre.map(val=>{
//see any of the options is choosed or not if choosed  set oneOptionChoosed to true
   const oneOptionChoosed=val.options.some(x=>x.isClicked)
      return {
            ...val,
            choosen:!val.choosen,
            options:val.options.map(z=>{
                //when one option is previously choosed prevent choosing further
           return (id === z.id && oneOptionChoosed) ? { ...z,isClicked:false } : 
                //when one option is not previously choosed set isClicked to true
                                  id === z.id ? { ...z,isClicked:!z.isClicked} : z
                                            })}
                                        }))
                                    }

//create question component wich has question and option components
const createQuestions=()=>data.map((que,i)=>{
    return   <Questionblock
           key={i}
           id={que.id}
           question={que.question}
           options={que.options}
           correct={que.correctans}   
           checkans={check}
           chooseopt={choose} 
          />
})

//check the solutions
const checkAns=()=>{
    setCheck(!check)
}

//start new game 
const reset=()=>{
    setData('')
    setStart(false)
    setCheck(false)
    setRes(!res)
}

    return (
         <main>
        { start ?
        <div className="questions">
            {start && createQuestions()}
            <Footer handleClick={checkAns}
                    checkans={check}
                    newGame={reset}
                    finalData={data} />
        </div> : 
        <div className="enter--page">
             <h1>Quizzical</h1>
             <p>Geography quiz for 5 marks</p>
             <button onClick={enter} className="enter--button">Start quiz</button>
        </div> 
         }
        </main>
    )
}

export default App;