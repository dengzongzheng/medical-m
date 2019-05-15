import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { WingBlank,WhiteSpace,Flex } from 'antd-mobile';
import './footer.css';

export default class extends Component {


    render(){
        return(<div className={"footer-box-m"}>

            <WingBlank/>
            <Flex>
                <Flex.Item>
                    <div className="nav nav-inline nav-item">
                        <span className="icon icon-bidding-lg"/>
                        <strong>随时随地、轻松购买</strong>
                    </div>
                </Flex.Item>
            </Flex>

            <WingBlank/>
            <Flex>
                <Flex.Item>
                    <div className="nav nav-inline nav-item">
                        <span className="icon icon-special-lg"/>
                        <strong>天天专场、畅选无忧</strong>
                    </div>
                </Flex.Item>
            </Flex>

            <WingBlank/>
            <Flex>
                <Flex.Item>
                    <div className="nav nav-inline nav-item">
                        <span className="icon icon-brand-lg"/>
                        <strong>品牌保证、精致服务</strong>
                    </div>
                </Flex.Item>
            </Flex>

            <WingBlank/>
            <Flex>
                <Flex.Item>
                    <div className="nav nav-inline nav-item">
                        <span className="icon icon-trust-lg"/>
                        <strong>邮币保真、快乐收藏</strong>
                    </div>
                </Flex.Item>
            </Flex>

            <hr className="hr" />

            <Flex>
                <Flex.Item>
                    <div className="location">
                        地址:湖北省武汉市武昌区徐东大街福星惠誉国际城
                    </div>
                </Flex.Item>
            </Flex>
            <WingBlank/>
            <Flex>
                <Flex.Item>
                    <div className="call-us">
                        电话:+86 15072311132
                    </div>
                </Flex.Item>
            </Flex>


            <hr className="hr" />

            <div className="footer-box">
                COPYRIGHT © 2019-2020 ZHENCANGYS.COM CORPORATION. ALL RIGHTS RESERVED.
            </div>
        </div>)
    }
}
