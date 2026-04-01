import React, { useState } from 'react'
import img from '../Images/image.png';

export default function Changer() {
    const textUpClick=()=>{
        let newText=change.toUpperCase();
        setChange(newText)
    }

 const textDownClick=()=>{
        let newText=change.toLowerCase();
        setChange(newText)
    }

    const textClearClick=()=>{
        let newText=''
        setChange(newText)
    }

// copy text 
 const Copy = () => {
    navigator.clipboard.writeText(change)
      .then(() => {
        alert("✅ Text copied!");
      })
      .catch(() => {
        alert("❌ Copy failed");
      });
  };



 const removeSpaces = () => {
  setChange(change.replace(/\s+/g, " ").trim());
};


const textOnChange=(e)=>{
    console.log('onChange')
    setChange(e.target.value)
}




    const [change,setChange]= useState('')


// contact form 

const buttonStyle = {
  background: "#3b82f6",
  color: "white",
  border: "none",
  padding: "10px 15px",
  borderRadius: "8px",
  cursor: "pointer",
  flex: "1 1 120px", // 👈 IMPORTANT
  minWidth: "120px",
  textAlign: "center"
};

  return (
   <>
 
<div className="mb-3 container buttonStyle" id='home'  style={{
  display: "flex",
  flexWrap: "wrap",
  gap: "10px"
}}>
  <h3 className='fw-bold gradient-text mb-3'>👇Convert the text to Uppercase or Lowercase.</h3>
  <textarea className="form-control" id="myChanger" value={change} onChange={textOnChange} placeholder='Enter Text to convert lowercase to UPPERCASE' rows="10"></textarea>
  <button className='btn btn-outline-info my-4 m-1 text-black' onClick={textUpClick}>UPPERE</button>
   <button className='btn btn-outline-info my-4 m-1 text-black' onClick={textDownClick}>LOWER</button>
    <button className='btn btn-outline-info my-4 m-1 text-black' onClick={textClearClick}>CLEAR ALL</button>
    <button className='btn btn-outline-info my-4 m-1 text-black' onClick={removeSpaces}>Trim </button>
    <button className='btn btn-outline-info my-4 m-1 text-black' onClick={Copy}>Copy </button>
</div>
<div class="container">
    <h2 className='fw-bolder'>Your Text Summary </h2>
    <p>{change.split('').length} Words and {change.length} Alpahabet</p>
    <p>
  Estimated reading time:  <strong> {0.008 * change.split('').length} minutes</strong>
</p>
<h2 className='text-center fw-bolder'>PREVIEW</h2>
<div className="line"></div>
<p className='my-5'>{change}</p>
</div>
<div className="container" id='about'>
    <h2 className='text-center fw-bolder'>ABOUT US </h2>
<div className="line"></div>
</div>
   <section className="about-container">
      
   
     

      {/* Text Side */}
      <div className="about-text my-4">
     
        <p>
        This is a simple and useful Text Converter web application built using React.
It allows users to easily convert their text into UPPERCASE or lowercase with just one click.

You can also clear the text instantly, count words, and see estimated reading time.
This app is designed to make text editing fast, simple, and user-friendly.

This project helped me improve my React skills and understand how state management works.
        </p>
      </div>
       <div className="about-image " width='20px'>
       
         <img  src={img} alt="text converter"  />
      </div>

    </section>





   </>
  )
}

