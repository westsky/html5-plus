declare namespace plus{
    const device:Device;
    const screen:Screen;
    
    class Device{
        readonly imei:string;
        readonly imsi:string;
        readonly model:string;
        readonly vendor:string;
        readonly uuid:string;

        dial( number:string, confirm:boolean ):void;
        /**
         * 发出蜂鸣声
         * @param times 发出蜂鸣声
         */
        beep( times:number ):void;
    }

    class Screen{
        readonly resolutionHeight:number;
        readonly resolutionWidth:number;
        readonly scale:number;
        readonly dpiX:number;
        readonly dpiY:number;

        setBrightness(brightness:number):void;
        getBrightness():number;
        lockOrientation(orientation:string):void;
        unlockOrientation():void;
    }
}

