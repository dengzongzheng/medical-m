import React,{ Component } from 'react';
import './Login.css'
import {imgPath} from "@/service/xhr/config";
import {title} from '@/constant/index';
import {
    Link
} from 'react-router-dom';
import { List, InputItem, WhiteSpace,Button } from 'antd-mobile';
import xhr from '@/service/xhr/index';
import Validate from "@/util/Validate";
import Util from "@/util/Util";
import {connect} from "react-redux";
import * as Action from "@/store/token-action";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            param:{
                userName: "",
                password: ""
            }
        }
    }

    validateLogin(name, value, needShowMessage) {
        if (needShowMessage === undefined) {
            needShowMessage = true;
        }
        if (name === "userName") {
            return Validate.validateEmpty(value, true, "请输入用户名");
        }
        if (name === "password") {
            return Validate.validateEmpty(value, true, "请输入密码");
        }
        return true;
    }

    inputOnblur(event){

        const name = event.target.name;
        const value = event.target.value;
        console.log(value);
        let param = this.state.param;
        param[name] = value;
        this.setState(state => ({
            param: param
        }));
        this.validateLogin(name, value);
    }

    validateAll() {
        console.log(this.state.param);
        if (!this.validateLogin("userName", this.state.param.userName)) {
            return false;
        }

        if (!this.validateLogin("password", this.state.param.password)) {
            return false;
        }

        return true;
    }

    login(){

        if (!this.validateAll()) {
            return;
        }
        const that  = this;
        xhr.post('/api/websiteLogin',this.state.param,true).then(function (data) {
            console.log(data);
            if(data.code==="1"){
                that.props.setAccessToken({value:data.data});
                console.log(that.props.data.accessToken);
                that.props.history.push('/supervise');
            }else{
                Util.showToast(data.message);
            }
        });
    }

    render(){
        return (

            <div className={"login-box"}>
                <div className={"login-title"}>登录</div>
                <WhiteSpace/>
                <InputItem
                    placeholder="用户名"
                    name={"userName"}
                    onBlur={()=>this.inputOnblur(event)}
                />
                <WhiteSpace/>
                <InputItem
                    type={"password"}
                    name={"password"}
                    onBlur={()=>this.inputOnblur(event)}
                    placeholder="密码"
                />

                <WhiteSpace size={"lg"}/>
                <Button type="primary"
                        className={"login-button"}
                        onClick={() => this.login()}
                >登录</Button>
                <WhiteSpace/>

                <div className="no-register-box">
                    <WhiteSpace size={"lg"}/>
                    <div className="no-account">还没有账号？</div>
                    <div className="to-register"><Link to={"/register"}>立即注册</Link></div>
                </div>
            </div>
        );
    }
};

const mapStateToProps = state => ({
    data: state
});

export default connect(mapStateToProps,Action)(Login);
