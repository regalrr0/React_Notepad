import { connect } from "react-redux";
import Notepad from "./Components/Notepad";

// Map redux state to component properties
// subscribes to all Store updates
// i.e. it returns whenever the store gets updated
function mapStateToProps(state){
  return {
    notes: state.notes,
    selectedNote: state.selectedNote
  };
}

// Actions
var createAction = "addNote";
var deleteAction = "deleteNote";
var selectAction = "selectNote";

// Map actions to props
function mapDispatchToProps(dispatch) {
  return {
    createNote: function(noteName, noteContent) {
      return dispatch({type: createAction, noteName, noteContent});
    },
    deleteNote: function(noteId) {
      return dispatch({type: deleteAction, noteId});
    },
    selectNote: function(noteId) {
      return dispatch({type: selectAction, noteId});
    },
  };
}

// the higher order component (HOC)
// passes map functions to Counter component
var connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Notepad);

// this renders the following:
/*
<Connect>
  <Notepad createNote={createNote}
           deleteNote={deleteNote}
           notes={notes}
           selectNote={selectNote}/>
</Notepad>
*/
export default connectedComponent;