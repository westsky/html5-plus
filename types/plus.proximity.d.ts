/**
 * Typescript 声明文件
 * @author westsky
 * @description Html 5+ plus.proximity
 */

/**
 * Proximity模块管理设备距离传感器，可获取当前设备的接近距离信息，通过plus.proximity可获取设备距离传感管理对象。
 */
declare namespace plus.proximity {
  /**
   * 获取当前设备的接近距离信息
   * @description 获取当前接近设备的距离信息，距离值单位为厘米。
   *              如果感应器无法获取准确的距离值，则在接近设备时返回0，否则返回Infinity。
   *              获取成功则调用successCB回调函数返接近回距离值。
   *              获取失败则调用errorCB回调函数错误信息。
   * @param successCB
   * @param errorCB
   */
  function getCurrentProximity(
    successCB: ProximitySuccessCallback,
    errorCB: ProximityErrorCallback
  );

  /**
   * 监听设备接近距离的变化
   * @description watchProximity将监听设备的接近距离信息变化事件，
   *              当接近距离发生变化时通过changeCB回调函数返回距离值。
   *              监听距离变化事件失败则通过errorCB回调函数返回错误信息。
   * @param changeCB
   * @param errorCB
   */
  function watchProximity(
    changeCB: ProximitySuccessCallback,
    errorCB?: ProximityErrorCallback
  ): Number;

  /**
   * 关闭监听设备接近距离变化
   * @param watchId 需要取消的距离监听器标识，调用watchProximity方法的返回值。
   */
  function clearWatch(watchId: Number): void;

  /**
   * 获取设备接近距离信息成功的回调函数
   */
  interface ProximitySuccessCallback {
    /**
     * distance: ( Number ) 必选 设备接近距离,设备接近距离传感器获取的距离值，单位为厘米。如果感应器无法获取准确的距离值，则在接近设备时返回0，否则返回Infinity。
     * @param distance
     */
    onSuccess(distance: Number): void;
  }

  /**
   * 获取设备接近距离信息失败的回调函数
   */
  interface ProximityErrorCallback {
    onError(error: DOMException): void;
  }
}
