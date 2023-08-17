import React,{useState} from 'react'
import context from "./context"

function StuState(props) {


    const [login, setlogin] = useState(false);
    const [studentRegi, setstudentRegi] = useState(false);

  return (
   <context.Provider value={{login,setlogin,studentRegi, setstudentRegi}}>
   {props.children}
   </context.Provider>
  )
}

export default StuState