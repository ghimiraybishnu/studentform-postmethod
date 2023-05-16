import React from 'react'
import './Header.css'

export default function Header(props) {
  return (

    <>
    <div className="heading">
     {props.title}
     <button onClick={()=>props.btnclick("You Clicked","Thank You")} > click me</button>
    </div>
   
    </>
  )
}
