import './App.css';
import React, { Component } from 'react'

const MyInput = (props) => {
  return (<input
    type="text"
    ref={props.inputRef} />)
}
const FuncCustomComp = () => {
  let textRef = null;
  const handleClick = () => {
    alert(`yey, input val is ${textRef.value}`)
  }
  return (
      <div style={styles.myInput}>
        <MyInput inputRef={(input) => { textRef = input; }}/>
        <input
          type="button"
          value="show input"
          onClick={handleClick}
        />
        </div>
  );
}
export class App extends Component {

  onClick = () => {
    alert(`yey submited! ${this.firstName.value}, ${this.lastName.value}  `)
  }
  onKeyUp = (target, e) => {
    if(e.keyCode === 13) {
      switch(target) {
        case 'firstName':
          this.lastName.focus();
          break;
        case 'lastName' :
          this.age.focus();
          break;
        case 'age':
          this.submit.focus();
          break;
        default :
          this.submit.focus();
         }
    }
  }
  render() {
    return (
      <div className="App">
        <div>
          <FuncCustomComp/>
        </div>
        <div>
          <div>
            <span>First Name:</span>
            <input 
            type="text"
            ref={(input)=>{this.firstName=input;}} 
            onKeyUp={this.onKeyUp.bind(this,'firstName')} />
          </div>
          <div>
            <span>Last Name:</span>
            <input type="text" 
            ref={(input)=>{this.lastName=input;}} 
            onKeyUp={this.onKeyUp.bind(this,'lastName')}/>
          </div>
          <div>
            <span>Age:</span>
            <input type="text" 
            ref={(input)=>{this.age=input;}} 
            onKeyUp={this.onKeyUp.bind(this,'age')}/>
          </div>
          <div>
            <input 
            type="submit" 
            value="Submit" 
            onClick={this.onClick}
            ref={(input) => { this.submit = input; }}/>
          </div>
          
        </div>
      </div>
    )
  }
}

const styles = {
  myInput : {
    'margin' : '20px'
  }
}


export default App;
