import React, { useState } from 'react'

export default function TextForm(props) {
    //Text on changes
    const changedText = (event) => {
        setText(event.target.value);
        ///listen();
    }
    //Convert to uppercase
    const changeToUppercase = () => {
        const newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted to Uppercase","success");
    }
    //Convert to lowercase
    const changeToLowercase = () => {
        const newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted to Lowercase","success");
    }
    //Convert to lowercase
    const clearAll = () => {
        const newtext = "";
        setText(newtext);
        props.showAlert("TextArea Blanked","success");
    }
    //Theme change
    // const changeColor = () => {
    //     if (myStyle.backgroundColor === 'white') {
    //         setMyStyle({
    //             backgroundColor: 'black',
    //             color: 'white'
    //         })
    //     } else {
    //         setMyStyle({
    //             backgroundColor: 'white',
    //             color: 'green'
    //         })
    //     }
    // }
    //Text to Speech
    const listen = () => {
        const speech = new SpeechSynthesisUtterance();
        speech.text = text;
        window.speechSynthesis.speak(speech)
    }

    const [text, setText] = useState('');
    // const [myStyle, setMyStyle] = useState({
    //     backgroundColor: 'white',
    //     color: 'green'
    // })
    return (
        <div className='container'>
            <h1 className={``}>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control border border-black" value={text} id="myTextArea" rows="3" onChange={changedText}></textarea>
            </div>
            <button type="button" className="btn btn-primary m-2" onClick={changeToUppercase}>To Uppercase</button>
            <button type="button" className="btn btn-primary m-2" onClick={changeToLowercase}>To Lowercase</button>
            <button type="button" className="btn btn-primary m-2" onClick={clearAll}>Clear All</button>
            <button type="button" className="btn btn-primary m-2" onClick={listen}>Text-Speech</button>
            <button type="button" className="btn btn-primary m-2">Speech-Text</button>
            <div className='container'>
                <p>{text}</p>
                <p>Number of Words - {text.split(' ').length} And Number of Characters - {text.length}</p>
                <p>Estimated Time to read - {0.08 * text.split(' ').length} minutes</p>

                {/* <button type="button" className="btn btn-primary mx-2" onClick={changeColor}>Change Theme</button> */}
            </div>
        </div>
    );
}
