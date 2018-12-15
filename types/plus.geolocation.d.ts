declare namespace plus.geolocation {
  const PERMISSION_DENIED: Number; // = 1;
  const POSITION_UNAVAILABLE: Number; // = 2;
  const TIMEOUT: Number; // = 3;
  const UNKNOWN_ERROR: Number; // = 4;
  //----方法： function
  /**获取当前设备位置信息 */
  function getCurrentPosition(
    succesCB: GeolocationSuccessCallback,
    errorCB?: GeolocationErrorCallback,
    options?: PositionOptions
  ): void;
  /**监听设备位置变化信息 */
  function watchPosition(
    succesCB: GeolocationSuccessCallback,
    errorCB?: GeolocationErrorCallback,
    options?: PositionOptions
  ): Number;
  /**关闭监听设备位置信息 */
  function clearWatch(watchId: Number): void;
  //----回调方法：back function
  /**获取定位信息成功的回调函数*/
  interface GeolocationSuccessCallback {
    (position: Position): void;
  }
  /**获取定位信息失败的回调函数*/
  interface GeolocationErrorCallback {
    (error: GeolocationError): void;
  }
  //-------对象：

  /**
   * JSON对象，地址信息
   */
  class Address {
    readonly country: String;
    readonly province: String;
    readonly city: String;
    readonly district: String;
    readonly street: String;
    readonly streetNum: String;
    readonly poiName: String;
    readonly postalCode: String;
    readonly cityCode: String;
  }
  /**
   * JSON对象，设备位置信息数据
   */
  class Position {
    readonly coords: Coordinates;
    readonly coordsType: String;
    readonly timestamp: number;
    readonly address: Address;
    readonly addresses: string;
  }
  /**
   * JSON对象，地理坐标信息
   */
  class Coordinates {
    readonly latitude: number;
    readonly longitude: number;
    readonly altitude: number;
    readonly accuracy: number;
    readonly altitudeAccuracy: number;
    readonly heading: number;
    readonly speed: number;
  }
  /**
   * JSON对象，监听设备位置信息参数
   */
  class PositionOptions {
    enableHighAccuracy?: boolean;
    timeout?: number;
    maximumAge?: number;
    provider?: string;
    coordsType?: string;
    geocode?: boolean;
  }
  /**
   * JSON对象，定位错误信息
   */
  class GeolocationError {
    readonly code: Number;
    readonly message: String;
  }
}
