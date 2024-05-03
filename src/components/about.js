import React from 'react'

export default function About() {
    return (
        <div className="accordion container my-2" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <b>About Us</b>
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <b>TextUtils</b> is a ReactJs website built primarily to do various operations on regular typed text. You can safely use WordPad or NotePad for text drafting, and saving, but TextUtils offers much more than simple text drafting and formatting. TextUtils can convert your text to any case in just one simple click of a button. It can extract links and numbers safely from a labyrinth of random text or sophisticated documentation. It has an improved property of base64 encoding, reversal of your inputted text.You can even remove whitespaces from your scripted documents, and wear up your earphones to listen to it, instead of straining your eyes! It does a detailed analyzing of your text, and provides an output of words, and characters, along with reading time as well. The best part of TextUtils is that it is an open source project, as a result, dozens of new features are in the upcoming, which definitely makes it a cut above the rest.
                        The most eminent features of the website are as follows :
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <b>Analyze Your Text</b>
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        It is a Simple Text Analyzer , which mutilates your text, but in a tender way
                    </div>
                </div>
            </div>
        </div>
    )
}
