import React, { useState } from 'react'

export default function TextForm(props) {
    const pid="_aman_gupta_2k21_se_21";
    const defineMacro="#define";
    const whitespace=" ";
    const nextLine="\n";
    let stringArray=[];// this will be containing all prefix of '('
    let queue=[];
    let prevElement="";
    const handleUpClick = () => {
        let prefixText="";//prefixText will contain the macros that we will be declaring at the start
        let newText="";//new text that contains changes
        for(const element of text){
            if(element==='('){
                stringArray.push(prevElement);
            }
            if(element===" ") prevElement="";
            else prevElement=prevElement+element;
            queue.push(element);
        }
        for(const element of stringArray){//traversing the array by using for...of method
            prefixText=prefixText+defineMacro+whitespace+element+pid+whitespace+element+nextLine;
        }
        while(queue.length!==0){
            let temp=queue.shift();
            if(temp==='('){
                newText=newText+pid+temp;
            }
            else newText=newText+temp;
        }
        
        setText(prefixText+newText);
    }
    const handleUpClick2 = () => {
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
                <button onClick={handleUpClick} className='btn btn-primary my-3'>Remove Plagrism</button>
                <button onClick={handleUpClick2} className='btn btn-primary my-3'>Clear the text</button>
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
