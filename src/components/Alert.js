import React from 'react'

function Alert(props) {
    return (
        props.alertMsg && <div className={` alert alert-${props.alertMsg.type} alert-dismissible fade show`} role="alert" >
            <strong>{props.alertMsg.msg}</strong>

        </div >
    )
}

export default Alert
