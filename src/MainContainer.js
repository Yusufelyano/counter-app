import { useState } from "react"
import Buttons from "./Buttons.js"
import Number from "./Number.js"

function MainContainer(){
   const [counter, setCounter] = useState(0)
   
   return<div>
      <Number counter={counter} />
      <Buttons counter={counter} setCounter={setCounter} />
   </div>
}


export default MainContainer