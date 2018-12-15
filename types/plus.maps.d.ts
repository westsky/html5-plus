
/**
 * Typescript 声明文件
 * @author westsky
 * @description Html 5+ plus.maps
 */

declare namespace plus.maps{
    //function 
    function openSysMap(dst:Point,des:string,src:Point):void;

    //------------对象---------------------
    /** 地图控件对象 */
    class Map{
        constructor(id:string,options?:MapOptions);
        //方法 
        /**静态方法计算面积 */
        static calculateArea(bounds:Bounds,successCallback?:AreaCalculateCallback,errorCallback?:ErrorCallback):void;
        /**静态方法，计算距离 */
        static calculateDistance(pointStart:Point,pointEnd?:Point,successCallback?:DistanceCalculateCallback,errorCallback?:ErrorCallback):void;
        /**静态方法，坐标转换 */
        static convertCoordinates(point:Point,options?:CoordinateConvertOptions,successCallback?:CoordinateConvertCallback,errorCallback?:ErrorCallback):void;
        /**静态方法，地理编码；越详细的地址信息越容易转换，如XX路XX号XX大厦。 */
        static geocode(address:string,options?:GeocodeOptions,successCallback?:GeocodeCallback,errorCallback?:ErrorCallback):void;
        /**态方法，反向地理编码*/
        static reverseGeocode(point:Point,options:GeocodeOptions,successCallback:GeocodeCallback,errorCallback:ErrorCallback):void;
        /**关闭地图控件 */
        close():void;
        /**获取用户的当前位置信息 */
        getUserLocation(callback:UserLocationCallback):boolean;
        /**显示地图控件 */
        show():void;
        /**显示当前位置 */
        showUserLocation(display:boolean):void;
        /**resize: 重设地图控件大小 */
        resize():void;
        /**获取地图中心点位置 */
        getCenter():Point;
    }
    /**地图对象的参数 */
    class MapOptions{
        center:Point;
        zoom:number;
        type:MapType;
        traffic:boolean;
        zoomControls:boolean;
        position:string;
    }
    /**
     * 地理编码转换的参数
     * 
    */
   class GeocodeOptions{
    coordType:string;
    city:string;
   }
    /**地图坐标转换的参数 */
    class CoordinateConvertOptions{
        coordType:string;
        /* “wgs84”：表示WGS-84坐标系； “gcj02”：表示国测局经纬度坐标系； 
        “bd09”：表示百度墨卡托坐标系； “bd09ll”：表示百度经纬度坐标系； 默认使用wgs84坐标系。*/
    }
    /**创建Point对象 */
    class Point{
        constructor(lng:number,lat:number);
        //方法 
        /**设置坐标点的经度 */
        setLng(lng:number):void;
        /**获取坐标点的经度 */
        getLng():number;
        /**设置坐标的纬度 */
        setLat(lat:number):void;
        /**获取坐标的纬度 */
        getLat():number;
        /**判断两个坐标点是否相等 */
        equals(pt:Point):boolean;
    }
    /**地理区域 */
    class Bounds{
        constructor(northease:Point,southwest:Point);
        constructor(nelng:number,nelat:number,swlng:number,swlat:number);
        //方法
        /**设置地理区域的东北坐标点 */
        setNorthEase(point:Point):void;
        /**地理区域的东北坐标点 */
        getNorthEase():Point;
        /**设置地理区域的西南坐标点 */
        setSouthWest(point:Point):void;
        /**地理区域的西南坐标点 */
        getSouthWest():Point;
        /**判断制定的坐标是否在地理区域中 */
        contains(point:Point):boolean;
        /**判断两个地理区域是否相等 */
        equals(bounds:Bounds):boolean;
        /**获取地理区域的中心点坐标 */
        getCenter():Point;
    }
    /**地图视图类型 */
    class MapType{
         MAPTYPE_NORMAL:number;
         MAPTYPE_SATELLITE:number;
    }

    //--------回调接口--------------
    /**地理编码转换成功的回调函数 */
    interface GeocodeCallback{
        (event:GeocodeCallbackEvent):void;
    }
    interface GeocodeCallbackEvent extends Event{
        address:string;
        coord:Point;
        coordType:string;
    }
    /**坐标转换成功的回调函数 */
    interface CoordinateConvertCallback{
        (event:CoordinateConvertCallbackEvent):void;
    }
    interface CoordinateConvertCallbackEvent extends Event{
        coord:Point;
        coordType:string;
    }
    /**距离计算成功的回调函数 */
    interface DistanceCalculateCallback{
        (event:DistanceCalculateCallbackEvent):void;
    }
    interface DistanceCalculateCallbackEvent extends Event{
        distance:number;
    }
    /**地理区域面积计算成功的回调函数 */
    interface AreaCalculateCallback{
        (event:AreaCalculateCallbackEvent):void;
    }
    interface AreaCalculateCallbackEvent extends Event{
        area:number;
    }
    /**获取用户当前位置信息成功回调 */
    interface UserLocationCallback{
        (state:number,point:Point):void;
    }
    /**地图操作失败的回调函数 */
    interface ErrorCallback{
        (error: DOMException):void;
    } 
}