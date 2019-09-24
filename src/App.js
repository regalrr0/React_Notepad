import { connect } from "react-redux";
import Notepad from "./Components/Notepad";

// Map redux state to component properties
// subscribes to all Store updates
// i.e. it returns whenever the store gets updated
function mapStateToProps(state){
  return {
    notes: state.notes
  };
}

// Actions
var createAction = "addNote";
var deleteAction = "deleteNote";


// Map actions to props
function mapDispatchToProps(dispatch) {
  return {
    createNote: function(noteName, noteContent) {
      return dispatch({type: createAction, noteName, noteContent});
    },
    deleteNote: function(noteName) {
      return dispatch({type: deleteAction, noteName});
    }
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
           notes={notes}/>
</Notepad>
*/
export default connectedComponent;