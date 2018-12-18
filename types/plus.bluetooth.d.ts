/**
 * Bluetooth模块用于管理蓝牙设备，搜索附近蓝牙设备、连接实现数据通信等。
 * @author westsky
 * @description Html 5+ plus.bluetooth
 */

declare namespace plus.bluetooth {
  function closeBluetoothAdapter(options: BluetoothOptionsCallback);
  function getBluetoothAdapterState(options: BluetoothOptionsCallback);
  function getBluetoothDevices(options: BluetoothOptionsCallback);

  /**
   * 根据uuid获取处于已连接的设备
   * @param options
   */
  function getConnectedBluetoothDevices(options: BluetoothOptionsCallback);
  /**
   * 监听蓝牙适配器状态变化事件
   * @param options
   */
  function onBluetoothAdapterStateChange(options: BluetoothOptionsCallback);
  /**
   * :监听搜索到新设备的事件
   * @param options
   */
  function onBluetoothDeviceFound(options: BluetoothOptionsCallback);
  /**
   * 初始化蓝牙模块
   * @param options
   */
  function openBluetoothAdapter(options: BluetoothOptionsCallback);
  /**
   *  开始搜索附近的蓝牙设备
   */
  function startBluetoothDevicesDiscovery(options: BluetoothOptionsCallback);
  /**
   * 停止搜寻附近的蓝牙外围设备
   * @param options
   */
  function stopBluetoothDevicesDiscovery(options: BluetoothOptionsCallback);
  /**
   * 断开与低功耗蓝牙设备的连接
   * @param options
   */
  function closeBLEConnection(options: BluetoothOptionsCallback);
  /**
   *  连接低功耗蓝牙设备
   * @param options
   */

  function createBLEConnection(options: BluetoothOptionsCallback);
  /**
   * 获取蓝牙设备指定服务中所有特征值(characteristic)
   * @param options
   */
  function getBLEDeviceCharacteristics(options: BluetoothOptionsCallback);
  /**
   * 获取蓝牙设备的所有服务(service)
   */
  function getBLEDeviceServices(options: BluetoothOptionsCallback);
  /**
   * 启用低功耗蓝牙设备特征值变化时的notify功能，订阅特征值
   * @param options
   */
  function notifyBLECharacteristicValueChange(
    options: BluetoothOptionsCallback
  );
  /**
   * 监听低功耗蓝牙设备的特征值变化事件
   * @param options
   */
  function onBLECharacteristicValueChange(options: BluetoothOptionsCallback);
  /**
   * 监听低功耗蓝牙设备连接状态变化事件
   * @param options
   */
  function onBLEConnectionStateChange(options: BluetoothOptionsCallback);
  /**
   * 读取低功耗蓝牙设备指定特征值的二进制数据值
   * @param options
   */
  function readBLECharacteristicValue(options: BluetoothOptionsCallback);
  /**
   * 向低功耗蓝牙设备指定特征值写入二进制数据
   * @param options
   */
  function writeBLECharacteristicValue(options: BluetoothOptionsCallback);

  interface BluetoothDeviceInfo {
    readonly name: String;
    readonly deviceId: String;
    readonly RSSI: String;
    readonly advertisData: ArrayBuffer;
    readonly advertisServiceUUIDs: Array<String>;
    readonly localName: String;
    readonly serviceData: any | JSON;
  }

  interface BluetoothService {
    readonly uuid: String;
    readonly isPrimary: Boolean;
  }

  interface Bluetoothcharacteristic {
    readonly uuid: String;
    readonly properties: BluetoothcharacteristicProperties;
  }

  interface BluetoothcharacteristicProperties {
    readonly read: Boolean;
    readonly write: Boolean;
    readonly notify: Boolean;
    readonly indicate: Boolean;
  }

  interface BluetoothOptionsCallback {
    /**
     * 可选 关闭蓝牙模块成功回调函数
     */
    success?: BluetoothSuccessCallback;

    /**
     * 可选 关闭蓝牙模块失败回调函数
     */
    fail?: BluetoothFailCallback;
    /**
     * 关闭蓝牙模块操作完成回调函数
     */
    complete?: BluetoothCompleteCallback;
  }
  interface BluetoothSuccessCallback {
    onSuccess(event: any): void;
  }

  interface BluetoothFailCallback {
    onFail(error?: DOMException): void; //匿名方法委托
  }

  interface BluetoothCompleteCallback {
    onComplete(event: any): void;
  }

  interface BluetoothAdapterStateChangeCallback {
    onStateChange(event: any): void;
  }

  interface BluetoothDeviceFoundCallback {
    onStateChange(event: any): void;
  }

  interface BLEConnectionStateChangeCallback {
    onStateChange(event: any);
  }

  interface BLECharacteristicValueChangeCallback {
    onStateChange(event: any);
  }
}
