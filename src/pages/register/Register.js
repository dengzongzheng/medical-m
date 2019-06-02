import React,{ Component } from 'react';
import './Register.css'
import {imgPath} from "@/service/xhr/config";
import {title} from '@/constant/index';
import xhr from '@/service/xhr/index';

export default class Register extends Component {
    constructor(props) {
        super(props);

    }

    render(){
     return(
         <div className="container">
             <header className="header">注册</header>
             <div className="content-box">
                 <div className="input-box">
                     <label>用户名</label>
                     <input type="text" placeholder="请输入用户名" name="name"/>
                 </div>

                 <div className="input-box">
                     <label>密码</label>
                     <input type="password" placeholder="请输入密码" name="password"/>
                 </div>

                 <div className="input-box">
                     <label>确认密码</label>
                     <input type="password" placeholder="请输入确认密码" name="password"/>
                 </div>

                 <div className="input-box-2">
                     <label className="title">类别</label>
                     <div className="check">
                         <input type="checkbox" value="1" checked hidden/>
                             <label className="check-self"></label>
                             <span className="check-name">学校卫生</span>
                     </div>
                     <div className="check">
                         <input type="checkbox" value="1" checked hidden/>
                             <label className="check-self"></label>
                             <span className="check-name">医疗机构</span>
                     </div>
                     <div className="check">
                         <input type="checkbox" value="1" checked hidden/>
                             <label className="check-self"></label>
                             <span className="check-name">供水单位</span>
                     </div>
                     <div className="check">
                         <input type="checkbox" value="1" checked hidden/>
                             <label className="check-self"></label>
                             <span className="check-name">监督协管</span>
                     </div>
                 </div>

                 <div className="input-box-2">
                     <label className="title">行业</label>
                     <div className="check">
                         <input type="checkbox" value="1" checked hidden/>
                             <label className="check-self"></label>
                             <span className="check-name">学校卫生</span>
                     </div>
                     <div className="check">
                         <input type="checkbox" value="1" checked hidden/>
                             <label className="check-self"></label>
                             <span className="check-name">医疗机构</span>
                     </div>
                     <div className="check">
                         <input type="checkbox" value="1" checked hidden/>
                             <label className="check-self"></label>
                             <span className="check-name">供水单位</span>
                     </div>
                     <div className="check">
                         <input type="checkbox" value="1" checked hidden/>
                             <label className="check-self"></label>
                             <span className="check-name">监督协管</span>
                     </div>
                     <div className="check">
                         <input type="checkbox" value="1" checked hidden/>
                             <label className="check-self"></label>
                             <span className="check-name">监督协管</span>
                     </div>
                     <div className="check">
                         <input type="checkbox" value="1" checked hidden/>
                             <label className="check-self"></label>
                             <span className="check-name">监督协管</span>
                     </div>
                 </div>

                 <div className="input-box">
                     <label>单位名称</label>
                     <input type="password" placeholder="请输入单位名称" name="password"/>
                 </div>

                 <div className="input-box">
                     <label>单位地址</label>
                     <input type="password" placeholder="请输入单位地址" name="password"/>
                 </div>

                 <div className="input-box">
                     <label>负责人</label>
                     <input type="password" placeholder="请输入负责人" name="password"/>
                 </div>

                 <div className="input-box">
                     <label>联系电话</label>
                     <input type="password" placeholder="请输入联系电话" name="password"/>
                 </div>
             </div>

             <div className="button-box">

                 <input type="button" value="注册"/>

             </div>
         </div>
     )
    }
};
