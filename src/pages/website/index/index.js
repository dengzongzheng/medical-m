import React,{ Component } from 'react';
import {Redirect,Link} from 'react-router-dom';
import './index.css';
import { Carousel, WingBlank,WhiteSpace,Flex,Grid } from 'antd-mobile';
import {imgPath} from "@/service/xhr/config";
import xhr from '@/service/xhr/index';
import Footer from "@/components/footer/footer";
import {title} from '@/constant/index';

function RenderGoods(props){
    const goods = props.goods;
    const items = goods.map((item)=>
        <Link to={{pathname:'/detail',state:{productNo:item.productNo}}} key={item.productNo}>
            <div className="goods">
                <div className="img-box">
                    <img src={imgPath+item.productImages[0]} className="goods-img" alt=""/>
                </div>
                <div className="title">{item.productName}</div>
                <div className="sub-title">{item.direction}</div>
            </div>
        </Link>
    );
    return(
        <div className="content-list">
            {items}
        </div>
    )
}

export default class Index extends Component{
    constructor(props){
        super(props);
        this.state = {
            swappers: ['swaper1.jpg', 'swaper2.jpg'],
            imgHeight: 176,
            jades:[

            ],
            porcelains:[

            ],
            pictures:[

            ],
            others:[

            ],
            recommended:[

            ]
        }
    }


    componentDidMount() {
        this.listHome();
    }

    listHome(){
        let param = {};
        const that = this;
        xhr.get('/api/listHome',param).then(function (data) {
            console.log(data);
            if(data.code==="1"){
                that.setState(state=>({
                    jades: data.data.jades,
                    porcelains: data.data.porcelains,
                    pictures: data.data.pictures,
                    others: data.data.others,
                    recommended:data.data.recommended
                }));
            }
        });
    }

    render(){
        const swappers = this.state.swappers.map((item,index)=>(
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
        const jades = this.state.jades;
        const porcelains = this.state.porcelains;
        const pictures = this.state.pictures;
        const others = this.state.others;
        const recommended = this.state.recommended;
        return (
            <div>
                <Carousel
                    autoplay={true}
                    infinite>
                    {swappers}
                </Carousel>

                <div className="content-header no-top-border">
                    <span className="head-line"/><label>重点推荐</label>
                    <Link to={{pathname:"/recommended",state: {category:5}}}>更多重点推荐</Link>
                </div>
                <Grid data={recommended}
                      hasLine={false}
                      columnNum={2}
                      renderItem={item => (
                          <Link to={{pathname:'/detail',state:{productNo:item.productNo}}} key={item.productNo}>
                              <div style={{ padding: '12.5px' }}>
                                  <img src={imgPath+item.productImages[0]}
                                       style={{ width: '75px', height: '75px' }} alt={title} />
                                  <div style={{ color: '#888', fontSize: '14px'}}>
                                      <div className="title">{item.productName}</div>
                                      <div className="sub-title">{item.direction}</div>
                                  </div>
                              </div>
                          </Link>
                      )}
                />

                <div className="content-header">
                    <span className="head-line"/><label>瓷器</label>
                    <Link to={{pathname:"/porcelains",state: {category:1}}}>更多瓷器</Link>
                </div>
                <Grid data={porcelains}
                      hasLine={false}
                      columnNum={2}
                      renderItem={item => (
                          <Link to={{pathname:'/detail',state:{productNo:item.productNo}}} key={item.productNo}>
                              <div style={{ padding: '12.5px' }}>
                                  <img src={imgPath+item.productImages[0]}
                                       style={{ width: '75px', height: '75px' }} alt={title} />
                                  <div style={{ color: '#888', fontSize: '14px'}}>
                                      <div className="title">{item.productName}</div>
                                      <div className="sub-title">{item.direction}</div>
                                  </div>
                              </div>
                          </Link>
                      )}
                />

                <div className="content-header">
                    <span className="head-line"/><label>玉器</label>
                    <Link to={{pathname:"/jades",state: {category:2}}}>更多玉器</Link>
                </div>
                <Grid data={jades}
                      hasLine={false}
                      columnNum={2}
                      renderItem={item => (
                          <Link to={{pathname:'/detail',state:{productNo:item.productNo}}} key={item.productNo}>
                              <div style={{ padding: '12.5px' }}>
                                  <img src={imgPath+item.productImages[0]}
                                       style={{ width: '75px', height: '75px' }} alt={title} />
                                  <div style={{ color: '#888', fontSize: '14px'}}>
                                      <div className="title">{item.productName}</div>
                                      <div className="sub-title">{item.direction}</div>
                                  </div>
                              </div>
                          </Link>
                      )}
                />

                <div className="content-header">
                    <span className="head-line"/><label>书画</label>
                    <Link to={{pathname:"/pictures",state: {category:3}}}>更多书画</Link>
                </div>
                <Grid data={pictures}
                      hasLine={false}
                      columnNum={2}
                      renderItem={item => (
                          <Link to={{pathname:'/detail',state:{productNo:item.productNo}}} key={item.productNo}>
                              <div style={{ padding: '12.5px' }}>
                                  <img src={imgPath+item.productImages[0]}
                                       style={{ width: '75px', height: '75px' }} alt={title} />
                                  <div style={{ color: '#888', fontSize: '14px'}}>
                                      <div className="title">{item.productName}</div>
                                      <div className="sub-title">{item.direction}</div>
                                  </div>
                              </div>
                          </Link>
                      )}
                />

                <div className="content-header">
                    <span className="head-line"/><label>杂项</label>
                    <Link to={{pathname:"/others",state: {category:4}}}>更多杂项</Link>
                </div>
                <Grid data={others}
                      hasLine={false}
                      columnNum={2}
                      renderItem={item => (
                          <Link to={{pathname:'/detail',state:{productNo:item.productNo}}} key={item.productNo}>
                              <div style={{ padding: '12.5px' }}>
                                  <img src={imgPath+item.productImages[0]}
                                       style={{ width: '75px', height: '75px' }} alt={title} />
                                  <div style={{ color: '#888', fontSize: '14px'}}>
                                      <div className="title">{item.productName}</div>
                                      <div className="sub-title">{item.direction}</div>
                                  </div>
                              </div>
                          </Link>
                      )}
                />
                <Flex wrap="wrap">

                </Flex>
                <Footer/>
            </div>
        );
    }
}
