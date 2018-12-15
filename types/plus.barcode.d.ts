/**
 * Typescript 声明文件
 * @author westsky
 * @description Html 5+ plus.barcode
 */

declare namespace plus.barcode {
  //QR: 条码类型常量，QR二维码，数值为0
  const QR = 0;
  //EAN13: 条码类型常量，EAN一维条形码码标准
  const EAN13 = 1;
  //EAN8: 条码类型常量，ENA一维条形码简版，数值为2
  const EAN8 = 2;
  // AZTEC: 条码类型常量，Aztec二维码，数值为3
  const AZTEC = 3;
  // DATAMATRIX: 条码类型常量，Data Matrix二维码，数值为4
  const DATAMATRIX = 4;
  //UPCA: 条码类型常量，UPC码标准版，数值为5
  const UPCA = 5;
  // UPCE: 条码类型常量，UPC码缩短版，数值为6
  const UPCE = 6;
  //CODABAR: 条码类型常量，Codabar码，数值为7
  const CODABAR = 7;
  // CODE39: 条码类型常量，Code39一维条形码，数值为8
  const CODE39 = 8;
  //CODE93: 条码类型常量，Code93码，数值为9
  const CODE93 = 9;
  //CODE128: 条码类型常量，Code128码，数值为10
  const CODE128 = 10;
  // ITF: 条码类型常量，ITF码，数值为11
  const ITF = 11;
  // MAXICODE: 条码类型常量，MaxiCode二维码，数值为12
  const MAXICODE = 12;
  //PDF417: 条码类型常量，PDF 417码，数值为13
  const PDF417 = 13;
  //RSS14: 条码类型常量，RSS 14组合码，数值为14
  const RSS14 = 14;
  //RSSEXPANDED: 条码类型常量，扩展式RSS组合码，数值为15
  const RSSEXPANDED = 15;

  //直属成员
  function scan(
    path: string,
    successCB?: BarcodeSuccessCallback,
    errorCB?: BarcodeErrorCallback,
    filters?: Array<number>
  );

  class Barcode {
    constructor(id: string, filters?: Array<number>, styles?: BarcodeStyles);
    // Methods
    start(options?: BarcodeOptions): void;
    cancel(): void;
    close(): void;
    setFlash(open?: boolean): void;

    // Events
    onmarked: BarcodeSuccessCallback;
    onerror: BarcodeErrorCallback;
  }

  interface BarcodeOptions {
    /**
     * 是否保存成功扫描到的条码数据时的截图
     * @description 如果设置为true则在成功扫描到条码数据时将图片保存，并通过onmarked回调函数的file参数返回保存文件的路径。默认值为false，不保存图片。
     */
    conserve?: boolean;
    /**
     * 保存成功扫描到的条码数据时的图片路径
     * @description 可通过此参数设置保存截图的路径或名称，如果设置图片文件名称则必须指定文件的后缀名（必须是.png），否则认为是指定目录，文件名称则自动生成
     */
    filename?: string;
    /**
     * 成功扫描到条码数据时是否需要震动提醒
     * @description 如果设置为true则在成功扫描到条码数据时震动设备，false则不震动。默认值为true。
     */
    vibrate?: string;
    /**
     * 成功扫描到条码数据时播放的提示音类型
     * @description 可取值： "none" - 不播放提示音； "default" - 播放默认提示音（5+引擎内置）。 默认值为"default"。
     */
    sound?: string;
  }

  //回调委托
  interface BarcodeSuccessCallback {
    (type: number, code: string, file?: string): void | any; ////匿名方法委托
  }

  interface BarcodeErrorCallback {
    (error?: DOMException): void | any; //匿名方法委托
  }

  interface BarcodeStyles {
    //frameColor: (String 类型 )扫描框颜色
    frameColor?: string;
    //scanbarColor: (String 类型 )扫描条颜色
    scanbarColor?: string;
    //background: (String 类型 )条码识别控件背景颜色
    background?: string;
  }
}
