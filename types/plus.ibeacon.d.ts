/**
 * iBeacon模块用于搜索附件的iBeacon设备（*请使用HBuilderX并更新到最新版本*）。
 * @author westsky iBeacon模块用于搜索附件的iBeacon设备
 * @description Html 5+ plus.ibeacon
 */
declare namespace plus.ibeacon {
  /**
   *  开始搜索附近的iBeacon设备;
   * @param options
   */
  function startBeaconDiscovery(options: IBeaconDiscoveryOptions);
  /**
   * 停止搜索附近的iBeacon设备
   * @param options
   */
  function stopBeaconDiscovery(options: IBeaconDiscoveryOptions);
  /**
   * : 获取已搜索到的iBeacon设备;
   * @param options
   */
  function getBeacons(options: IBeaconDiscoveryOptions);
  /**
   * 监听iBeacon设备更新
   */
  function onBeaconUpdate(updateCB: IBeaconUpdateCallback);
  /**
   * 监听iBeacon服务状态变化
   */
  function onBeaconServiceChange(changeCB: IBeaconServiceChangeCallback);

  interface IBeaconDiscoveryOptions {
    /**
     *  要搜索设备的uuid
     */
    uuids?: Array<String>;
    /**
     * 是否校验蓝牙开关,
     * Android平台忽略此属性，iOS平台默认值为false。
     */
    ignoretoothAvailable?: Boolean;

    /**
     * 搜索设备成功回调函数
     */
    success?: IBeaconSuccessCallback;
    /**
     * 搜索设备失败回调函数
     */
    fail?: IBeaconFailCallback;
    /**
     * 搜索设备操作完成回调函数
     */
    complete?: IBeaconCompleteCallback;
  }
  interface IBeaconInfo {
    readonly uuid: String;
    readonly major: String;
    readonly minor: String;
    readonly proximity: Number;
    readonly accuracy: Number;
    readonly rssi: Number;
  }

  interface IBeaconSuccessCallback {
    onSuccess(event: any): void;
  }
  interface IBeaconFailCallback {
    onError(error?: DOMException): void; //匿名方法委托
  }

  interface IBeaconCompleteCallback {
    onComplete(event: any): void;
  }

  interface IBeaconUpdateCallback {
    onSuccess(event: any): void;
  }

  interface IBeaconServiceChangeCallback {
    onSuccess(event: any): void;
  }
}
