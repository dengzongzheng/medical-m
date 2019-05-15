import React,{ Component } from 'react';
import './about.css'
import { Card, WhiteSpace } from 'antd-mobile';
import {imgPath} from "@/service/xhr/config";
import {title} from '@/constant/index';

export default class About extends Component{

    constructor(props) {
        super(props);
    }


    render(){
        const img = imgPath + "304002646640177152.jpeg";
        return (
            <div className="card-box">
                <Card full>
                    <Card.Header
                        title={title}
                        // thumb={img}
                        extra={<span>联系我们</span>}
                    />
                    <Card.Body>
                        <img src={img} className={"call-us-about"}/>
                    </Card.Body>
                    <Card.Footer content="地址：湖北省武汉市武昌区徐东大街福星惠誉国际城" />
                    <WhiteSpace/>
                    <Card.Footer content="电话：+86 15072311132" />
                </Card>
            </div>
        );

    }
}
