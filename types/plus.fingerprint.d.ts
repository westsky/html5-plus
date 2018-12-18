/** Fingerprint模块管理指纹识别。
 * @author westsky
 * @description Html 5+ plus.fingerprint
 */

declare namespace plus.fingerprint {
  function isSupport(): Boolean;
  function isKeyguardSecure(): boolean;

  /**
   * 当前设备是否已经录入指纹;
   */
  function isEnrolledFingerprints(): Boolean;
  function authenticate(
    successCB: FingerprintSuccessCallback,
    errorCB: FingerprintErrorCallback,
    options: AuthenticateOptions
  );
  function cancel(): void;

  interface AuthenticateOptions {
    readonly message: String;
  }

  interface FingerprintError {
    readonly UNSUPPORT: Number; // = 1;
    readonly KEYGUARD_INSECURE: Number; // = 2;
    readonly FINGERPRINT_UNENROLLED: Number; // = 3;
    readonly AUTHENTICATE_MISMATCH: Number; //= 4;
    readonly AUTHENTICATE_OVERLIMIT: Number; // = 5;
    readonly CANCEL: Number; // = 6;
    readonly UNKNOWN_ERROR: Number; // = 7;
    readonly code: Number;
    readonly message: String;
  }

  interface FingerprintSuccessCallback {
    onSuccess(): void;
  }

  interface FingerprintErrorCallback {
    (error?: DOMException): void; //匿名方法委托
  }
}
