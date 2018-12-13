import React from 'react';
import {connect} from 'dva';
import "./LoginPage.scss"


// es7的装饰器
@connect(state=>{

  return {
    login: state.login
  }
}, dispatch=>{
  return {
    login: payload=>{
      dispatch({
        type: 'indexStor/login',
        payload
      })
    }
  }
})
class LoginPage extends React.PureComponent{
  constructor(props){
    super(props);
    this.state = {
      phone: '',
      password: ''
    }
  }

  submit = () => {

    if (!/\d{11}/.test(this.state.phone)){
      alert('请输入正确的手机号码');
      
      return;
    }
    if (!/\S{6,20}/.test(this.state.password)){
      alert('请输入正确的密码');
      return;
    }
    this.props.login({
      phone: this.state.phone,
      password: this.state.password
    })
  }

  render(){
    console.log('this.props...', this.props);
    return <React.Fragment>
      <div className = "login">
        <input className = "input" placeholder="手机号" maxLength="11" value={this.state.phone} onChange={e=>this.setState({phone: e.target.value})}/>
        <input className = "input2" placeholder="密码" type="password" value={this.state.password} onChange={e=>this.setState({password: e.target.value})}/>
        <button onClick={this.submit}>登陆</button>
      </div>
    </React.Fragment>
  }
}

export default LoginPage;
