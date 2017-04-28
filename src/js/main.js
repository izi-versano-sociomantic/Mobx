import "../css/main.css"
import React from "react"
import ReactDOM from "react-dom"
import TodoStore from "./TodoStore"
import TodoList from "./TodoList"
import { autorun, computed, observable } from "mobx"
import { observer } from "mobx-react"

const app = document.getElementById("app")

//ReactDOM.render(<TodoList store={TodoStore} />, app)


class Person {
  @observable firstName = "Michel";
  @observable lastName = "Weststrate";
  @observable nickName;

  @computed get fullName() {
    return this.firstName + " " + this.lastName;
  }
}


const michel = new Person();

debugger

// Reaction: log the profile info whenever it changes
autorun(() => console.log(michel.nickName ? michel.nickName : michel.fullName));

// Example React component that observes state
const profileView = observer(props => {
  debugger
  if (props.person.nickName)
    return <div>{props.person.nickName}</div>
  else
    return <div>{props.person.fullName}</div>
});

// Action:
setInterval(() => michel.nickName = "mweststrate", 5000)


ReactDOM.render(React.createElement(profileView, { person: michel }), app);
// This snippet is runnable in jsfiddle: https://jsfiddle.net/mweststrate/049r6jox/
