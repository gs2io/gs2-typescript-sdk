import IModel from '../../core/interface/IModel';
import * as Gs2Money2 from '../../money2/model';
export default class VerifyReceiptEvent implements IModel {
    private contentName;
    private platform;
    private appleAppStoreVerifyReceiptEvent;
    private googlePlayVerifyReceiptEvent;
    getContentName(): string | null;
    setContentName(contentName: string | null): this;
    withContentName(contentName: string | null): this;
    getPlatform(): string | null;
    setPlatform(platform: string | null): this;
    withPlatform(platform: string | null): this;
    getAppleAppStoreVerifyReceiptEvent(): Gs2Money2.AppleAppStoreVerifyReceiptEvent | null;
    setAppleAppStoreVerifyReceiptEvent(appleAppStoreVerifyReceiptEvent: Gs2Money2.AppleAppStoreVerifyReceiptEvent | null): this;
    withAppleAppStoreVerifyReceiptEvent(appleAppStoreVerifyReceiptEvent: Gs2Money2.AppleAppStoreVerifyReceiptEvent | null): this;
    getGooglePlayVerifyReceiptEvent(): Gs2Money2.GooglePlayVerifyReceiptEvent | null;
    setGooglePlayVerifyReceiptEvent(googlePlayVerifyReceiptEvent: Gs2Money2.GooglePlayVerifyReceiptEvent | null): this;
    withGooglePlayVerifyReceiptEvent(googlePlayVerifyReceiptEvent: Gs2Money2.GooglePlayVerifyReceiptEvent | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): VerifyReceiptEvent | null;
    toDict(): {
        [key: string]: any;
    };
}
