import IModel from '../../core/interface/IModel';
import AppleAppStoreVerifyReceiptEvent from './AppleAppStoreVerifyReceiptEvent';
import GooglePlayVerifyReceiptEvent from './GooglePlayVerifyReceiptEvent';
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
    getAppleAppStoreVerifyReceiptEvent(): AppleAppStoreVerifyReceiptEvent | null;
    setAppleAppStoreVerifyReceiptEvent(appleAppStoreVerifyReceiptEvent: AppleAppStoreVerifyReceiptEvent | null): this;
    withAppleAppStoreVerifyReceiptEvent(appleAppStoreVerifyReceiptEvent: AppleAppStoreVerifyReceiptEvent | null): this;
    getGooglePlayVerifyReceiptEvent(): GooglePlayVerifyReceiptEvent | null;
    setGooglePlayVerifyReceiptEvent(googlePlayVerifyReceiptEvent: GooglePlayVerifyReceiptEvent | null): this;
    withGooglePlayVerifyReceiptEvent(googlePlayVerifyReceiptEvent: GooglePlayVerifyReceiptEvent | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): VerifyReceiptEvent | null;
    toDict(): {
        [key: string]: any;
    };
}
