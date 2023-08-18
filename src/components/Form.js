import { useState } from "react"
import "./Form.css"


export default function Form(props) {
    const [Text, setText] = useState('')



    const upcase = () => {

        let newText = Text.toUpperCase()
        setText(newText)

    }
    const locase = () => {
        let newText = Text.toLowerCase()
        setText(newText)
    }
    const copyToClip = () => {
        navigator.clipboard.writeText(Text);
        props.showA("Copied To clipboard", "danger")

    }
    const cleartext = () => {
        setText('')
    }
    const textfield = (event) => {
        setText(event.target.value)
    }





    return (
        <>
            <div className="container my-3">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={Text} onChange={textfield} id="textBox" rows="8" style={props.darkStyle}></textarea>
                </div>
                <button type="button" className="btn btn-warning mx-1" onClick={upcase} >To Uppecase</button>
                <button type="button" className="btn btn-primary mx-1" onClick={locase} >To Lowercase</button>
                <button type="button" className="btn btn-info mx-1" onClick={copyToClip} >Copy Text</button>
                <button type="button" className="btn btn-danger mx-1" onClick={cleartext} >Clear</button>

            </div>
            <div className="container py-3">
                <h1>Your text summery</h1>
                <p>{Text.split(" ").length} words and {Text.length} characters</p>
                <p>{0.008 * Text.split(" ").length} Minute to read</p>
                <h3>Preview</h3>
                <p>{Text}</p>
            </div>

        </>
    )
}
