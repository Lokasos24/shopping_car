import { renderUI } from "../components/renderUi.js";
import { registerUser } from "./registro.js";

const stateUsers = []

export function loginState(){
    registerUser(stateUsers)
    renderUI(stateUsers)
}