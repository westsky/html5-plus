declare namespace plus.io {
  //应用运行资源目录常量
  const PRIVATE_WWW: number;
  //应用私有文档目录常量
  const PRIVATE_DOC: number;
  //程序公用文档目录常量
  const PUBLIC_DOCUMENTS: number;
  //程序公用下载目录常量
  const PUBLIC_DOWNLOADS: number;
  //----方法： function
  /**通过URL参数获取目录对象或文件对象 */
  function resolveLocalFileSystemURL(
    url: string,
    succesCB: FileResolveSuccessCallback,
    errorCB?: FileErrorCallback
  ): void;
  //----回调方法：back function
  /**获取文件或目录状态信息成功的回调函数*/
  interface MetadataSuccessCallback {
    (metadata: Metadata): void;
  }
  /** EntrySuccessCallback 操作文件或目录对象成功的回调函数*/
  interface EntrySuccessCallback {
    (entry: DirectoryEntry): void;
  }
  interface FileResolveSuccessCallback {
    (entry: DirectoryEntry | FileEntry): void;
  }

  interface FileErrorCallback {
    (error: DOMException): void;
  }
  //-------对象：
  /**
   * 文件系统对象，用于管理特定本地文件目录
   */
  interface FileSystem {
    readonly name: String;
    readonly root: DirectoryEntry;
  }
  /** JSON对象，保存文件或目录的状态信息对象 */
  interface Metadata {
    modificationTime: Date;
    size: number;
    directoryCount: number;
    fileCount: number;
  }
  /** 文件系统中的目录对象，用于管理特定的本地目录 */
  interface DirectoryEntry {
    //属性
    readonly isFile: boolean;
    readonly isDirectory: boolean;
    readonly name: String;
    readonly fullPath: String;
    readonly fileSystem: FileSystem;
    //-------fangfa
    /**
     *  获取目录的属性
     */
    getMetadata(
      succesCB: MetadataSuccessCallback,
      errorCB: FileErrorCallback,
      recursive: boolean
    ): void;
    /**move file */
    moveTo(
      parent: DirectoryEntry,
      newName?: String,
      succesCB?: EntrySuccessCallback,
      errorCB?: FileErrorCallback
    ): void;
    /** 拷贝目录*/
    copyTo(
      parent: DirectoryEntry,
      neaName?: String,
      succesCB?: EntrySuccessCallback,
      errorCB?: FileErrorCallback
    ): void;
    /** 获取目录路径转换为URL地址 */
    toURL(): String;
    /**获取目录路径转换为本地路径URL地址*/
    toLocalURL(): String;
    /**获取目录路径转换为网络路径URL地址 */
    toRemoteURL(): String;
    /**删除目录 */
    remove(succesCB?: EntrySuccessCallback, errorCB?: FileErrorCallback): void;
    /**获取目录所属的父目录 */
    getParent(
      succesCB?: EntrySuccessCallback,
      errorCB?: FileErrorCallback
    ): void;
    /**创建目录读取对象 */
    createReader(): DirectoryReader;
    /** 创建或打开子目录 */
    getDirectory(
      path: String,
      flag?: Flags,
      succesCB?: EntrySuccessCallback,
      errorCB?: FileErrorCallback
    ): void;
    /**创建或打开文件 */
    getFile(
      path: String,
      flag?: Flags,
      succesCB?: EntrySuccessCallback,
      errorCB?: FileErrorCallback
    ): void;
    /** 递归删除目录 */
    removeRecursively(
      succesCB?: EntrySuccessCallback,
      errorCB?: FileErrorCallback
    ): void;
  }
  /** 读取目录信息对象，用于获取目录中包含的文件及子目录 */
  interface DirectoryReader {}
  /** 文件系统中的文件数据对象，用于获取文件的数据 */
  interface File {}
  /** 文件系统中的文件对象，用于管理特定的本地文件 */
  interface FileEntry {
    //属性
    readonly isFile: boolean;
    readonly isDirectory: boolean;
    readonly name: string;
    readonly fullPath: string;
    readonly fileSystem: string;

    /**获取文件的属性信息 */
    getMetadata(
      succesCB?: EntrySuccessCallback,
      errorCB?: FileErrorCallback
    ): void;
    /**删除文件 */
    remove(succesCB?: EntrySuccessCallback, errorCB?: FileErrorCallback): void;
    /**移动文件 */
    moveTo(
      parent: DirectoryEntry,
      newName: string,
      succesCB?: EntrySuccessCallback,
      errorCB?: FileErrorCallback
    ): void;
    /**获取目录路径转换为本地路径URL地址*/
    toLocalURL(): String;
  }
  /**JSON对象，获取文件操作的参数 */
  interface Flags {
    create: boolean;
    exclusive: boolean;
  }
}
