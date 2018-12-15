/**
 * Typescript 声明文件
 * @author westsky
 * @description Html 5+ plus.camera
 */

declare namespace plus.camera {
  function getCamera(index?: number): Camera;
  //空间成员
  interface Camera {
    //属性
    readonly supportedImageResolutions: string[];
    readonly supportedVideoResolutions: string[];
    readonly supportedImageFormats: string[];
    readonly supportedVideoFormats: string[];

    //方法
    captureImage(
      successCB: CameraSuccessCallback,
      errorCB?: CameraErrorCallback,
      option?: CameraOption
    ): void;
    startVideoCapture(
      successCB: CameraSuccessCallback,
      errorCB?: CameraErrorCallback,
      option?: CameraOption
    ): void;
    stopVideoCapture(): void;
  }

  interface CameraOption {
    filename?: string;
    format?: string;
    index?: string;
    resolution?: string;
    popover?: PopPosition;
  }

  interface PopPosition {
    top: string;
    left: string;
    width: string;
    height: string;
  }

  //回调委托
  interface CameraSuccessCallback {
    (path?: string): void;
  }

  interface CameraErrorCallback {
    (error?: DOMException): void | any; //匿名方法委托
  }
}
