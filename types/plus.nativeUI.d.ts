/**
 * HTML5+ API Reference
 * 组件包：plus.nativeUI
 * 版本：v1.0.0
 * 版本历史：
 *
 */
declare namespace plus.nativeUI {
  //直属成员
  function actionSheet(
    actionsheetStyle: ActionSheetStyles,
    actionsheetCallback?: ActionSheetCallback
  ): NativeUIObj;
  function alert(): void;
  function confirm(): void;
  function closeWaiting(): void;
  function closeToast(): void;
  function previewImage(): void;
  function showWaiting(title?: string, options?: WaitingOptions): Waiting;
  function pickDate(): void;
  function pickTime(): void;
  function prompt(): void;

  /**
   *显示自动消失的提示消息
   * @param message 必选 提示消息上显示的文字内容
   * @param options 可选 提示消息的参数
   */
  function toast(message: string, options?: ToastOptions): void;

  //========================================================================
  //空间成员
  class ToastOptions {
    align?: string;
    duration?: string;
    icon?: string;
    style?: string;
    type?: string;
    richTextStyle?: RichTextStyles;
  }

  interface RichTextStyles {
    align: string;
    family: string;
    fontSrc: string;
    onClick: string;
  }
  //回调委托

  interface Waiting {
    close(): void;
  }
  class WaitingOptions {
    width: string;
  }

  /**
   * JSON对象，原生选择按钮框的样式参数
   */
  class ActionSheetStyles {
    title?: string;
    cancel?: string;
    buttons?: Array<ActionButtonStyles>;
  }

  class ActionButtonStyles {
    color?: string;
    title?: string;
    style?: string;
  }

  interface NativeUIObj {
    close(): void;
  }

  interface ActionSheetCallback {
    (event: ActionSheetEvent): void;
  }

  interface ActionSheetEvent extends Event {
    index: number;
  }
}
