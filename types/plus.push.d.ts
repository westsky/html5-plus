/**
 * Typescript 声明文件
 * @author westsky
 * @description Html 5+ plus.webview
 */
declare namespace plus.push {
    //常量
    //Push模块管理推送消息功能，可以实现在线、离线的消息推送，通过plus.push可获取推送消息管理对象。
    //-----------方法
    /**
     * Android - 2.2+ (支持)
     * iOS - 4.3+ (支持): 在客户端在运行时收到推送消息触发receive事件，离线接收到的推送消息全部进入系统消息中心。
     * @param type  事件类型
     * @param listener 件监听器回调函数，在接收到推送消息时调用
     * @param capture 是否捕获事件，此处可忽略
     */
    function addEventListener(
        type:string,
        listener:PushReceiveCallback,
        capture?:boolean
    ):void;
    /**
     * 清空系统消息中心所有的推送消息。
     */
    function clear():void;
    /**
     *创建本地消息 
     * @param content 消息显示的内容，在系统通知中心中显示的文本内容。
     * @param payload 消息承载的数据，可根据业务逻辑自定义数据格式。
     * @param options 创建消息的额外参数，参考MessageOptions。
     */
    function createMessage(
        content:string,
        payload?:string,
        options?:MessageOptions
    ):void;

    class PushMessage{
        title:string;
        content:string;
        payload:string | any;
        aps:string | any;
    }
    //function getAllMessage():PushMessage:
    //-----------回调函数
    /**
     * 客户端接收到推动消息的回调函数
     */
    interface PushReceiveCallback{
        (msg:PushMessage|any):void;
    }
    /**
     * 用户点击推送消息事件的回调函数
     */
    interface PushClickCallback{
        onClick(
            msg:string
        ):void;
    }
    //-----------内部成员类
    /**
     * 获客户端创建本地消息的参数
     */
    class MessageOptions {
        //要启动流应用的appid
        appid:string;
        //是否覆盖上一次提示的消息
        cover:boolean;
        //提示消息延迟显示的时间
        delay:number;
        //推送消息的图标
        icon:string;
        //推送消息的提示音
        sound:string;
        //推送消息的标题
        title:string;
        //消息上显示的提示时间
        when:Date;

    }
}