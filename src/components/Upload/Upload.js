import React,{ Component } from 'react';
import "./Upload.css"

export default class Upload extends Component {

    constructor(props) {
        super(props);
        this.state={

        }
    }
    render(){
        return (
            <div className="pic-upload">
                <label className="tips">上传图片</label>
                <div className={"upload-file-box"}>
                    <img src={require("../../assets/images/upload.png")} className="upload-button"/>
                    <input type={"file"} id={"multi"} onChange={this.props.onChange}/>
                </div>
            </div>
        );
    }

}
