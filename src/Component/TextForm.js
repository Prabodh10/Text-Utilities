import React, {useState} from 'react'

export default function TextForm(props) {

  const handleOnchange = (eve) => {
    console.log("on change");
    setText(eve.target.value);
  }

const handleUpClick = ()=> {
  console.log("button clicked");
  // setText("Ho gaya change");
  let newText = Text.toUpperCase();
  setText(newText);
}

const handleLoClick = ()=> {
  console.log("button clicked");
  // setText("Ho gaya change");
  let newText = Text.toLowerCase();
  setText(newText);
}


const handleKHALI = ()=> {
  // console.log("button clicked");
  let newText = "";
  // setText("Ho gaya change");
  setText(newText);
}




const [Text, setText] = useState("Enter Text");

  return (
    <>
    <div className="container my-3" style={{color: props.mode==='dark'? 'white' : 'black'}}>

    <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value = {Text} onChange = {handleOnchange} style={{backgroundColor: props.mode==='dark'? 'grey' : 'white', color: props.mode==='dark'? 'white' : 'black'}} id="exampleFormControlTextarea1" rows="10"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Click to Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Click to Lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleKHALI}>Khaali</button>

   </div>
   <div className="container" style={{color: props.mode==='dark'? 'white' : 'black'}}>
    <p> {Text.split(" ").length} words , {Text.length} chars</p>
      <h2>Preview</h2>
       {Text}
   </div>
   </>
  )
}

