import React,{ Component } from 'react';
import {Redirect,Link} from 'react-router-dom';
import './list.css';
import Footer from '@components/footer/footer';
import {imgPath} from "@/service/xhr/config";
import xhr from '@/service/xhr/index';
import {categories} from '@/constant/index';
import { Pagination, Icon,Grid } from 'antd-mobile';
import {title} from '@/constant/index';

export default class List extends Component{
    constructor(props){
        super(props);
        this.state = {
            list:[

            ],
            totalPages:1,
            pageNo:1,
            pageSize:10,
            totalCount:0,
            categoryCode: 1,
            categoryName:""
        }
    }

    componentDidMount() {
        try {
            const categoryCode = this.props.location.state.category;
            const that = this;
            this.setState({categoryCode:categoryCode},()=>{
                that.listCategory();
            });
        }catch (e) {

        }
    }

    switchCategory(categoryCode){
        const that = this;
        this.setState({categoryCode:categoryCode},()=>{
            that.listCategory();
        });

    }

    pageChange(e){
        const pageNo = e;
        const that = this;
        this.setState({pageNo: pageNo}, () => (
            that.listCategory()
        ));
    }

    listCategory(){
        let param = {};
        param["pageNo"] = this.state.pageNo;
        param["pageSize"] = this.state.pageSize;
        param["categoryCode"] = this.state.categoryCode;
        const that = this;
        xhr.get('/api/listCategory',param).then(function (data) {
            if(data.code==="1"){
                that.setState(state=>({
                    list: data.data.data,
                    totalCount: data.data.totalCount,
                    totalPages: data.data.totalPage
                }));
            }
        });
    }

    render(){
        const list = this.state.list;
        let categoryName = "";
        const categoryCode = this.state.categoryCode;
        for(let index in categories){
            if(categories[index].value===categoryCode){
                categoryName = categories[index].name;
                break;
            }
        }
        return (
            <div>
                <div className="content-box">
                    <div className="content">
                        <div className="content-header">
                            <span className="head-line"/><label>{categoryName}</label>
                        </div>
                        <Grid data={list}
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
                    </div>
                    <hr className="hr" />
                    <Pagination total={this.state.totalPages}
                                className="custom-pagination-with-icon"
                                style={{ margin: '16px' }}
                                current={this.state.pageNo}
                                locale={{
                                    prevText: (<span className="arrow-align"><Icon type="left" />上一页</span>),
                                    nextText: (<span className="arrow-align">下一页<Icon type="right" /></span>),
                                }}
                                onChange={(e)=>this.pageChange(e)}
                    />
                    <Footer/>
                </div>
            </div>
        );
    }
}
