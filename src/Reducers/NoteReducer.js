// reducer for notes


// const
const InitialNotes={
    notes:[{name: "First Note", content: "this content"}]
}

// define reducer
function NoteReducer(state=InitialNotes, action){
    console.log("AAAAA " + action.content);
    switch(action.type){
        case "addNote":
            return {
                ...state,
                notes : [...state.notes, { name : action.noteName,
                                           content : action.content } ]
            }
        case "deleteNote":
            return {
                ...state,
                notes : [...state.notes.filter(function(item) {
                    return item.name !== action.noteName
                })]
            }
        default:
            return state;
    }
}

export default NoteReducer;