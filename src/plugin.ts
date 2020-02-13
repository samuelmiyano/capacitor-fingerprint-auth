import { Plugins } from '@capacitor/core';
import { IFingerPrintAuthPlugin, AvailableOptions, VerifyOptions } from './definitions';
const { FingerPrintAuthPlugin } = Plugins;
export class FingerPrintAuth implements IFingerPrintAuthPlugin {
  available(): Promise<AvailableOptions> {
    return FingerPrintAuthPlugin.available();
  }
  verify(options: VerifyOptions): Promise<any> {
    return FingerPrintAuthPlugin.verify(options);
  }
  verifyWithFallback(options: VerifyOptions): Promise<any> {
    return FingerPrintAuthPlugin.verifyWithFallback(options);
  }
}

