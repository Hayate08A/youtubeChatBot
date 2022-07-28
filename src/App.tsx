import React from "react";
import "./App.css";
import "./assets/styles/style.css";
import defaultDataset from "./dataset";

export default class App extends React.Component {
  constructor(props:any) {
    super(props);
    this.state = {
      answers: [],
      chats: [],
      currentId: "init",
      dataset: defaultDataset,
      open: false,
    };
  }
  render() {
    return (
      <section className='c-section'>
        <div className="c-box"></div>
      </section>
    );
  }
}
