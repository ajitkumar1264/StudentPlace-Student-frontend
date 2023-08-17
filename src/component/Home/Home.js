import React, { useContext } from 'react'
import Course from "./Course";
import Insight from "./Insight";
import Landingp from "./Landingp";
import Mission from "./Mission";
import Work from "./Work";
import Contact from './Contact';
import StudentRegi from '../Auth/StudentRegi';
import context from '../context/context';

function Home() {
  const {studentRegi}=useContext(context)
  return (
    
    <>
    <Landingp/>
    <Course/>
    <Mission/>
   {studentRegi && <Insight/> } 
    <Work/>
    <Contact/>
   
    </>
  )
}

export default Home