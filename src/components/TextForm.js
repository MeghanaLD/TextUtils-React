import React,{useState} from "react";

export default function TextForm(props) {
    
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Message is Capitalised","success")
        
    }
    const handleDownClick=()=>{
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Message is De-Capitalised","success")
        
    }
    const handleOnChange=(event)=>{
            setText(event.target.value);
    }  
    const handleFocus=()=>{
        setText("")
        props.showAlert("Text area is cleared","success")
    }
    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces are removed successfully","success")
    }
    const [text,setText]=useState('');
  return (
    <>
    <div className="container"  >
      <h1 className="mb-3">{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'rgb(36 74 104)':'white',color:props.mode==='light'?'black':'white'}} id="myBox" rows="12"></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleDownClick}>Convert to Lowercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleFocus}>Clear Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" >
        <h2>Your text Summary</h2>
        <p>{text.split(/\s+/).filter(word => word !== "").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter(word => word !== "").length} Minutes to read the paragraph</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the text box above to preview it here."}</p>
    </div>
    </>
  );
}
