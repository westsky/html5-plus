/**
 * Typescript 声明文件
 * Webview模块管理应用窗口界面，实现多窗口的逻辑控制管理操作。
 * @author westsky
 * @description Html 5+ plus.webview
 * 
 */

declare namespace plus.webview {
  //直属成员
  //获取当前窗口的WebviewObject对象
  function currentWebview(): WebviewObject;
  //创建新的Webview窗口
  function create(
    url: string,
    id: string,
    styles: WebviewStyles,
    extra?: JSON
  ): WebviewObject;
  //关闭Webview窗口
  function close(
    id_wvobj: String | WebviewObject | any,
    aniClose?: AnimationTypeClose,
    duration?: Number,
    extras?: WebviewExtraOptions
  ): void;

  /**
   *查找指定标识的WebviewObject窗口
   */
  function getWebviewById(id: string): WebviewObject;
  /**
   *获取屏幕所有可视的Webview窗口
   */
  function getDisplayWebview(): Array<WebviewObject>;
  /**
   * 获取所有Webview窗口
   */
  function all(): Array<WebviewObject>;

  /** 
   * 显示Webview窗口
  */
  function show(
    id_wvobj: WebviewObject | string,
    aniShow?: AnimationTypeClose,
    duration?: number,
    showedCB?: Callback,
    extras?: WebviewExtraOptions
  ): void;
   /**
   *  隐藏Webview窗口
   */
  function hide(
    id_wvobj: WebviewObject | string,
    aniHide?: AnimationTypeClose,
    duration?: number,
    extras?: WebviewExtraOptions
  );
 /**
   * 获取应用首页WebviewObject窗口对象
    */
   function getLaunchWebview():WebviewObject;
   /**
    * 获取应用第二个首页WebviewObject窗口对象
     */
    function getSecondWebview():WebviewObject;
   /**
    * 获取应用显示栈顶的WebviewObject窗口对象
    */
   function getTopWebview():WebviewObject;
 /**
  * 
  * @param url 打开窗口加载的HTML页面地址
  * @param id 打开窗口的标识
  * @param styles  创建Webview窗口的样式（如窗口宽、高、位置等信息）
  * @param aniShow 显示Webview窗口的动画效果
  * @param duration 显示Webview窗口动画的持续时间单位为ms，默认值为200ms（毫秒）。
  * @param showedCB Webview窗口显示完成的回调函数
  */
   function open(
    url?:string,
    id?:String,
    styles?:WebviewStyles,
    aniShow?:AnimationTypeShow,
    duration?:Number,
    showedCB?:SuccessCallback
  ):WebviewObject;
  /**
   * 
   * @param url 必须是网络地址（http/https）,本地页面地址无需预载。
   */
  function prefetchURL(
    url:string
  ):void;
  /**
   *@param urls 需要预载的页面地址数组
   */
  function prefetchURLs(
    urls:Array<string>
  ):void;
/**
 * @param id_wvobj 要显示Webview窗口id或窗口对象
 * @param aniShow 显示Webview窗口的动画效果
 * @param duration 显示Webview窗口动画的持续时间
 * @param showedCB Webview窗口显示完成的回调函数
 * @param extras 显示Webview窗口扩展参数
 * @returns WebviewObject Webview窗口对象
 */
  function show(
    id_wvobj:String | WebviewObject,
    aniShow?:AnimationTypeShow,
    duration?:Number,
    showedCB?:SuccessCallback,
    extras?:WebviewExtraOptions
  ):WebviewObject;
  /**
   * 
   * @param options 
   * @param otherOptions 
   * @param callback 
   */
  function startAnimation(
    options:WebviewAnimationOptions,
    otherOptions?:WebviewAnimationOptions,
    callback?:WebviewAnimationCallback
  ):void;
  /**
   * Webview窗口默认开启硬件加速则返回true，否则返回false。
   */
  function defaultHardwareAccelerated():Boolean;
//---------------------------0---------回调方法
/**
 * Webview窗口操作成功回调函数
 */
interface SuccessCallback {
  onSuccess():void;
}
interface WebviewAnimationCallback{
   onAnimationFinished(event:Event):void;
}
//----------------------------------
  //空间成员
  class WebviewObject {
    id: string;
    isVisible(): boolean;
    getURL(): string;
    parent(): WebviewObject;
    append(webview: WebviewObject): void;
    show(aniShow?: string, duration?: number);
    hide(aniHide?: string, duration?: number);
    close(): void;
    /**
     * 重新加载Webview窗口显示的HTML页面
     * @param force 是否强制不使用缓存
     */
    reload(force?: boolean): void;
    /**
     * 获取当前Webview窗口的创建者
     * @returns
     * @description 创建者为调用plus.webview.open或plus.webview.create方法创建当前窗口的Webview窗口。
     */
    opener(): WebviewObject;

    addEventListener(
      event: string,
      listener?: EventCallback,
      capture?: boolean
    ): void;
  }

  interface EventCallback {
    (event: Event): void;
  }

  //---------------------
  class WebviewStyles {
    additionalHttpHeaders?: JSON;
    animationOptimization?: string;
    cachemode?: string;
    backButtonAutoControl?: string;
    background?: string;
    hardwareAccelerated: string;
    height?: string;
    left?: string;
    top?: string;
    bottom?: string;
    render?: string;
    popGesture?: string;
    bounce?: string;
    bounceBackground?: string;
  }
 /**
  * 用于指定动画目标窗口，起始位置、目标位置等信息。
  */
  class WebviewAnimationOptions{
    //执行动画的窗口对象
    view:WebviewObject;
    //用于指定动画窗口的起始位置，目标位置等
    styles:WebviewAnimationStyles;
    //窗口动画完成后的行为
    action:String;
  }
  /**
   * 动画样式,用于指定动画窗口的起始位置、目标位置等信息。
   */
  class WebviewAnimationStyles{
    fromLeft:string;
    toLeft:string;
  }
 

}
//-=============================================
declare class WebviewExtraOptions {}

declare class AnimationTypeClose {}

declare class ShowParam {
  autoShow?: boolean;
  aniShow?: string;
  duration?: number;
  popGesture?: string;
}

declare class WaitingParam {
  autoShow?: boolean;
  title?: string;
  options?: WindowStyles;
}

declare class AnimationTypeShow {}
declare class WindowStyles {
  top?: number;
  bottom?: number;
  width?: number;
  height?: number;
  extras?: JSON;
  popGesture?: string;
}

type Extra = JSON | any;
