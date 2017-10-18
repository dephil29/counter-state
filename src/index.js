import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Child({onAction}){
  return (
    <button onClick={onAction}>
      Click Me!!
    </button>
  )
}

// function handleAction(event){
//   console.log("Child did ", event);
// }
//
// function Parent(){
//   return (
//     <Child onAction={handleAction} />
//   )
// }

class CountingParent extends Component {
//   without Babel use these 2 functions
//   constructor(props) {
//   super(props);
//
//   // Set the state here.
//   this.state = {
//     actionCount: 0
//   };
// }

  //property initializer
  state = {
    actionCount: 0
  };

  handleAction = action => {
    console.log("Child did ", action);
    // actionCount is incremented,
    // and the new count replaces the existing
    this.setState({
      actionCount: this.state.actionCount + 1
    });
  }
    // this.setState((state, props) => {
    //   return {
    //     actionCount: this.state.actionCount + 1
    //   }
    // })

  handleReset = action => {
    //Reset actionCount to 0
    this.setState({
      actionCount: 0
    })
  }

  render(){
    return(
      <div>
        <Child onAction={this.handleAction} />
        <button onClick={this.handleReset}>Reset</button>
        <p>Clicked {this.state.actionCount} times</p>
      </div>
    );
  }
}

const Page = () => (
  <div>
    <CountingParent />
    <CountingParent />
    <CountingParent />
  </div>
);

ReactDOM.render(<Page />, document.getElementById('root'));
