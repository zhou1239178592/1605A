import React from "react";
import ReactView from "../RouterView/RouterView"
import {NavLink} from "dva/router"
 import "./MainPage.scss"
class MainPage extends React.PureComponent{
 
    render() {
        return <React.Fragment>
            <div className = "header">
                <span></span>
                 <p>
                    <NavLink to="/search">
                        猜你喜欢   浮生
                    </NavLink>
                 </p>
                <span></span>
            </div>
           <div className="conner">
               <ReactView routes={this.props.routes}></ReactView>
           </div>
            <div className = "footer">
                <NavLink to="/main/account">
                    <p></p>
                    <span >发现</span>
                </NavLink>
                <NavLink to="/main/video">
                    <p></p>
                    <span>视频</span>
                </NavLink>
                <NavLink to="/main/my">
                    <p></p>
                    <span>我的</span>
                </NavLink>
                <NavLink to="/main/friend">
                    <p></p>
                    <span>朋友</span>
                </NavLink>
                <NavLink to="/main/discover">
                    <p></p>
                    <span>账号</span>
                </NavLink>
            </div>
        </React.Fragment>
    }
}
export default MainPage