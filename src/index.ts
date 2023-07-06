import App from "./App";
import { simulateReact } from "./simulateReact";

const render = () => {
  const root = document.getElementById('root');
  simulateReact.init(root, App);
}

window.addEventListener("DOMContentLoaded", () => render());