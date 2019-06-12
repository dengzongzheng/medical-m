import React,{ Component } from 'react';
import './NewsDetail.css'
import {imgPath} from "@/service/xhr/config";
import {title} from '@/constant/index';
import xhr from '@/service/xhr/index';


export default class NewsDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newsNo:"",
            news: {

            }
        }
    }

    componentWillMount() {
        const newsNo = this.props.location.state.newsNo;
        const that = this;
        this.setState(state=>({
            newsNo:newsNo
        }),function () {
            that.detail();
        });
    }


    detail() {
        const that = this;
        const param = {};
        param["newsNo"] = this.state.newsNo;
        xhr.get('/api/news/detail/',param,true).then(function (data) {
            console.log(data);
            if(data.code==="1"){
                that.setState(state=>({
                    news: data.data
                }));
            }
        });
    }

    render(){
        return(
            <div className={"detail-container"}>
                <div className={"news-detail-title"}>{this.state.news.title}</div>
                <div className={"news-detail-content"}>
                    <div className={"detail-text-input-box"}
                         dangerouslySetInnerHTML={{__html: this.state.news.textData}}/>
                </div>
            </div>
        )
    }
}
