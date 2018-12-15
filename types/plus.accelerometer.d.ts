/**
 * Typescript 声明文件
 * @author westsky
 * @namespace Html 5+ plus.accelerometer
 * @description
 *    Accelerometer模块管理设备加速度传感器，用于获取设备加速度信息，
 *    <p>包括x（屏幕水平方向）、y（垂直屏幕水平方向）、z（垂直屏幕平面方向）三个方向的加速度信息。
 *    通过plus.accelerometer获取设备加速度传感器管理对象。
 */
declare namespace plus.accelerometer{

    /**
     * 获取当前设备的加速度信息
     * @param successCB 
     * @param errorCB 
     */
    function getCurrentAcceleration(successCB:AccelerometerSuccessCallback, errorCB?:AccelerometerErrorCallback):void;
    /**
     * 监听设备加速度变化信息
     * @param successCB 
     * @param errorCB 
     * @param option  加速度信息参数,监听设备加速度信息的参数，如更新数据的频率等。
     */
    function watchAcceleration(successCB:AccelerometerSuccessCallback, errorCB?:AccelerometerErrorCallback, option?:AccelerometerOption ):Number;

    //--------------------------------------------------------
    /**
     * 设备加速度信息对象
     * @description JSON对象，保存获取设备的加速度信息，包括x、y、z三个方向的加速度信息。
     */
    interface Acceleration{
        /**
         * x轴方向的加速度
         * @description 获取当前设备x轴方向的加速度，浮点型数据，与物理学中的加速度值一致。
         */
        readonly xAxis:Number;
        /**
         * y轴方向的加速度
         * @description 获取当前设备y轴方向的加速度，浮点型数据，与物理学中的加速度值一致。
         */
        readonly yAxis:Number;
        /**
         * z轴方向的加速度
         * @description 获取当前设备z轴方向的加速度，浮点型数据，与物理学中的加速度值一致。
         */
	    readonly zAxis:Number;  
    }

    /**
     * 监听设备加速度感应器参数
     */
    interface AccelerometerOption{
        /**
         * 更新加速度信息间隔时间
         * @description 监听器获取加速度信息的时间间隔，单位为ms，默认值为500ms
         * @example frequency:1000
         */
        readonly frequency:Number;
    }

    //-------------------------------------------------------
    /**
     * 获取设备加速度信息成功的回调函数
     */
    interface AccelerometerSuccessCallback{
        onSuccess?(acceleration:plus.accelerometer.Acceleration):void;
    }
     
    /**
     * 获取设备加速度信息失败的回调函数
     */
    interface  AccelerometerErrorCallback {
        onAccelerometerError?(error?: DOMException): void | any; //匿名方法委托
    }
}

