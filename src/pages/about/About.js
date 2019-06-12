import React,{ Component } from 'react';
import "./About.css"
import { Card, WhiteSpace,ListView,PullToRefresh ,Result} from 'antd-mobile';
import {imgPath} from "@/service/xhr/config";
import {title} from '@/constant/index';
import xhr from '@/service/xhr/index';

export default class News extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div>
                <div className={"about-header"}>
                    <img src={require("../../assets/images/about.png")} className="about-img" alt={title}/>
                </div>
                <div className={"about-title"}>
                    <h1>卫生监督第一线</h1>
                </div>

                <div className={"about-content"}>
                    <div className={"content-box"}>
                        <div className={"left-box"}>
                            01
                        </div>
                        <div className={"right-box"}>
                            <div className={"right-box-title"}>公共场所卫生</div>
                            <div className={"right-box-desc"}>
                                公共场所卫生监督保障、卫生评级、证书检查
                            </div>
                        </div>
                    </div>

                    <div className={"content-box"}>
                        <div className={"left-box"}>
                            02
                        </div>
                        <div className={"right-box"}>
                            <div className={"right-box-title"}>
                                学校卫生
                            </div>
                            <div className={"right-box-desc"}>
                                公共场所卫生监督保障、卫生评级、证书检查
                            </div>
                        </div>
                    </div>

                    <div className={"content-box"}>
                        <div className={"left-box"}>
                            03
                        </div>
                        <div className={"right-box"}>
                            <div className={"right-box-title"}>
                                医疗机构
                            </div>
                            <div className={"right-box-desc"}>
                                公共场所卫生监督保障、卫生评级、证书检查
                            </div>
                        </div>
                    </div>


                    <div className={"content-box"}>
                        <div className={"left-box"}>
                            04
                        </div>
                        <div className={"right-box"}>
                            <div className={"right-box-title"}>
                                供水单位
                            </div>
                            <div className={"right-box-desc"}>
                                公共场所卫生监督保障、卫生评级、证书检查
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
