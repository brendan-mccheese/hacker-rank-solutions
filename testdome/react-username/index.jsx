import React from "react";
import ReactDOM from "react-dom";
import {useRef, useState} from "react";

const FixedUsername = ({username}) => {
    const usernameRef = useRef(null);
    const el = (<Username ref={usernameRef} />);
    setTimeout(() => {
        if(username && usernameRef) {
            usernameRef.current.changeValue(username);
        }
    }, 50);
    
    return el;
};

class Username extends React.Component {
    state = { value: "" };
  
    changeValue(value) {
      this.setState({ value });
    }
  
    render() {
      const { value } = this.state;
      return <h1>{value}</h1>;
    }
  }
  
  function App() {
    const [state, setState] = useState({username: ""});
    const inputRef = useRef(null);

    function clickHandler() {
        console.log(inputRef.current.value);
        setState({username: inputRef.current.value});
    }
  
    return (
      <div>
        <button onClick={clickHandler}>Change Username</button>
        <input type="text" ref={inputRef} />
        <FixedUsername username={state.username} />
      </div>
    );
  }
  
  document.body.innerHTML = "<div id='root'></div>";
  const rootElement = document.getElementById("root");
  ReactDOM.render(<App />, rootElement);