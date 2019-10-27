import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const init = () => {

  const settings = {
    places: [`Beautiful & luxurious apartment at great location`, `Wood and stone place`, `Canal View Prinsengracht`, `Nice, cozy, warm big bed apartment`]
  };

  const onNameHandler = () => {};

  ReactDOM.render(<App places={settings.places} onNameClick={onNameHandler} />, document.querySelector(`#root`));
};

init();
