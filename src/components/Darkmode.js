import React from 'react'

export default function Darkmode(props) {
    return (
        <div>
            <button className="btn btn-outline-darks" onClick={props.darkBtn} style={props.darkBtnStyle}>{props.btnText}</button>
        </div>

    )
}
