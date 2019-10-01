import React from "react";
import store from "../Store";
import NoteSideBar from "./NoteSidebar";

class Notepad extends React.Component {
    render() {

        // TODO: NOT BEST PRACTICE
        // HACK HACK HACK
        var selected = "";
        console.log(store.getState().selectedNote);
        if (store.getState().selectedNote !== undefined) {
            console.log("NOT NULL " + store.getState().selectedNote.name)
            selected = store.getState().selectedNote.name;
        }
        
        return (
            <div className="noteContainer">
                <NoteSideBar notes = {this.props.notes}
                             addNote = {this.props.createNote}
                             deleteNote = {this.props.deleteNote}
                             selectNote = {this.props.selectNote}>
                </NoteSideBar>
            </div>
        )
    }
}

export default Notepad;