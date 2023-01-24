import ReactDOM from "react-dom"; // {ReactDOM} is wrong and cannot be recognized in this way, What is the difference with {} and without it?
import "./index.css";
import { Root } from "./Root";

ReactDOM.render(<Root />, document.querySelector("#root")); // replaced instead App
