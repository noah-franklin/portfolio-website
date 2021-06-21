import Body from "./Body";
import React from "react";
// eslint-disable-next-line
import { Collapse, ScrollSpy } from "bootstrap";

class App extends React.Component {
  refreshCheck() {
    const url = window.location.href;
    var bookmark = url.split("#");
    if (bookmark[1] !== undefined) {
      // console.log(bookmark[1]);
      const navLink = document.querySelectorAll(
        '[href="#' + bookmark[1] + '"]'
      );
      // console.log(navLink[0]);
      // console.log(url);
      navLink[0].classList.add("active");
    }
  }

  componentDidMount() {
    this.refreshCheck();
  }

  render() {
    return (
      <div className="App">
        <Body></Body>
      </div>
    );
  }
}

export default App;
