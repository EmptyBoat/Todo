import React, { Component } from 'react';
import FormComponent from "./components/FormComponent";
//import ListItem from "./components/ListItems";
import List from "./components/List";
import HeaderComponent from "./components/HeaderComponent";
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      todos: [
          {id:1,name:"shopping",complete:false},
          {id:2,name:"swimming",complete:false}
      ],
      message:""
   };

   //โคตรงง
   this.onChangeMessage = this.onChangeMessage.bind(this);
   this.onSubmitMessage = this.onSubmitMessage.bind(this);
  }
  onChangeMessage(e){
      this.setState({ message: e.target.value});
  }
  onSubmitMessage(e){
      //ป้องกันเปลี่ยนหน้า
      e.preventDefault();
      let oldTodos = this.state.todos;
      let todoLength = this.state.todos.length;
      let lastId = this.state.todos[todoLength - 1].id;
      let newMessage = {
        id:lastId+1,
        name: this.state.message,
        complete:false
      };
      oldTodos.push(newMessage);
      this.setState({todos:oldTodos});
  }
  render() {
    return (
      <div
        style={{
          borderColor: "#e18c6a",
          borderWidth: 2,
          borderStyle: "solid",
          borderRadius: 4,
          width: 1024,
          margin: "auto",
          marginTop: 20
        }}
      >
        
        <HeaderComponent/>
        <List todos={this.state.todos}/>
         
        <FormComponent 
          onChangeMessage={this.onChangeMessage} 
          onSubmitMessage={this.onSubmitMessage} 
        />
      </div>
    );
  }
}

export default App;