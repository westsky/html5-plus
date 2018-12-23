/**
 * HTML5+ API Reference
 * 组件包：plus.net
 * 版本：v1.0.0
 * 版本历史：
 *     1）XMLHttpRequest完成，未添加注释
 */
declare namespace plus.net {
  //直属成员=======================================================

  //空间成员=======================================================
  class XMLHttpRequest {
    //属性
    readonly readyState: number;
    readonly response: any;
    readonly responseText: string;
    readonly status: number;
    readonly statusText: string;
    timeout: number;

    //方法
    abort(): void;
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
    onreadystatechange: ((this: XMLHttpRequest) => any) | null | void; //或者定义为XhrStateChangeCallback；其实没有区别
  }

  interface ProgressEvent extends Event {
    readonly loaded: number;
    readonly total: number;
    readonly lengthComputable: Boolean;
  }

  interface XhrStateChangeCallback {
    (onSuccess: void): void;
  }

  interface XhrProgressEventCallback {
    (event: ProgressEvent): void;
  }
}
