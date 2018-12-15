/**
 * Typescript 声明文件
 * @author westsky
 * @description Html 5+ plus.uploader
 */
declare namespace plus.uploader {
  //直属成员
  function createUpload(
    url: string,
    options?: UploadOptions,
    completeCB?: UploadCompletedCallback
  ): Upload;

  //空间成员
  interface Upload {
    //属性
    readonly url: string;
    readonly state: number;
    readonly options: UploadOptions;
    readonly responseText: string;
    readonly uploadSize: number;
    readonly totalSize: number;

    //方法
    abort(): void;
    addData( key:string, value:string ):Boolean;
    addFile( path:string , options:UploadFileOptions):Boolean;
    addEventListener(type:UploadEvent,listener:UploadStateChangedCallback,capture?:Boolean);
    start():void;
    open(
      method: string,
      url: string,
      async?: boolean,
      user?: string | null,
      password?: string | null
    ): void;
    overrideMimeType(mime: string): void;
    send(data?: any): void;
    setRequestHeader(header: string, value: string): void;

    //事件
    onreadystatechange: ((this: XMLHttpRequest, ev: Event) => any) | null;
  }

  /**
   * JSON对象，创建上传任务的参数
   */
  class UploadOptions{
    method:string;  //仅支持http协议的“POST”请求。
    blocksize:number;
    priority:number;
    timeout?:number;
    retry?:number;
    retryInterval?:number;
  }

  /**
   * JSON对象，创建上传任务的参数
   */
  class UploadFileOptions {
    key?:string;
    name?:string;
    mime:string;
  }

  class UploadEvent {
    statechanged:string;
  }

  interface UploadOptions {}

  //回调方法
  interface UploadCompletedCallback {
    (upload: Upload, status: Number): void;
  }

  interface UploadStateChangedCallback {
    (upload:Upload, status:Number):void;
  }
}
