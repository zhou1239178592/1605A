import { Carousel, WingBlank } from 'antd-mobile';
import "./tab.scss";
import React from "react";
export default class App extends React.Component {
  render() {
    console.log(this.props)
    let {
      banner 
    } = this.props
    return (
     <React.Fragment>
        <WingBlank>
        <Carousel
          autoplay={true}
          infinite
        >
          {banner.map((val,index) => (
              <img
                key={index}
                src={`${val.imageUrl}`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
              />
         
          ))}
        </Carousel>
      </WingBlank>
     
     </React.Fragment>
    );
  }
}

