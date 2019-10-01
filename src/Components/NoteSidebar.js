import React from "react";

class NoteSideBar extends React.Component {
    constructor(props) {
        super(props);
        this.addNote = this.addNote.bind(this);
    }

    addNote(e) {
        var inputName = this._inputElement.value;
        if (inputName !== "") {
            this.props.addNote(inputName, "");
        }
        this._inputElement.value = "";
        e.preventDefault();

    }

    render() {
        var noteList = "";
        if (this.props.notes != null) {   
            noteList = this.props.notes.map((item) => {
            return (
                <div key={item.id}>
                    <span onClick={() => this.props.selectNote(item.id)}>
                    <button style={{margin: "4%"}} onClick={() => this.props.deleteNote(item.id)}>--</button>
                    {item.name}
                    </span>
                </div>
            );
        });
    }
        return (
            <div style={{width: "10%", marginLeft: "1%", marginTop: "1%"}}>
                <form onSubmit={this.addNote}>
                    <input ref = {
                        (a) => this._inputElement = a
                    }
                    placeholder="NoteName"/>
                    <button type="submit">Add</button>
                </form>
                {noteList}
            </div>
        )
    }
}

export default NoteSideBar;