import {Modal, Toast} from 'antd-mobile';
const alert = Modal.alert;
import xhr from '@/service/xhr/index';
let moment = require('moment');

/**
 * 提示
 * @param content 提示内容
 */
let showToast = (content) => {
    Toast.hide();
    Toast.info(content, 2, null, true);
};

/**
 * 隐藏提示
 * @param content
 */
let hiddenToast = (content) => {
    Toast.hide();
};

/**
 * 确认窗口
 * @param title 标题
 * @param content 内容
 * @param cancelText 取消按钮名称
 * @param OkText 确认按钮名称
 * @param CancelCallBack 取消按钮回调
 * @param OKCallBack 确认按钮回调
 */
let alertUtil = function alertUtil(title, content, cancelText, OkText, CancelCallBack, OKCallBack) {
    alert(title, content, [
        {
            text: cancelText, onPress: () => {
                if (CancelCallBack && typeof CancelCallBack === 'function') {
                    CancelCallBack();
                }
            }
        },
        {
            text: OkText, onPress: () => {
                if (OKCallBack && typeof OKCallBack === 'function') {
                    OKCallBack();
                }
            }
        }
    ]);
};

/**
 * 返回首页
 */
let toHome = function toHome() {
    window.location.replace("/");
};

/**
 * 最晚支付时间校验
 * @param callBack 回调
 */
let lastPayTimeValidate = function lastPayTimeValidate(callBack) {
    const lastOperateTime = "23:45";
    const operateTimeFormat = "HH:mm";
    const canNotOperateMessage = "对不起，已过最晚支付时间，请明日再进行投保";
    this.operateTimeValidate(lastOperateTime, operateTimeFormat, canNotOperateMessage, callBack);
};

/**
 * 最晚时间验证、用于校验当前时间是否允许继续操作
 * @param lastOperateTime 最晚操作时间
 * @param timeFormat 最晚操作时间格式
 * @param canNotOperateMessage 过最晚时间提示语
 * @param callBack 回调
 */
let operateTimeValidate = function operateTimeValidate(lastOperateTime,timeFormat,canNotOperateMessage,callBack) {

    const that = this;
    xhr.get("/openapi/robot/getCurrentTime",{},true).then(function (data) {
        const currentDateTime = moment(data);
        const hour = currentDateTime.hour();
        const minute = currentDateTime.minute();
        const lastTimeDate = moment(lastOperateTime, timeFormat);
        const lastHour = lastTimeDate.hour();
        const lastMinute = lastTimeDate.minute();
        if (hour > lastHour || (hour === lastHour && minute >= lastMinute)) {
            that.showToast(canNotOperateMessage);
        }else{
            if (callBack && typeof callBack === 'function') {
                callBack();
            }
        }
    });
};

let exports = module.exports = {
    showToast: showToast,
    hiddenToast: hiddenToast,
    alertUtil: alertUtil,
    toHome:toHome,
    operateTimeValidate: operateTimeValidate,
    lastPayTimeValidate:lastPayTimeValidate
};

