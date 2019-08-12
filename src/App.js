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
import {title} from '@/constant/index';
import Supervise from '@pages/supervise/Supervise';


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
        if (!flag) { // 未登录
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
        return (
                <div className="App">
                    <BrowserRouter history={hashHistory}>
                        <Route path="/supervise" component={props => this.requireAuth(Supervise,props)} />
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
                    </BrowserRouter>
                </div>
        );
    }
}

const mapStateToProps = state => ({
    data: state
});

export default connect(mapStateToProps,Action)(App);
