import React,{ Component } from 'react';
import './Login.css'
import {imgPath} from "@/service/xhr/config";
import {title} from '@/constant/index';
import xhr from '@/service/xhr/index';
import {
    Link
} from 'react-router-dom';
import { List, InputItem, WhiteSpace,Button } from 'antd-mobile';

export default class Login extends Component {
    constructor(props) {
        super(props);

    }

    render(){
        return (

                <div className={"login-box"}>
                    <div className={"login-title"}>登录</div>
                    <WhiteSpace />
                    <InputItem
                        placeholder="用户名"
                    />
                    <WhiteSpace />
                    <InputItem
                        type={"password"}
                        placeholder="密码"
                    />

                    <WhiteSpace size={"lg"}/>
                    <Button type="primary"
                            className={"login-button"}
                            >登录</Button>
                    <WhiteSpace />

                    <div className="no-register-box">
                        <WhiteSpace size={"lg"}/>
                        <div className="no-account">还没有账号？</div>
                        <div className="to-register"><Link to={"/register"}>立即注册</Link></div>
                    </div>
                </div>
        )
    }
};
