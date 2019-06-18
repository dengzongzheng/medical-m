import React,{ Component } from 'react';
import './News.css'
import { Card, WhiteSpace,ListView,PullToRefresh ,Result} from 'antd-mobile';
import {imgPath} from "@/service/xhr/config";
import {title} from '@/constant/index';
import xhr from '@/service/xhr/index';
import queryString from "query-string";

export default class News extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
            sectionHeaderHasChanged: (s1, s2) => s1 !== s2
        });
        this.state = {
            dataSource: ds,
            list: [],
            categoryName: "卫生知识",
            param: {
                pageNo: 1,
                pageSize: 10,
                category: 1
            },
            hasMore: true,
            isLoading: true,
            upLoading: false,
            pullLoading: false
        };
    }

    onEndReached(page, lastPage){
        //当前页小于总页数继续请求下一页数据，否则停止请求数据
        if (Number(page) < Number(lastPage)) {
            this.setState({ upLoading: true })
            //接口请求下一页数据,完成后将upLoading设为false

        }
    }
    //下拉刷新
    onRefresh(){
        this.setState({ pullLoading: true })
        //接口请求第一页数据,完成后将pullLoading设为false
    }

    jumpTo(newsNo) {
        this.props.history.push({pathname:"/detail",state:{newsNo: newsNo}})
    }

    renderRow(item, i) {
        return (
            <div key={item.newsNo} onClick={()=>this.jumpTo(item.newsNo)}
                 className={"row-box"}>
                <div
                    style={{
                        lineHeight: '50px',
                        color: '#888',
                        fontSize: 18,
                    }}
                >{item.title}</div>
                <div style={{ display: '-webkit-box flex', padding: '15px 0' }}>
                    <img style={{ height: '64px', marginRight: '15px' }} src={imgPath+item.titleImages} alt="" />
                    <div className={"low-label"}>
                        <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>{item.subTitle}</div>
                        <div><span style={{ fontSize: '30px', color: '#FF6E27' }}>{item.visitCount}</span>次阅读</div>
                    </div>
                </div>
            </div>
        )
    }

    componentWillMount() {
        let urlParams = queryString.parse(this.props.location.search);
        let category = "";
        if (urlParams!==undefined) {
            category = urlParams.category;
        }
        if ("" !== category && "undefined" !==category && undefined !== category ) {
            let param = this.state.param;
            param["category"] = category;
            this.setState(state => ({
                param: param
            }));
        }
    }

    componentDidMount() {
        this.listNews();
    }

    listNews(){
        const that = this;
        const param = this.state.param;
        const category = param.category;
        xhr.get('/api/news/list/'+category,param,true).then(function (data) {
            console.log(data);
            if(data.code==="1"){
                const hei = document.documentElement.clientHeight - 10;
                that.setState(state=>({
                    list: data.data,
                    isLoading: false,
                    height: hei
                }));

            }
        });
    }



    render() {
        const { list, dataSource, upLoading, pullLoading } = this.state;

        return (
            <div className={"list-box"}>
                {
                    list && list.data && list.data.length ?
                        <ListView
                            dataSource={dataSource.cloneWithRows(list.data)}
                            renderRow={(rowData, id1, i) => this.renderRow(rowData, i)}
                            initialListSize={10}
                            pageSize={10}
                            renderHeader={() => <span className={"list-title"}>{this.state.categoryName}</span>}
                            renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
                                { (list.pageNo < list.totalPage) && upLoading ?<Icon type="loading" />: null}
                            </div>)}
                            onEndReached={() => this.onEndReached(list.pageNo, list.totalPage)}
                            onEndReachedThreshold={20}
                            useBodyScroll={true}
                            style={{ width: '100vw' }}
                            pullToRefresh={<PullToRefresh // import { PullToRefresh } from 'antd-mobile'
                                refreshing={pullLoading}
                                onRefresh={()=>this.onRefresh()}
                            />}
                        />
                        :
                        list && list.data && !list.data.length ?
                            <div className={"emptyDiv"}>
                                <Result
                                    title="暂无数据"
                                    message="暂无数据，请稍后再来吧"
                                />
                            </div>
                            : null
                }
            </div>
        );
    }
}
