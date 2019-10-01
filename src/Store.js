import { createStore } from "redux";
import NoteReducer from "./Reducers/NoteReducer";

// create store
var store = createStore(NoteReducer);

export default store;