/**
 * Typescript 声明文件
 * @author westsky
 * @description Html 5+ plus.audio
 */

declare namespace plus.audio{
    /**
     * 设备的扬声器音频输出线路
     */
    const ROUTE_SPEAKER = 0;
    /**
     * 设备听筒音频输出线路
     */
    const ROUTE_EARPIECE= 1;

    /**
     * 获取当前设备的录音对象
     */
    function getRecorder():AudioRecorder;
    /**
     *  创建音频播放对象
     * @param path 要播放的音频文件的路径
     */
    function createPlayer(path:String):AudioPlayer;
    
    /**
     * 录音对象
     */
    class AudioRecorder{
        /**
         * 数组，设备录音支持的采用率
         */
        readonly supportedSamplerates:String[];
        /**
         * 数组，设备录音支持的文件格式
         */
        readonly supportedFormats: String[];

        /**
         * 调用设备麦克风进行录音操作
         * @description 
         *  调用设备麦克风开始录音操作，录音完成需调用stop方法停止。录音完成后将通过successCB回调返回录音后的文件数据。
         * @param option 
         * @param successCB 
         * @param errorCB 
         */
        record( option:RecordOptions, successCB:RecordSuccessCallback, errorCB?:AudioErrorCallback):void;
        /**
         * 结束录音操作
         */
        stop():void;
    }

    /**
     * JSON对象，调用麦克风设备进行录音的参数
     */
    interface RecordOptions{
        /**
         * 录音声道,可取值： "mono" - 单声道录音； "stereo" - 立体声道录音。 默认值为"mono"。
         * @description
         *    平台支持
         *    Android - ALL (不支持): 暂不支持，仅支持单通道录音。
         *    iOS - 7.0+ (支持)
         */
        channels?:String;
        
        /**
         * 保存录音文件的路径
         * @description
         * 可设置具体文件名，也可只设置路径，如果以“/”结尾则表明是路径，文件名由录音程序自动生成。 如未设置则使用默认目录生成随机文件名称，默认目录为应用%APPID%下的documents目录。
         */
        filename?:String;
        
        /**
         * 录音文件的采样率
         * @description 需通过supportedSamplerates属性获取设备支持的采样率，若设置无效的值，则使用系统默认的采样率。
         */
        samplerate?:String; 

        /**
         *  录音文件的格式
         * @description
         *  需通过supportedFormats属性获取设备支持的录音格式，若设置无效的值，则使用系统默认的录音格式。
         *  Android - 2.2+ (支持): Android平台支持"amr"、"3gp"格式，默认为"amr"。
         *  iOS - 4.5+ (支持): iOS平台支持"wav"、"aac"、"amr"格式，默认为"wav"。
         */
        format?:String;
    }

    /**
     * 音频播放对象
     * @description
     * 音频播放对象，用于音频文件的播放。不能通过new方法直接创建，只能通过audio.createPlayer方法创建。
     */
    interface AudioPlayer{
        /**
         * 开始播放音频
         * @param successCB 
         * @param errorCB 
         */
        play( successCB:PlaySuccessCallback, errorCB?:AudioErrorCallback );
        /**
         * 暂停播放音频
         */
        pause();
        /**
         *  恢复播放音频
         */
        resume();
        /**
         * 停止播放音频
         */
        stop();
        
        /**
         * 跳到指定位置播放音频
         * @param position 音频播放要跳到的位置，单位为s
         */
        seekTo(position:Number );
        
        /**
         *  获取音频流的总长度
         */
        getDuration():Number;
        /**
         * 获取音频流当前播放的位置
         */
        getPosition():Number;
        /**
         * 设置音频输出线路
         * @param route   音频播放时输出线路常量,可设置audio的ROUTE_*常量值，设置后立即生效。
         */
	    setRoute( route :Number):void;
    }

    /**
     *  录音操作成功回调
     */
    interface RecordSuccessCallback{
        onSuccess?(recordFile :string):void;
    }

    /**
     * 播放音频文件操作成功回调
     */
    interface PlaySuccessCallback{
        onCompleted?():void;
    }
    
    /**
     * 音频操作失败回调
     */
    interface  AudioErrorCallback {
        onError?(error?: DOMException): void | any; //匿名方法委托
    }
}