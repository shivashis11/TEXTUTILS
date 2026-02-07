import React, {useState} from 'react'




export default function TextForm(props) {
  const handleUpClick = ()=> {
   // console.log("Upercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase", "success")

  }
  const handleLoClick = ()=> {
   // console.log("Upercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase", "success")

  }
 
  const handleOnchange = (event)=> {
   // console.log("on change");
    setText(event.target.value);
   

  }
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value) ;
    props.showAlert("copied to clipboard", "success")
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("extra spaces removed", "success")
  }

  const [text, setText] = useState(''); 
  return (
    
    <>
 
    <div className={`container text-${props.mode === 'light' ? 'dark':'light'}`}>
      <h1 >{props.heading} </h1>      
      <div className="mb-3">
                  
      <textarea className="form-control" value = {text} onChange = {handleOnchange} style={{backgroundColor: props.mode === 'dark' ? 'grey':'white', color: props.mode === 'dark' ? 'white' : 'black',}} id="myBox" rows="3"></textarea>
      </div>
      <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to uppercase</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleOnchange}>clear chat </button> 
      <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>copy </button> 
      <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove extra spaces </button> 
    </div>
    
    <div className={`container  text-${props.mode === 'light' ? 'dark':'light'}`} >
      <h1>Your text summary </h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>  
      <p>{text.length>0 ? text : 'enter your txt in the box to preview here.'}</p>
    </div>

    </>
  )
}
