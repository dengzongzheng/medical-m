import React,{ Component } from 'react';
import './detail.css'
import Footer from '@components/footer/footer';
import xhr from '@/service/xhr/index';
import {imgPath} from "@/service/xhr/config";
import { Carousel, WingBlank,WhiteSpace,Flex } from 'antd-mobile';
import {title} from '@/constant/index';

export default class WebsiteDetail extends Component{

    constructor(props){
        super(props);
        this.state = {
            imgHeight: 176,
            goods:{

            },
            currentImag:""
        };
    }

    componentDidMount() {
        this.detail();
    }

    detail(){
        let param = {};
        param["productNo"] = this.props.location.state.productNo;
        const that = this;
        xhr.get('/api/detail',param).then(function (data) {
            if(data.code==="1"){
                that.setState(state=>({
                    goods:data.data,
                    currentImag:data.data.productImages[0]
                }))
            }
        });
    }

    changImag(item){
        console.log(item);
        this.setState(state=>({
            currentImag:item
        }));
    }

    render() {
        const goods = this.state.goods;
        if(!goods.productImages){
            return(<div/>);
        }
        const swappers = goods.productImages.map((item,index)=>(
            <a
                key={index}
                href="#"
                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
                <img
                    src={imgPath+item}
                    alt={title}
                    style={{ width: '100%', verticalAlign: 'top' }}
                    onLoad={() => {
                        window.dispatchEvent(new Event('resize'));
                        this.setState({ imgHeight: 'auto' });
                    }}
                />
            </a>
        ));
        const detailData = (
            <div>
                <Carousel
                    autoplay={true}
                    infinite>
                    {swappers}
                </Carousel>
                <hr className="hr" />
                <div className="text-box">
                    <div className="detail-content">
                        <div className="detail-title">{goods.productName}</div>
                        <div className="desc">{goods.direction}</div>
                        <div className="visit">阅览量：{goods.visitCount}</div>
                    </div>
                </div>
            </div>
        );
        return(
            <div>
                {detailData}
                <Footer/>
            </div>
        );
    }
}
