/**
 * Typescript 声明文件
 * @author westsky
 * @description Html 5+ plus.downloader
 */
declare namespace plus.downloader{

    //----method
    function createDownload(url:string,options?:DownloadOptions,completedCB?:DownloadCompletedCallback):Download;
    /*枚举下载任务*/
    /**
     * 
     * @param enumCB 枚举下载任务回调函数 枚举下载任务完成时触发。
     * @param state 如果未指定state值，则枚举所有未完成的下载任务。
     */
    function enumerate(enumCB:DownloadEnumerateCallback,state?:DownloadState):void;

    /**
     * 清除下载任务
     * @param state 清除下载任务的状态 如果未指定state值，则清除所有未完成的下载任务。
     */
    function clear(state?:DownloadState):void;

    /**
     * 开始所有处于为开始调度或暂停状态的下载任务。 若下载任务数超过可并发处理的总数，超出的任务处于调度状态（等待下载），当有任务完成时根据调度状态任务的优先级选择任务开始下载。
     */
    function startAll():void;

    //----callback method
    /**
     * 下载任务完成时的回调函数，在下载任务完成时调用。 下载任务失败也将触发此回调。
     * 
     */
    interface DownloadCompletedCallback{
        /**
         * 下载任务对象 download
         * 下载结果状态码 status HTTP传输协议状态码，如果未获取传输状态则其值则为0，如下载成功其值通常为200。
         */
        (download:Download,status:number):void;
    }
    /**
     * 下载任务状态变化回调
     */
    interface DownloadStateChangedCallback{
        /**
         * 下载任务对象 download
         * 下载结果状态码 status HTTP传输协议状态码，如果未获取传输状态则其值则为0，如下载成功其值通常为200。
         */
        (download:Download,status:number):void;
    }
    /**
     * 枚举到的下载任务对象数组
     */
    interface DownloadEnumerateCallback{
         /**
         * 下载任务对象 download
         *Array[Download]
         */
        (downloads?:any):void;
    }
    //---param
    /**
     * Download对象管理一个下载任务
     */
    interface Download {
        //下载任务的标识
        readonly id:string;
        //下载文件的地址
        readonly url:string;
        //任务的状态
        readonly state:number;
        //下载任务的参数
        readonly options:DownloadOptions;
        //下载的文件名称
        readonly filename:string;
        //已完成下载文件的大小
        readonly downloadedSize:number;
        //下载任务文件的总大小
        readonly totalSize:number;
        //取消下载任务
        //如果任务未完成，则终止下载，并从任务列表中删除。 如下载未完成，将删除已下载的临时文件，如果下载已完成，将不删除已下载的文件。
        abort():void;
        //增加下载任务监听，下载任务添加事件监听器后，当监听的事件发生时触发listener回调。
        /**
        *@param type 下载任务事件类型
        *@param listener 当监听的事件发生时，触发设置的回调函数。
        *@param capture  事件流处理顺序，暂不支持
        */
        addEventListener( 
        type:DownloadEvent|any,
        listener?:DownloadStateChangedCallback,
        capture?:boolean 
        ):void;
        /*
        *获取下载请求HTTP响应头部信息
        */
        getAllResponseHeaders():string;
        /*
        *获取下载请求指定的HTTP响应头部的值
        */
        getResponseHeader(headerName:string):string;
        /*
        *
        *暂停下载任务
        */
        pause():void;
        /**
        *恢复暂停的下载任务
        */
        resume():void;
        /**
        *设置下载请求的HTTP头数据
        *@param headerName HTTP请求的头数据名称
        *@param headerValue HTTP请求的头数据值
        */
        setRequestHeader(headerName:string,headerValue:string ):void;
        /**
        *开始下载任务
        */
        start():void;
    }   
     /**
    *DownloadEvent 下载任务事件类型 待完善
     */ 
   class DownloadEvent{
    //载任务状态变化事件
    statechanged:string;
    }
     
    /**
    *下载任务状态 待完成
    */
    class DownloadState{
        undefined:undefined;
        number:number;
        /**
         * 0: (Number 类型 )下载任务开始调度
            调用下载任务的start()方法之后处于此状态，此时下载任务处于可调度下载状态。

            1: (Number 类型 )下载任务开始请求
            下载任务建立网络连接，发送请求到服务器并等待服务器的响应。

            2: (Number 类型 )下载任务请求已经接收
            下载任务网络连接已建立，服务器返回响应，准备传输数据内容。

            3: (Number 类型 )下载任务接收数据
            下载任务接收数据，监听statechanged事件时可多次触发此状态。

            4: (Number 类型 )下载任务已完成
            下载任务完成数据传输并断开连接，下载成功或失败都会设置为此状态。

            5: (Number 类型 )下载任务已暂停
            调用下载任务的pause()方法将任务暂停，此时可调用其resume()方法重新开始下载。

            -1: (Number 类型 )枚举任务状态
            非下载任务状态，泛指所有下载任务的状态，用于enumerate()和clear()操作时指定作用于所有下载任务。
         */
    }
    /**
     * 下载任务参数
     */
    class DownloadOptions{
        //网络请求类型 支持http协议的“GET”、“POST”，默认为“GET”请求。
        method:string;
        //POST请求时提交的数据 仅在网络请求类型method设置为"POST"时有效，"GET"请求时忽略此数据。
        date:string;
        //下载文件保存的路径 保存文件路径仅支持以"_downloads/"、"_doc/"、"_documents/"开头的字符串
        /* 文件路径以文件后缀名结尾（如"_doc/download/a.doc"）表明指定保存文件目录及名称，以“/”结尾则认为指定保存文件的目录（此时程序自动生成文件名）。 如果指定的文件已经存在，则自动在文件名后面加"(i)"，其中i为数字，如果文件名称后面已经是此格式，则数字i递增，如"download(1).doc"。 默认保存目录为（"_downloads"），并自动生成文件名称。*/
        filename:string;
        // 下载任务的优先级 数值类型，数值越大优先级越高，默认优先级值为0。
        priority:number;
        //下载任务超时时间 数值类型，单位为s(秒)，默认值为120s。 超时时间为服务器响应请求的时间（不是下载任务完成的总时间），如果设置为0则表示永远不超时。
        timeout:number;
        //下载任务重试次数 数值类型，默认为重试3次。
        retry:number;
        //下载任务重试间隔时间 数值类型，单位为s(秒)，默认值为30s。
        retryInterval:number;

    }
}