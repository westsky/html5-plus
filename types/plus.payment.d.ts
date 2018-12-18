/**
 * Typescript 声明文件
 * @author westsky
 * @description Html 5+ plus.payment
 */

/**
 * Payment模块管理支付功能，用于提供网页安全支付能力，支持通过Web接口进行支付操作。通过plus.payment可获取支付管理对象。
 */
declare namespace plus.payment {
  function getChannels(
    successCB: ChannelsSuccessCallback,
    errorCB?: PaymentErrorCallback
  ): void;

  /**
   * 请求支付操作
   * @param channel
   * @param statement
   * @param successCB
   * @param errorCB
   */
  function request(
    channel: PaymentChannel,
    statement: String | OrderStatementIAP,
    successCB: PaymentSuccessCallback,
    errorCB?: PaymentErrorCallback
  );

  interface PaymentChannel {
    id: String;
    description: String;
    serviceReady: Boolean;

    installService(): void;

    // iOS iAP
    requestOrder(ids, successCB, errorCB);
    restoreComplateRequest(options, successCB);
  }

  interface OrderStatementIAP {
    productid: String;
    username: String;
    quantity: String;
  }

  interface PaymentResult {
    channel: PaymentChannel;
    tradeno: String;
    description: String;
    url: String;
    signature: String;
    rawdata: String;
  }

  interface IAPProduct {
    productid: String;
    price: String;
    title: String;
    description: String;
  }
  interface IAPProductInfo {
    productIdentifier: String;
    quantity: String;
  }
  interface IAPTransaction {
    payment: IAPProductInfo;
    transactionDate: String;
    transactionIdentifier: String;
    transactionReceipt: String;
    transactionState: String;
  }

  interface ChannelsSuccessCallback {}
  interface IapRestoreComplateRequestCallback {}
  interface PaymentSuccessCallback {}
  /**
   * @description  当支付操作失败时的回调函数，用于返回支付操作失败的错误信息。参数：
   * Android - 2.2+ (支持)
     iOS - 5.0+ (支持)
   */
  interface PaymentErrorCallback {
    /**
       *    
       * @param error 
       *  必选 支付操作失败错误信息，可通过error.code获取错误代码，具体错误码有各支付通道定义
          <p> 支付宝支付错误代码如下：</p>
              62000，客户端未安装支付通道依赖的服务；
              62001，用户取消支付操作； 
              62002，此设备不支持支付； 
              62003，数据格式错误； 
              62004，支付账号状态错误； 
              62005，订单信息错误； 
              62006，支付操作内部错误； 
              62007，支付服务器错误； 
              62008，网络问题引起的错误； 
              62009，其它未定义的错误。 
         <p> 微信支付错误代码如下：</p>
            -1，一般错误； 
            -2，用户取消； 
            -3，发送失败； 
            -4，认证被否决； 
            -5，不支持错误。
       */
    onError(error: DOMException): void;
  }
}
