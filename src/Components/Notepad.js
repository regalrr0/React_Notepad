import React, {Component} from "react";

class Notepad extends React.Component {
    render() {
        var i = 1;

        var noteNames = "";
        if (this.props.notes != null) {   
                noteNames = this.props.notes.map((item) => {
                i++;
                return (<li>{item.name}</li>);
            });
        }
        return (
            <div className="noteContainer">
                <button className="buttons"
                        onClick={() => this.props.createNote(i + "test", "this is a big ole test")}>++
                </button>
                <button className="buttons"
                        onClick={() => this.props.deleteNote(--i + "test")}>--
                </button>
                <span><ul>{noteNames}</ul></span>
            </div>
        )
    }
}

export default Notepad;