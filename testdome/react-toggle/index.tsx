import * as React from "react";
import { render } from "react-dom";

declare var module;

class Message extends React.Component<any, any> {

    constructor(props?: any) {
        super(props);
        this.state = {
            showNumber: false
        };
    }

    render() {
        return (<React.Fragment>
            <a href="#" onClick={() => {
                console.log("clicked");
                this.setState({
                    showNumber: !this.state.showNumber
                });
            }}>Want to buy a new car?</a>
            {this.state.showNumber === true ? (<p>Call +11 22 33 44 now!</p>) : null}
        </React.Fragment>);
    }
}


render(<Message />, document.getElementById("root"));

if (module.hot) {
  module.hot.accept();
}