import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleUpClick2 = () => {
        let newText=text.toLowerCase();
        setText(newText);
    }
    const handleUpClick3 = () => {
        let newText=text.trim();
        setText(newText);
    }
    const handleUpClick4 = () => {
        setText("");
    }
    const handleUpChange = (event) => {
        setText(event.target.value)
    }
    const [text, setText] = useState("");
    return (
        <>
            <div className='container my-3'>
                <h1>{props.heading}</h1>
                <textarea value={text} onChange={handleUpChange} className="form-control" id="textForm" rows="8" placeholder='Enter your text here.' style={{color:props.mode==='light'?'black':'white',backgroundColor:props.mode==='dark'?'#03182e':'white'}}></textarea>
            </div>
            <div className="btnContainer">
                <button onClick={handleUpClick} className='btn btn-primary my-3'>Turn into UpperCase</button>
                <button onClick={handleUpClick2} className='btn btn-primary my-3'>Turn into LowerCase</button>
                <button onClick={handleUpClick3} className='btn btn-primary my-3'>Trim the text</button>
                <button onClick={handleUpClick4} className='btn btn-primary my-3'>Clear the text</button>
            </div>
            <div className='container my-3'>
                <h1>Your text summary</h1>
                {/* split(" ")returns an array of substrings seperated by a " " and length will return the length */}
                {/* length is a property of a string not a method or a function hence no () */}
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                {/* 0.008 minutes is the average time taken to read a word. */}
                <p>It can be read in {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes.</p>
            </div>
        </>
    );
}
