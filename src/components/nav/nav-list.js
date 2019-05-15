import React,{ Component } from 'react';
import {Link} from 'react-router-dom';
import './nav.css';
import { Drawer, List, NavBar, Icon } from 'antd-mobile';
import {title} from '@/constant/index';

export default class Nav extends Component{

    constructor(props) {
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

    render(){
        const sidebar = (<ul className={"ul-box"}>
            <li><Link to="/">首页</Link></li>
            <li><Link to={{pathname:"/list",state: {category:1}}}>磁器</Link></li>
            <li><Link to={{pathname:"/list",state: {category:2}}}>玉器</Link></li>
            <li><Link to={{pathname:"/list",state: {category:3}}}>书画</Link></li>
            <li><Link to={{pathname:"/list",state: {category:4}}}>杂项</Link></li>
            <li><Link to="/about">联系我们</Link></li>
        </ul>);
        return (
            <div>
                <NavBar icon={<Icon type="ellipsis"/>} onLeftClick={() => this.onOpenChange()}>{title}</NavBar>
                <Drawer className="my-drawer"
                        style={{minHeight: document.documentElement.clientHeight}}
                        enableDragHandle
                        contentStyle={{color: '#A6A6A6', textAlign: 'center', paddingTop: 42}}
                        sidebar={sidebar}
                        open={this.state.open}
                        onOpenChange={() => this.onOpenChange()}
                >
                    {this.props.content}
                </Drawer>
            </div>
        );

    }
}
