/**
 * HTML5+ API Reference
 * 这是开发用的基础库
 */
//==================================================

declare namespace plus {
  class bridge {
    readonly NO_RESULT: number;
    readonly OK: number;
    readonly CLASS_NOT_FOUND_EXCEPTION: number;
    readonly ILLEGAL_ACCESS_EXCEPTION: number;
    readonly INSTANTIATION_EXCEPTION: number;
    readonly MALFORMED_URL_EXCEPTION: number;
    readonly IO_EXCEPTION: number;
    readonly INVALID_ACTION: number;
    readonly JSON_EXCEPTION: number;
    readonly ERROR: number;

    execImg: any;
    execIframe: any;
    synExecXhr: XMLHttpRequest;
    callbacks: any;
    commandQueueFlushing: boolean;
    commandQueue: Array<any>;

    createImg();
    nativecomm();

    exec(
      service: string,
      action: string,
      args?: Array<string> | Array<any>,
      callbackid?: string
    ): any | void;
    execSync(
      service: string,
      action: string,
      args?: Array<string> | Array<any>,
      fu?: any
    ): any | void;

    callbackFromNative(callbackId: string, playload: any): void;
    callbackId(successCallback?: any, failCallback?: any): void;
  }

  class Callback {
    onCallback(fun: any, evt: any, args: any): void;
    addEventListener(evtType: string, fun: any, capture?: boolean): void;
    removeEventListener(evtType: string, fun: any): void;
  }

  class tools {
    readonly __UUID__: number;
    readonly UNKNOWN: number;
    readonly IOS: number;
    readonly ANDROID: number;
    readonly platform: number | any;
    readonly debug: boolean;
    UUID(obj: any): string | any;
    extend(destination: string, source: string): void;
    typeName(val: any): string;
    isDate(d: any): boolean;
    isArray(a: any): boolean;
    isNumber(a: any): boolean;

    isDebug(): boolean;
    stringify(args: any): string;
    execJSfile(path: string): void;
    copyObjProp2Obj(wb: any, param: any, excludeProperties: any): void;
    clone(obj: any): any;
  }

  type obj = Callback;
  type T = tools;
  type B = bridge;
}
