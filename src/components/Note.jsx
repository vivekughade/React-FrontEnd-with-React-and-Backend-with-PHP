import React from "react";

const Note = (props) => {
    return (<>
        <div className="note">
            <div className="main">
                <h3>{props.title}</h3>
                <p>{props.note} </p>
            </div>
            <i className="fas fa-edit"></i>
            <i className="fas fa-trash-alt" onClick={props.onClick}></i>
        </div>
    </>)
}

export default Note;