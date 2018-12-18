/**
 * Typescript 声明文件
 * @author westsky
 * @description Html 5+ plus.contacts
 * Contacts模块管理系统通讯录，用于可对系统通讯录进行增、删、改、查等操作。通过plus.contacts获取系统通讯录管理对象。
 *
 */

/**
 * 联系人
 */
declare namespace plus.contacts {
  /**
   * 通讯录类型常量，数值类型，固定值为0，用于获取系统的联系人信息。
   */
  const ADDRESSBOOK_PHONE = 0;
  /**
   * 通讯录类型常量，数值类型，固定值为1，用于获取SIM卡上的联系人信息。
   */
  const ADDRESSBOOK_SIM = 1;

  interface AddressBook {
    create(): Contact;
    find(
      contactFields: String[],
      successCB: FindSuccessCallback,
      errorCB?: ContactsErrorCallback,
      findOptions?: ContactFindOption
    ): void;
  }
  interface Contact {
    readonly id: String;
    displayName: String;
    name: ContactName;
    nickname: String;
    phoneNumbers: ContactField[];
    emails: ContactField[];
    addresses: ContactAddress[];
    ims: ContactField[];
    organizations: ContactOrganization[];
    birthday: Date;
    note: String;
    photos: ContactField[];
    categories: ContactField[];
    urls: ContactField[];
    clone(): Contact;
    remove(successCB, errorCB): void;
    save(successCB, errorCB): void;
  }
  interface ContactName {
    formatted: String;
    familyName: String;
    givenName: String;
    middleName: String;
    honorificPrefix: String;
    honorificSuffix: String;
  }

  interface ContactField {
    type: String;
    value: String;
    preferred: Boolean;
  }
  interface ContactName {
    formatted: String;
    familyName: String;
    givenName: String;
    middleName: String;
    honorificPrefix: String;
    honorificSuffix: String;
  }

  interface ContactAddress {
    type: String;
    formatted: String;
    streetAddress: String;
    locality: String;
    region: String;
    country: String;
    postalCode: String;
    preferred: Boolean;
  }
  interface ContactOrganization {
    type: String;
    name: String;
    department: String;
    title: String;
    preferred: Boolean;
  }

  interface ContactFindOption {
    filter: ContactFindFilter[];
    multiple: Boolean;
  }

  interface ContactFindFilter {
    logic: String;
    field: String;
    value: String;
  }
  /**
   * 获取通讯录对象
   * @description 根据指定通讯录类型获取通讯录对象，获取通讯录对象后可对其进行增、删、改操作。
   * @param type  要获取的通讯录类型, 可取通讯录类型常量，可获取手机通讯录或SIM卡通讯录。
   * @param succesCB
   * @param errorCB
   */
  function getAddressBook(
    type: Number,
    succesCB: AddressBookSuccessCallback,
    errorCB?: ContactsErrorCallback
  ): void;

  interface FindSuccessCallback {
    onSuccess(contacts: Contact): void;
  }
  interface AddressBookSuccessCallback {
    onSuccess(addressbook: AddressBook): void;
  }

  interface ContactsErrorCallback {
    (error?: DOMException): void | any; //匿名方法委托
  }
}
