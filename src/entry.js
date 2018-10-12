// SCSS

require("./style.scss");

// Elm

const flags = JSON.stringify({
  message: "Hello World"
});

const { Elm } = require("./elm/Main.elm");

const app = Elm.Main.init({
  node: document.getElementById("elm"),
  flags
});

app.ports.setTitle.subscribe(title => (document.title = title));

// For tests

module.exports = {
  flags
};
