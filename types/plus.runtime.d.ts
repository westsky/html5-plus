declare namespace plus.runtime {
  //--------------------------------------
  /**
   * 当前应用的APPID
   */
  const appid: string;
  // 属性：
  /**
   * 当前应用的APPID
   */
  const readyState: string;
  /**
   * 第三方程序调用时传递给程序的参数
   */
  const arguments: string;

  /**
   * 应用的市场推广渠道标识
   */
  const channel: string;

  /**
   * 应用启动来源
   */
  const launcher: string;

  /**
   * 应用安装来源
   */
  const origin: string;

  /**
   * 客户端的版本号
   */
  const version: string;

  /**
   * 客户端5+运行环境的版本号
   */
  const innerVersion: string;

  /**
   * 获取当前应用首页加载的时间
   * @description
   *      应用加载首页面的总时间，从开始加载首页面到首页面加载完成，单位为ms。
   *      注意，应用首页为网络地址则包括网络传输时间。
   */
  const launchLoadedTime: number;

  /**
   * 获取当前应用的进程标识
   */
  const processId: string;

  /**
   * 获取当前应用的启动时间
   * @description 应用启动时间戳，距1970年1月1日之间的毫秒数。
   */
  const startupTime: number;

  //-------------------------
  /**
   * 获取指定APPID对应的应用信息
   */
  function getProperty(appid: string, getPropertyCB: GetPropertyCallBack): void;

  /**
   * 安装应用
   * @param filePath 要安装的文件路径
   * @param options 应用安装设置的参数
   * @param installSuccessC 正确安装后的回调
   * @param InstallErrorCallback 安装失败的回调
   */
  function install(
    filePath: string,
    options?: WidgetOptions,
    installSuccessCB?: InstallSuccessCallback,
    InstallErrorCB?: InstallErrorCallback
  ): void;

  /**
   * 退出客户端程序
   */
  function quit(): void;

  /**
   * 重启当前的应用
   */
  function restart(): void;

  /**
   * 设置程序快捷方式上显示的提示数字
   */
  function setBadgeNumber(number: string): void;

  /**
   *调用第三方程序打开指定的URL
   * @param url
   * @param errorCB  打开URL地址失败的回调
   * @param identity 指定打开URL地址的程序名称
   */
  function openURL(
    url: string,
    errorCB?: OpenErrorCallback,
    identity?: string
  ): void;

  /**
   *使用内置Webview窗口打开URL
   * @param url  要打开的URL地址
   */
  function openWeb(url: string): void;

  /**
   * 调用第三方程序打开指定的文件
   * @param filePath  打开文件的路径
   * @param options 打开文件参数
   * @param errorCB 打开文件失败的回调
   */
  function openFile(
    filePath: string,
    options?: OpenFileOptions,
    errorCB?: OpenErrorCallback
  );

  /**
   * 处理直达页面链接参数
   */
  function processDirectPage(): string;

  /**
   *调用第三方程序
   * @param appInf 要启动第三方程序的描述信息
   * @param errorCB  启动第三方程序操作失败的回调函数,启动第三方程序失败时回调，并返回失败信息。
   */
  function launchApplication(
    appInf: ApplicationInf,
    errorCB: LaunchErrorCallback
  ): void;

  /**
   * 判断第三方程序是否已存在
   * @param appInf
   */
  function isApplicationExist(appInf: ApplicationInf): boolean;

  /**
   * 判断是否自定义应用启动页面加载地址
   */
  function isCustomLaunchPath(): boolean;
}

//-------------------------------------------------------------
/**
 * 对象：Runtime
 * @description
 *     Runtime模块管理运行环境，可用于获取当前运行环境信息、与其它程序进行通讯等。
 *     通过plus.runtime可获取运行环境管理对象。
 */
declare class APIRuntime {}

/**
 * JSON对象： WidgetOptions
 * 可通过对象设置安装的应用是否进行appid校验、版本号校验等。
 * @description 可通过对象设置安装的应用是否进行appid校验、版本号校验等。
 */
declare interface WidgetOptions {
  /**
   * 是否强制安装
   */
  force: boolean;
}

/**
 * JSON对象：应用信息
 */
declare interface WidgetInfo {
  /**
   * 应用的APPID
   */
  appid: string;
  /**
   * 应用的版本号
   */
  version: string;
  /**
   * 应用的名称
   */
  name: string;
  /**
   * 应用描述信息
   */
  description: string;
  /**
   * 应用描述信息
   */
  author: string;
  /**
   * 开发者邮箱地址
   */
  email: string;
  /**
   * 应用授权描述信息
   */
  license: string;
  /**
   * 应用授权说明链接地址
   */
  licensehref: string;
  /**
   * 应用许可特性列表
   */
  features: Array<string>;
}

declare interface OpenFileOptions {
  /**
   * 优先使用的程序包名
   */
  pname: string;

  /**
   * 弹出系统选择程序界面指示区域
   */
  popover: string | any;
}
declare interface ApplicationInf {
  /**
   * 第三方程序包名
   */
  pname: string;

  /**
   * 程序的操作行为
   */
  action: string;

  /**
   * 调用程序的参数
   */
  extra: string | any;
}

//-------------------------------------------------------------
//回调方法
interface InstallSuccessCallback {
  (widgetInfo: WidgetInfo): void;
}

interface InstallErrorCallback {
  (error: DOMException): void;
}
interface GetPropertyCallBack {
  (widgetInfo: WidgetInfo): void;
}

interface OpenErrorCallback {
  (error: DOMException): void;
}

interface LaunchErrorCallback {
  (error: DOMException): void;
}
