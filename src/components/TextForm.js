import React, { useState } from "react";

export default function TextForm(props) {
    const handleUpClick = (event) => {
        // console.log("Uppercase was clicked: " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","success");
    };

    const handleLoClick = (event) => {
        // console.log("Uppercase was clicked: " + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase","success")

    };

    const handleClrClick = (event) => {
        // console.log("Uppercase was clicked: " + text);

        let newText = "";
        setText(newText);
        props.showAlert("Text Cleared","success")

    };

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard","success")
        
    };
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces Removed","success")

    }

    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    };
    const [text, setText] = useState("");

    // text="new text" //Wrong way to change the state
    // setText="(new text)" //Correct way to change the state

    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#18155a' }}>
                <div className="mb-3">
                    <h1>{props.heading}</h1>
                    <textarea
                        value={text}
                        onChange={handleOnChange}
                        style={{ backgroundColor: props.mode === 'dark' ? '#434246' : 'white', color: props.mode === 'dark' ? 'white' : '#18155a' }}
                        className="form-control"
                        id="myBox"
                        rows="10"
                    ></textarea>
                </div>
                <button
                    type="button"
                    className="btn btn-primary mx-1"
                    onClick={handleUpClick}
                >
                    Convert to uppercase
                </button>

                <button
                    type="button"
                    className="btn btn-primary mx-1"
                    onClick={handleLoClick}
                >
                    Convert to Lowercase
                </button>

                <button
                    type="button"
                    className="btn btn-primary mx-1"
                    onClick={handleClrClick}
                >
                    Clear Text
                </button>

                <button
                    type="button"
                    className="btn btn-primary mx-1"
                    onClick={handleCopy}
                >
                    Copy Text
                </button>

                <button
                    type="button"
                    className="btn btn-primary mx-1 my-1"
                    onClick={handleExtraSpaces}
                >
                    Remove Extra Spaces Text
                </button>

            </div>

            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#18155a' }}>
                <h2>Your text summary</h2>
                <p>
                    {/* {text.split(" ").length} words and {text.length} Characters */}
                    {text.split([(" ")]).length-1} words and {text.length} Characters
                </p>
                <p>{0.008 * text.split(" ").length} Minutes Read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>
            </div>
        </>
    );
}
