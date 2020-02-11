import "normalize.css";
import "./index.scss";
import { Elm } from "./Main.elm";

Elm.Main.init({
  flags: JSON.stringify(process.env),
  node: document.body
});
