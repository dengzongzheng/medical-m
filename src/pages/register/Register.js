import React,{ Component } from 'react';
import './Register.css'
import {imgPath} from "@/service/xhr/config";
import {title,organizations} from '@/constant/index';
import xhr from '@/service/xhr/index';
import {InputItem} from "antd-mobile";
import Validate from "@/util/Validate";
import Util from "@/util/Util";

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            param:{
                userName:"",
                password:"",
                confirmPassword:"",
                organizations:[

                ],
                companyName:"",
                principal:"",
                certNo:"",
                sex:"",
                ethnic:"",
                address:"",
                mobile:"",
                managerName:"",
                managerMobile:""
            },
            organization:{
                organizationCode:"",
                organizationName:"",
                industries:[

                ]
            },
            organizations:[
                {
                    "organization_name": "公共机构",
                    "organization_code": 1,
                    "select":true,
                    "industries": [
                        {
                            "code": 1,
                            "select":false,
                            "name": "住宿业"
                        },
                        {
                            "code": 2,
                            "select":false,
                            "name": "美容店"
                        },
                        {
                            "code": 3,
                            "select":false,
                            "name": "理发店"
                        },
                        {
                            "code": 4,
                            "select":false,
                            "name": "公共浴室"
                        },
                        {
                            "code": 5,
                            "select":false,
                            "name": "商场"
                        }
                    ]
                },
                {
                    "organization_code": 2,
                    "select":false,
                    "organization_name": "学校",
                    "industries": [],
                },
                {
                    "organization_code": 3,
                    "select":false,
                    "organization_name": "医疗机构",
                    "industries": [
                        {
                            "code": 1,
                            "select":false,
                            "name": "传染病防控"
                        },
                        {
                            "code": 2,
                            "select":false,
                            "name": "放射卫生"
                        },
                        {
                            "code": 3,
                            "select":false,
                            "name": "依法执业"
                        }
                    ]
                },
                {
                    "organization_code": 4,
                    "select":false,
                    "organization_name": "供水单位",
                    "industries": []
                },
                {
                    "organization_code": 5,
                    "select":false,
                    "organization_name": "监督协管",
                    "industries": []
                }
            ],
            industry:{
                code:"",
                name:""
            }
        }
    }

    validateInputData(name,value,needShowMessage) {
        if (!needShowMessage) {
            needShowMessage = true;
        }
        if (name === "userName") {
            return Validate.validateEmpty(value, needShowMessage, "请输入用户名");
        }
        if (name === "password") {
            return Validate.validateEmpty(value, needShowMessage, "请输入密码");
        }
        if (name === "confirmPassword") {
            const flag = Validate.validateEmpty(value, needShowMessage, "请输入确认密码");
            if (flag) {
                const password = this.state.param.password;
                return Validate.equalsValidate(password, value, true, "两次输入密码不一致");
            }
            return true;
        }
        if (name === "organizations") {
            if (this.state.param.organizations.length === 0) {
                Util.showToast("请选择分类及行业");
                return false;
            }
            return true;
        }

        if (name === "companyName") {
            return Validate.validateEmpty(value, needShowMessage, "请输入单位名称");
        }

        if (name === "address") {
            return Validate.validateEmpty(value, needShowMessage, "请输入单位地址");
        }

        if (name === "managerName") {
            return Validate.validateEmpty(value, needShowMessage, "请输入单位负责人");
        }

        if (name === "managerMobile") {
            return Validate.validateMobile(value, needShowMessage, "请输入联系电话", "联系电话输入错误");
        }


        return true;
    }

    inputOnBlur(event){
        const name = event.target.name;
        const value = event.target.value;
        let param = this.state.param;
        param[name] = value;
        const that = this;
        this.setState(state=>({
            param: param
        }),function () {
            that.validateInputData(name, value);
        });
    }

    handleCheckboxChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        const code = target.value;
        const industry = target.industry;
        console.log(industry);
        let organizations = this.state.organizations;
        if ("organization" === name) {
            for (let i = 0; i < organizations.length; i++) {
                if (organizations[i].organization_code+"" === code) {
                    organizations[i].select = value;
                    break;
                }
            }
        }
        if ("industries" === name) {
            // for (let i = 0; i < organizations.length; i++) {
            //     if (organizations[i].organization_code+"" === code) {
            //         organizations[i].select = value;
            //         break;
            //     }
            // }
        }
        this.setState(state => ({
            organizations: organizations
        }));
    }

    validateAll(){

        if (!this.validateInputData("userName", this.state.param.userName)) {
            return false;
        }
        if (!this.validateInputData("password", this.state.param.password)) {
            return false;
        }
        if (!this.validateInputData("confirmPassword", this.state.param.confirmPassword)) {
            return false;
        }
        if (!this.validateInputData("organizations", this.state.param.organizations)) {
            return false;
        }
        if (!this.validateInputData("companyName", this.state.param.companyName)) {
            return false;
        }
        if (!this.validateInputData("address", this.state.param.address)) {
            return false;
        }
        if (!this.validateInputData("managerName", this.state.param.managerName)) {
            return false;
        }
        if (!this.validateInputData("managerMobile", this.state.param.managerMobile)) {
            return false;
        }
        return true;
    }

    register(){
        if (!this.validateAll()) {
            return;
        }
        const that = this;
        let param = this.state.param;
        xhr.post('/api/websiteRegister',param,true).then(function (data) {
            console.log(data);
            if(data.code==="1"){
                Util.alertUtil("提示","注册成功","关闭","确认",function () {
                    that.props.location.replace = "/login";
                },function () {
                    that.props.location.replace = "/login";
                })
            }else{
                Util.showToast(data.message);
            }
        });
    }

    render(){
        let organizationsDiv = this.state.organizations.map((item,index) => (
            <div className="check" key={item.organization_name}>
                <input type="checkbox" value={item.organization_code}
                       id={item.organization_code+"organization"}
                       onChange={(event)=>this.handleCheckboxChange(event)}
                       name={"organization"}
                       checked={item.select}/>
                <label className="check-name"
                      htmlFor={item.organization_code+"organization"}>
                        {item.organization_name}
                </label>
            </div>
        ));

        let industriesDiv = [];
        this.state.organizations.map((item, index) => {
            if (item.select) {
                item.industries.map((item2,index2)=>{
                   industriesDiv.push(
                       <div className="check" key={item2.organization_name}>
                           <input type="checkbox" value={item2.code}
                                  id={item2.code+"industries"}
                                  onChange={(event)=>this.handleCheckboxChange(event)}
                                  name={"industries"}
                                  industry={"adad"}
                                  checked={item2.select}/>
                           <label className="check-name"
                                  htmlFor={item2.code+"industries"}>
                               {item2.name}
                           </label>
                       </div>
                   )
                });
            }
        });

        let industries = industriesDiv.length>0?(
            <div className="input-box-2">
                <label className="title">行业</label>
                {industriesDiv}
            </div>
        ):"";
        return (
            <div className="container">
                <header className="header">注册</header>
                <div className="content-box">
                    <div className="input-box">
                        <label>用户名</label>
                        <input type="text" placeholder="请输入用户名"
                               onBlur={() => this.inputOnBlur(event)}
                               name="userName"/>
                    </div>

                    <div className="input-box">
                        <label>密码</label>
                        <input type="password" placeholder="请输入密码"
                               onBlur={() => this.inputOnBlur(event)}
                               name="password"/>
                    </div>

                    <div className="input-box">
                        <label>确认密码</label>
                        <input type="password" placeholder="请输入确认密码"
                               onBlur={() => this.inputOnBlur(event)}
                               name="confirmPassword"/>
                    </div>

                    <div className="input-box-2">
                        <label className="title">类别</label>
                        {organizationsDiv}
                    </div>

                    {/*<div className="input-box-2">*/}
                        {/*<label className="title">行业</label>*/}
                        {/*/!*<div className="check">*!/*/}
                            {/*/!*<input type="checkbox" value="1" checked hidden/>*!/*/}
                            {/*/!*<label className="check-self"></label>*!/*/}
                            {/*/!*<span className="check-name">学校卫生</span>*!/*/}
                        {/*/!*</div>*!/*/}
                        {/*/!*<div className="check">*!/*/}
                            {/*/!*<input type="checkbox" value="1" checked hidden/>*!/*/}
                            {/*/!*<label className="check-self"></label>*!/*/}
                            {/*/!*<span className="check-name">医疗机构</span>*!/*/}
                        {/*/!*</div>*!/*/}
                        {/*/!*<div className="check">*!/*/}
                            {/*/!*<input type="checkbox" value="1" checked hidden/>*!/*/}
                            {/*/!*<label className="check-self"></label>*!/*/}
                            {/*/!*<span className="check-name">供水单位</span>*!/*/}
                        {/*/!*</div>*!/*/}
                        {/*/!*<div className="check">*!/*/}
                            {/*/!*<input type="checkbox" value="1" checked hidden/>*!/*/}
                            {/*/!*<label className="check-self"></label>*!/*/}
                            {/*/!*<span className="check-name">监督协管</span>*!/*/}
                        {/*/!*</div>*!/*/}
                        {/*/!*<div className="check">*!/*/}
                            {/*/!*<input type="checkbox" value="1" checked hidden/>*!/*/}
                            {/*/!*<label className="check-self"></label>*!/*/}
                            {/*/!*<span className="check-name">监督协管</span>*!/*/}
                        {/*/!*</div>*!/*/}
                        {/*/!*<div className="check">*!/*/}
                            {/*/!*<input type="checkbox" value="1" checked hidden/>*!/*/}
                            {/*/!*<label className="check-self"></label>*!/*/}
                            {/*/!*<span className="check-name">监督协管</span>*!/*/}
                        {/*/!*</div>*!/*/}
                        {/*{industriesDiv}*/}
                    {/*</div>*/}
                    {industries}

                    <div className="input-box">
                        <label>单位名称</label>
                        <input type="text" placeholder="请输入单位名称"
                               onBlur={() => this.inputOnBlur(event)}
                               name="companyName"/>
                    </div>

                    <div className="input-box">
                        <label>单位地址</label>
                        <input type="text" placeholder="请输入单位地址"
                               onBlur={() => this.inputOnBlur(event)}
                               name="address"/>
                    </div>

                    <div className="input-box">
                        <label>负责人</label>
                        <input type="text" placeholder="请输入负责人"
                               onBlur={() => this.inputOnBlur(event)}
                               name="managerName"/>
                    </div>

                    <div className="input-box">
                        <label>联系电话</label>
                        <input type="text" placeholder="请输入联系电话"
                               onBlur={() => this.inputOnBlur(event)}
                               name="managerMobile"/>
                    </div>
                </div>

                <div className="button-box">

                    <input type="button" value="注册"
                           onClick={() => this.register()}/>

                </div>
            </div>
        );
    }
};
