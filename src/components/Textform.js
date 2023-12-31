import React, {useState} from 'react';

export default function Textform(props) {
    const handleUpClick = ()=>{
        console.log("uppercase was clicked");
        let Newtext = text.toUpperCase();
        setText(Newtext);
        props.showAlert("the test has been updated to uppercase","success")
    }
    const handledownClick = ()=>{
        console.log("lowercase was clicked");
        let Newtext = text.toLowerCase();
        setText(Newtext);  
        props.showAlert("the test has been updated to lowercase","success")                                                                                                                                                                                      
    };
   const handleOnChange = (event)=>{
    console.log("on change");
    setText(event.target.value);
   };
   
    const [text,setText] = useState('');
    return (
    <>
        <div className='container'>
            <h1>{props.Heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" id="myBox" value = {text} onChange={handleOnChange}  rows="3"></textarea>
            </div>
            <button type="button" className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
            <button type="button" className="btn btn-primary mx-2" onClick={handledownClick}>Convert to lowercase</button>
            <button type="button" className="btn btn-dark mx-2 my-2" onClick={props.toggleMode}>change {props.mode} mode</button>
        </div> 
        
        <div className='container my-3'>
            <h1>your text summary</h1>
            <p>{text.split(" ").length}words and {text.length} characters</p>
            

        </div>
    </>
  )
}
