import { useState } from "react";
import React from "react";

export default function About(props) {
    // const [myStyle,setMyStyle] =useState(
    //     {
    //         color:'black',
    //         backgroundColor:'white'
    //     }
    // )
    let myStyle={
      color:props.mode==='dark'?'white':'black',
      backgroundColor:props.mode==='dark'?'rgb(36 74 104)':'white',
      borderColor:props.mode==='dark'?'white':'black',
      

    }
    const [btnText,setBtnText]=useState("Enable Dark Mode")
    
    
  return (
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>About Us</h2>
      <div class="accordion" id="accordionExample" style={myStyle}>
        <div class="accordion-item" style={myStyle}>
          <h2 class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
             <strong>Analyse your text</strong> 
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body" style={myStyle}>
             Textutils gives you a way to analyze your text quickly and efficiently.Be it a word count,character count etc....
            </div>
          </div>
        </div>
        <div class="accordion-item" style={myStyle}>
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
             <strong>Free to use</strong> 
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body" style={myStyle}>
              Textutils is a free character counter tool that provides instant character count & word count statistics for a given text.TextUtils reports the number of words and characters.Thus it is suitable for writing text with word/character limit.
            </div>
          </div>
        </div>
        <div class="accordion-item" style={myStyle}>
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
             <strong> Brower compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body" style={myStyle}>
              This word counter software works in any web browsers such as chrome,Firefox,Internet Explorer,Safari,OPera.It suits to count characters in facebook,blog,books,excel docs,pdf docs etc.
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
