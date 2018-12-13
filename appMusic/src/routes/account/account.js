import React from "react";
import {NavLink} from "dva/router";
import "./account.scss";
import ReactView from "../../RouterView/RouterView"
class Account extends React.PureComponent{
    render () {
        return <React.Fragment>
           <div className = "com">
            <div className = "nav">
                    <NavLink to="/main/account/preson">
                            个性推荐
                    </NavLink>
                    <NavLink to="/main/account/station">
                            主播电台
                    </NavLink>
                </div>
                <div className = "com_1">
                <ReactView routes={this.props.routes}></ReactView>
               
                </div>
               
            </div>
           
        </React.Fragment>
    }
}

export default Account