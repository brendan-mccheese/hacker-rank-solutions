import React from "react";
import ReactDOM from "react-dom";

class Input extends React.PureComponent {
    render() {
      let {forwardedRef, focused, ...otherProps} = this.props; 
      return <input {...otherProps} ref={forwardedRef} />;
    }
  }
  
  const TextInput = React.forwardRef((props, ref) => {
      console.log(props);
    return <Input {...props} forwardedRef={ref} />
  });
  
  class FocusableInput extends React.Component {
    
    ref = React.createRef()

    render() {
      return <TextInput ref={this.ref} focused={this.props.focused} />;
    }
  
    // When the focused prop is changed from false to true, 
    // and the input is not focused, it should receive focus.
    // If focused prop is true, the input should receive the focus.
    // Implement your solution below:
    componentDidUpdate(prevProps) {
        if (prevProps.focused !== this.props.focused) {
            this.ref.current.focus();
        }
    }
    
    componentDidMount() {
        debugger;
        if(this.props.focused) this.ref.current.focus();
    }
  }
  
  FocusableInput.defaultProps = {
    focused: true
  };
  
  const App = (props) => <FocusableInput focused={props.focused} />;
  
  document.body.innerHTML = "<div id='root'></div>";
  const rootElement = document.getElementById("root");
  ReactDOM.render(<App focused={true} />, rootElement);

  if (module.hot) {
    module.hot.accept();
  }