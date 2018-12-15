/**
 * Typescript 声明文件
 * @author westsky
 * @namespace nativejs
 * @description
 *    Accelerometer模块管理设备加速度传感器，用于获取设备加速度信息，
 *    <p>包括x（屏幕水平方向）、y（垂直屏幕水平方向）、z（垂直屏幕平面方向）三个方向的加速度信息。
 *    通过plus.accelerometer获取设备加速度传感器管理对象。
 */
declare namespace plus {
  let os: OsSystem;
  let android: Android;
  let ios: Ios;
}

declare class ClassObject {
  LOCATION_SERVICE: string | any;
  GPS_PROVIDER: string | any;
  authorizationStatus();
  isProviderEnabled(name: string);
}
declare class InstanceObject {
  getSystemService(name: string): ClassObject;
}

declare abstract class OsSystem {
  /**
   * 是否包含系统流
   */
  stream: any;

  name: string;

  /**
   * 导入Java类对象
   * @param classname
   */
  importClass(classname: string): ClassObject;

  /**
   * 创建实例对象
   * @param classname 要创建实例对象的类名，使用"."分割命名空间如果指定的类名不存在，则创建对象失败，不会抛出异常。
   * @param args 创建实例对象的构造参数, 如果指定的构造参数类型不区配，则创建对象失败，不会抛出异常。
   */
  newObject(classname: string, args?: object): InstanceObject;

  /**
   * 调用对象（类对象/实例对象）的方法
   * @param obj 调用方法所属的对象
   * @param name
   * @param args
   */
  invoke(
    obj: object | ClassObject | string,
    name: string,
    ...args: object[]
  ): object | InstanceObject;

  /**
   * 实现Interface的方法
   * @param name Interface的名称，也可以是自定的字符串名称
   * @param obj SON对象类型，Interface实现方法的定义
   */
  implements(name: string, obj: string | any): object | InstanceObject;
  /**
   * 获取当前Webview窗口对象的native层实例对象
   */
  currentWebview(): InstanceObject;
}

declare class Android extends OsSystem {
  /**
   * 获取对象（类对象/实例对象）的属性值
   */
  getAttribute(
    obj: object | ClassObject | string,
    name: string
  ): object | InstanceObject;

  /**
     * 设置对象（类对象/实例对象）的属性值
     * @param obj 要设置属性值的对象，也可以是类的名称
                如果obj为实例对象（InstanceObject），则设置的是实例的属性值； 如果obj为类对象（ClassObject），
                则设置的是类的静态属性值；如果obj为字符串类型，其值必须是类的名称，则设置是类的静态属性值
        * @param name 要设置的属性名称
        * @param value 要设置的属性值
        */
  setAttribute(obj: InstanceObject, name: string, value: object): void;

  /**
   * 获取应用主Activity实例对象
   */
  runtimeMainActivity(): InstanceObject;

  import(classname: string): ClassObject;
}

declare class Ios extends OsSystem {
  /**
   *  销毁实例对象
   * @param obj
   */
  deleteObject(obj: object): void;
  import(classname: string): ClassObject;
}
