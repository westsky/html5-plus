/**
 * nativeObj管理系统原生对象。
 * Typescript 声明文件
 * @author westsky
 * @description Html 5+ plus.messaging
 */

declare namespace plus.nativeObj {
  interface AnimationOptions {
    type: String;
    duration: Number;
  }

  interface AnimationViewStyles {
    bitmap: Bitmap;
    text: String;
  }
  class Bitmap {
    constructor(id: String, path: String);
    readonly id: String;

    static getItems(): Array<Bitmap>;
    static getBitmapById(id): Bitmap;

    clear();
    load(path, succesCallback, errorCallback);
    loadBase64Data(data, successCallback, errorCallback);
    save(path, options, successCallback, errorCallback);
    toBase64Data(): String;
  }

  interface BitmapSaveOptions {
    overwrite: Boolean;
    format: String;
    quality: Number;
    clip: Rect;
  }

  class View {
    readonly id: String;

    static startAnimation(options, view, otherview, callback): void;
    static clearAnimation(type): void;
    static getViewById(id): View;

    constructor(id, styles, tags);

    addEventListener(event, listener, capture);
    animate(options, callback);
    close();
    clearRect(position, id);
    draw(tags);
    drawBitmap(src, sprite, position, id);
    drawRect(color, position, id);
    drawText(text, position, styles, id);
    drawRichText(text, position, styles, id);
    drawInput(position, styles, id);
    getInputFocusById(id): Boolean;
    getInputValueById(id): String;
    reset();
    restore();
    show();
    setInputFocusById(id, focusable);
    setStyle(styles);
    setTouchEventRect(rect);
    hide();
    interceptTouchEvent(intercept);
    isVisible(): Boolean;
  }

  interface ViewAnimationOptions {
    type: String;
    duration: Number;
    frames: Number;
    region: Rect;
  }

  interface ViewDrawTagStyles {
    id: String;
    tag: String;
    color: String;
    inputStyles: InputStyles;
    position: Position;
    rectStyles: RectStyles;
    src: String;
    sprite: Position;
    text: String;
    textStyles: TextStyles;
    richTextStyles: RichTextStyles;
  }


  interface ViewStyles {
	attribute String backgroundColor;
  attribute String left;
  attribute String top;
  attribute String bottom;
  attribute String height;
  attribute String width;
  attribute String dock;
  attribute Number opacity;
  attribute String position;
  attribute ViewStatusbarStyles statusbar;
}	

  interface ImageSlider extends View {
    addImages(images);
    currentImageIndex(): Number;
    setImages(images);
  }

  interface Rect {
    top: String;
    left: String;
    width: String;
    height: String;
  }

  interface RichTextStyles {
    align: String;
    family: String;
    fontSrc: String;
    onClick: RichTextClickedCallback;
  }

  interface RichTextClickedCallback {
    /**
     * // Event handled code.
      var tagName = event.tagName;
      var href = event.href;
      var src = event.src;
    }
     */
    onEvent(event: RichTextEvent);
  }

  interface RichTextEvent {
    readonly tagName?: String;
    readonly href?: String;
    readonly src?: String;
  }

  interface TouchEventCallback {
    onEvent(event: TouchEvent): void;
  }

  interface TouchEvent {
    readonly clientX: Number;
    readonly clientY: Number;
    readonly pageX: Number;
    readonly pageY: Number;
    readonly screenX: Number;
    readonly screenY: Number;
    readonly target: any;
    readonly currentImageIndex: Number;
  }

  interface NativeObjSuccessCallback {
    (): void;
  }

  interface NativeObjErrorCallback {
    (error?: DOMException): void;
  }
}
