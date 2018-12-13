import React from "react";

class My extends React.PureComponent{
    render () {
        return <React.Fragment>
            <div className = "nav">
            <h1>{this.props.match.path}</h1>
            </div>
        </React.Fragment>
    }
}

export default My