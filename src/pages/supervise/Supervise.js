import React,{ Component } from 'react';
import './Supervise.css'
import {imgPath} from "@/service/xhr/config";
import {title} from '@/constant/index';
import xhr from '@/service/xhr/index';
import {
    Link
} from 'react-router-dom';
import { List, InputItem, WhiteSpace,Button } from 'antd-mobile';
import Upload from "@/components/Upload/Upload";
import Util from "@/util/Util";

export default class Supervise extends Component {
    constructor(props) {
        super(props);
        this.state={

        }
    }

    uploadFileOnChange(event){
        const files = Array.from(event.target.files);
        const formData = new FormData();
        formData.append("files", files[0]);
        xhr.post("/file/upload", formData, {
            headers: {"Content-Type": "multipart/form-data"}
        }).then((data) => {
            console.log(data);
            if (data.code === "1") {

            }else{
                Util.showToast(data.message);
            }
        });

    }

    render(){
        return (

            <div className="container">
                <div className="header">
                    放射卫生诚信自律调查表
                </div>

                <div className="paper-list">

                    <div className="paper">
                        <div className="question">
                            <b className="no">1.</b>《放射诊疗卫生许可证》是否在有效期内，并按期校验？
                        </div>

                        <div className="answer-list">
                            <ol className="choose">
                                <li><input type="radio" name="radio_4704" value="0"/><span
                                    className="radio-self"></span><label className="answer-text">A、是</label></li>
                                <li><input type="radio" name="radio_4704" value="1"/><span
                                    className="radio-self"></span><label className="answer-text">B、否</label></li>
                            </ol>
                        </div>

                        <div className="answers">
                            <div className="pics">

                            </div>
                            {/*<div className="pic-upload">*/}
                                {/*<label className="tips">上传图片</label>*/}
                                {/*<img src={require("../../assets/images/upload.png")} className="upload-button"/>*/}
                            {/*</div>*/}
                            <Upload onChange={()=>this.uploadFileOnChange(event)}/>
                        </div>
                    </div>

                    <div className="paper">
                        <div className="question">
                            <b className="no">2.</b>本周期内是否开展辐射工作场所检测？
                        </div>

                        <div className="answer-list">
                            <ol className="choose">
                                <li><input type="radio" name="radio_4704" value="0"/><span
                                    className="radio-self"></span><label className="answer-text">A、是</label></li>
                                <li><input type="radio" name="radio_4704" value="1"/><span
                                    className="radio-self"></span><label className="answer-text">B、否</label></li>
                            </ol>
                        </div>

                        <div className="answers">
                            <div className="pics">

                            </div>
                            <div className="pic-upload">
                                <label className="tips">上传图片</label>
                                <img src={require("../../assets/images/upload.png")} className="upload-button"/>
                            </div>
                        </div>
                    </div>

                    <div className="paper">
                        <div className="question">
                            <b className="no">3.</b>本周期内是否开放射诊疗设备性能检测？
                        </div>

                        <div className="answer-list">
                            <ol className="choose">
                                <li><input type="radio" name="radio_4704" value="0"/><span
                                    className="radio-self"></span><label className="answer-text">A、是</label></li>
                                <li><input type="radio" name="radio_4704" value="1"/><span
                                    className="radio-self"></span><label className="answer-text">B、否</label></li>
                            </ol>
                        </div>

                        <div className="answers">
                            <div className="pics">

                            </div>
                            <div className="pic-upload">
                                <label className="tips">上传图片</label>
                                <img src={require("../../assets/images/upload.png")} className="upload-button"/>
                            </div>
                        </div>
                    </div>

                    <div className="paper">
                        <div className="question">
                            <b className="no">4.</b>放射工作人员<input type="text" className="input-answer"/> 人，
                            取得有效放射防护和有关法律知识培训合格证<input type="text" className="input-answer"/>人。
                        </div>

                        <div className="answers">
                            <div className="pics">

                            </div>
                            <div className="pic-upload">
                                <label className="tips">上传图片</label>
                                <img src={require("../../assets/images/upload.png")} className="upload-button"/>
                            </div>
                        </div>
                    </div>

                    <div className="paper">
                        <div className="question">
                            <b className="no">5.</b>是否佩戴个人剂量计？
                        </div>

                        <div className="answer-list">
                            <ol className="choose">
                                <li><input type="radio" name="radio_4704" value="0"/><span
                                    className="radio-self"></span><label className="answer-text">A、是</label></li>
                                <li><input type="radio" name="radio_4704" value="1"/><span
                                    className="radio-self"></span><label className="answer-text">B、否</label></li>
                            </ol>
                        </div>

                        <div className="answers">
                            <div className="pics">

                            </div>
                            <div className="pic-upload">
                                <label className="tips">上传图片</label>
                                <img src={require("../../assets/images/upload.png")} className="upload-button"/>
                            </div>
                        </div>
                    </div>


                    <div className="paper">
                        <div className="question">
                            <b className="no">6.</b>本季度开展个人剂量监测<input type="text" className="input-answer"/>人。
                        </div>

                        <div className="answers">
                            <div className="pics">

                            </div>
                            <div className="pic-upload">
                                <label className="tips">上传图片</label>
                                <img src={require("../../assets/images/upload.png")} className="upload-button"/>
                            </div>
                        </div>
                    </div>

                    <div className="paper">
                        <div className="question">
                            <b className="no">7.</b>是否向受检者提供防护用品？
                        </div>

                        <div className="answer-list">
                            <ol className="choose">
                                <li><input type="radio" name="radio_4704" value="0"/><span
                                    className="radio-self"></span><label className="answer-text">A、是</label></li>
                                <li><input type="radio" name="radio_4704" value="1"/><span
                                    className="radio-self"></span><label className="answer-text">B、否</label></li>
                            </ol>
                        </div>

                        <div className="answers">
                            <div className="pics">

                            </div>
                            <div className="pic-upload">
                                <label className="tips">上传图片</label>
                                <img src={require("../../assets/images/upload.png")} className="upload-button"/>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="submit-answer">

                    <input type="button" className="button" value="取消"/>

                    <input type="button" className="button button-2" value="提交"/>

                </div>

            </div>
        )
    }
};
