import { combineReducers } from "redux";

import FilmeReducer from "./FilmeReducer";
import UsuarioReducer from "./UsuarioReducer";

export default combineReducers({
  FilmeReducer,
  UsuarioReducer
});
