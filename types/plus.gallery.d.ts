/**
 * Gallery模块管理系统相册，支持从相册中选择图片或视频文件、保存图片或视频文件到相册等功能。通过plus.gallery获取相册管理对象。
 * @author westsky
 * @description Html 5+ plus.gallery
 */
declare namespace plus.gallery {
  function pick(successCB, errorCB, options);
  function save(path, successCB, errorCB);

  /**
   * JSON对象，从相册中选择文件的参数
   */
  interface GalleryOptions {}

  /**
   * 相册选择文件过滤类型
   */
  interface GalleryFilter {
    /**
     * 仅可选择图片文件
     */
    image: String;
    /**
     * 仅可选择视频文件
     */
    video: String;
    /**
     * 不过滤，可选择图片或视频文件
     */
    none: String;
  }
  /**
   * 保存图片到相册成功事件
   */
  interface GallerySaveEvent {
    /**
     *  (String 类型 ) 保存到相册的图片路径
     */
    path: String;
  }
  /**
   * JSON对象，弹出拍照或摄像界面指示位置
   * @description
    弹出拍照或摄像窗口指示区域的宽度，单位支持像素值（如"100px"）和百分比（如"50%"），如不写单位则为像素值。
   */
  interface PopPosition {
    /**
     *  指示区域距离容器顶部的距离
     */

    top: String;
    /**示区域距离容器左侧的距离
     *
     */
    left: String;

    /**
     * 指示区域的宽度
     */
    width: String;
    /**
     * 指示区域的高度
     */
    height: String;
  }

  /**
   * 单选系统相册图片成功的回调
   */
  interface GalleryPickSuccessCallback {
    /**
     * 系统相册中单选图片或视频文件成功的回调函数，在选择文件操作成功时调用。
     * @param file 选择的图片或视频文件路径
     */
    onSuccess(file: String): void;
  }

  interface GalleryMultiplePickSuccessCallback {
    /**
     * 多选系统相册返回数据
     * @description files - 字符串数组，保存多选的图片或视频文件路径。
     * @param event
     *  var files = event.files; // 保存多选的图片或视频文件路径
     */
    onSuccess(event: any): void;
  }

  interface GallerySaveEvent {
    /**
     * 保存到相册的图片路径
     */
    path: String;
  }

  interface GalleryPickSuccessCallback {
    /**
     *
     * @param file 选择的图片或视频文件路径
     */
    onSuccess(file): void;
  }

  interface GallerySaveSuccessCallback {}

  interface GallerySuccessCallback {
    onSuccess(event: GallerySaveEvent);
  }

  interface GalleryErrorCallback {
    onError(error: DOMException): void;
  }
}
