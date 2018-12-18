/**
 * Orientation模块管理设备的方向信息，
   包括alpha、beta、gamma三个方向信息，通过plus.orientation可获取设备方向管理对象。
 * Typescript 声明文件
 * @author westsky
 * @description Html 5+ plus.orientation
 */

declare namespace plus.orientation {
  /**
   * 获取当前设备的方向信息，包括alpha、beta、gamma三个方向信息
   * @description 方向信息是设备相对于水平初始方向分别以z、x、y轴为轴心旋转的角度，
   *      对应值为alpha、beta、gamma三个方向的信息。
   *      方向信息可通过successCB回调函数返回。方向信息获取失败则调用回调函数errorCB
   *
   * @param successCB
   * @param errorCB
   */
  function getCurrentOrientation(
    successCB: OrientationSuccessCallback,
    errorCB?: OrientationErrorCallback
  );

  /**
   * 监听设备方向信息的变化
   * @param successCB
   * @param errorCB
   * @param option
   */
  function watchOrientation(
    successCB: OrientationSuccessCallback,
    errorCB?: OrientationErrorCallback,
    option?: OrientationOption
  ): Number;

  /**
   * 关闭监听设备方向信息
   * @param watchId 需要取消的方向监听器标识，调用watchOrientation方法的返回值。
   */
  function clearWatch(watchId: Number): void;

  interface OrientationOption {
    /**
     * : (Number 类型 ) 更新方向信息的时间间隔
     */
    frequency: Number;
  }

  /**
   * JSON对象，设备方向信息数据
   */
  interface Rotation {
    readonly alpha: Number;
    readonly beta: Number;
    readonly gamma: Number;
    readonly magneticHeading: Number;
    readonly trueHeading: Number;
    readonly headingAccuracy: Number;
  }

  interface OrientationSuccessCallback {
    /**
     * 设备的方向信息Rotation
     */
    (rotation: String): void;
  }
  interface OrientationErrorCallback {
    (error?: DOMException): void;
  }
}
