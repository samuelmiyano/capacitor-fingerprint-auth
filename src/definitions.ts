declare global {
  interface PluginRegistry {
    FingerPrintAuthPlugin?: IFingerPrintAuthPlugin;
  }
}

export interface AvailableOptions {
  has: boolean;
  face: boolean;
  touch: boolean;
}

export interface VerifyOptions {
  message: string;
  fallbackTitle?: string;
  cancelTitle?:string;
}

export interface IFingerPrintAuthPlugin {
  available(): Promise<AvailableOptions>;
  verify(options: VerifyOptions): Promise<any>;
  verifyWithFallback(options: VerifyOptions): Promise<any>;
}
