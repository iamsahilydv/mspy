import React, { useEffect, useState } from 'react'
import SizeContext from './SizeContext';

const SizeState = (props) => {
    const [width,setWidth]= useState(window.innerWidth)
    
    const handleSize = () => {
        setWidth(window.innerWidth);
    };
    console.log(width)
    useEffect(() => {
        window.addEventListener("resize", handleSize);
        return () => window.removeEventListener("resize", handleSize);
      }, []);
  return (
    <SizeContext.Provider value= {{width,setWidth}}>
        {props.children}
    </SizeContext.Provider>
  )
}

export default SizeState