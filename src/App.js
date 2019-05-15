import React, { Component } from 'react';
import {
    BrowserRouter,
    Route,
    Link,
    Switch,
    withRouter,
    Redirect,
    hashHistory,
    HashRouter
} from 'react-router-dom';

import 'antd-mobile/dist/antd-mobile.css';
import '@/assets/css/common.css';
import routers from '@/routers/index';
import * as Action from "@/store/token-action";
import { connect } from "react-redux";
import {Drawer, Icon, NavBar} from "antd-mobile";
import Footer from "@/components/footer/footer";
import {title} from '@/constant/index';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            open: false
        }
    }

    onOpenChange (...args) {
        const that = this;
        this.setState(state=>({
            open:!that.state.open
        }));
    }

    requireAuth(Layout, props) {
        let flag = ""===this.props.data.accessToken;
        if (flag) { // 未登录
            return <Redirect to="/login" />;
        } else {
            return <Layout {...props} />
        }
    }

    toPage(path,state){
        console.log(path + "  " + state);
        this.context.history.push({pathname:path});

    }

    render() {
        const sidebar = (<ul className={"ul-box"}>
            <li><Link onClick={() => this.onOpenChange()} to="/"><img className={"logo-img"} src={require('./assets/images/logo.png')}/></Link></li>
            <li><Link onClick={() => this.onOpenChange()} to="/">首页</Link></li>
            <li><Link onClick={() => this.onOpenChange()} to={{pathname:"/porcelains",state: {category:1}}}>磁器</Link></li>
            <li><Link onClick={() => this.onOpenChange()} to={{pathname:"/jades",state: {category:2}}}>玉器</Link></li>
            <li><Link onClick={() => this.onOpenChange()} to={{pathname:"/pictures",state: {category:3}}}>书画</Link></li>
            <li><Link onClick={() => this.onOpenChange()} to={{pathname:"/others",state: {category:4}}}>杂项</Link></li>
            <li><Link onClick={() => this.onOpenChange()} to="/about">联系我们</Link></li>
            <li><Link onClick={() => this.onOpenChange()} to="/us">关于我们</Link></li>
        </ul>);
        return (
                <div className="App">
                    <BrowserRouter history={hashHistory}>
                        <NavBar icon={<Icon type="ellipsis"/>} onLeftClick={() => this.onOpenChange()}>{title}</NavBar>
                        <Drawer className="my-drawer"
                                style={{minHeight: document.documentElement.clientHeight}}
                                enableDragHandle
                                contentStyle={{color: '#A6A6A6', textAlign: 'center', paddingTop: 42}}
                                sidebar={sidebar}
                                open={this.state.open}
                                onOpenChange={() => this.onOpenChange()}
                        >
                            {
                                routers.map((route,index) => {
                                    return(
                                        <Route
                                            key={index}
                                            path={route.path}
                                            exact={route.exact}
                                            component={route.component}/>
                                    )
                                })
                            }

                        </Drawer>
                    </BrowserRouter>
                </div>
        );
    }
}

const mapStateToProps = state => ({
    data: state
});

export default connect(mapStateToProps,Action)(App);
