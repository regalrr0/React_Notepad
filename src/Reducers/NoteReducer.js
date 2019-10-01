// reducer for notes

// const
var initId = guidGenerator();
const InitialNotes={
    notes : [{name: "First Note", content: "this content", id: initId}],
    selectedNote : {name: "First Note", content: "this content", id: initId}
}

function guidGenerator() {
    var S4 = function() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}

// define reducer
function NoteReducer(state=InitialNotes, action){
    switch(action.type){
        case "addNote":
            return {
                ...state,
                notes : [].concat(state.notes, [{name : action.noteName, content : action.content, id: guidGenerator()}]),
                selectNote : action.noteName
            }
        case "deleteNote":
            return {
                ...state,
                notes : [...state.notes.filter(function(item) {
                    return item.id !== action.noteId
                })]
            }
        case "selectNote":
            console.log("Selected: " + action.noteId);
            return {
                ...state,
                selectedNote : state.notes.find(function(item) {
                    return item.id === action.noteId
                })
            }
        default:
            return state;
    }
}

export default NoteReducer;