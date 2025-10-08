import IModel from '../../core/interface/IModel';
import * as Gs2Money2 from '../../money2/model';
export default class RefundEvent implements IModel {
    private contentName;
    private platform;
    private appleAppStoreRefundEvent;
    private googlePlayRefundEvent;
    getContentName(): string | null;
    setContentName(contentName: string | null): this;
    withContentName(contentName: string | null): this;
    getPlatform(): string | null;
    setPlatform(platform: string | null): this;
    withPlatform(platform: string | null): this;
    getAppleAppStoreRefundEvent(): Gs2Money2.AppleAppStoreVerifyReceiptEvent | null;
    setAppleAppStoreRefundEvent(appleAppStoreRefundEvent: Gs2Money2.AppleAppStoreVerifyReceiptEvent | null): this;
    withAppleAppStoreRefundEvent(appleAppStoreRefundEvent: Gs2Money2.AppleAppStoreVerifyReceiptEvent | null): this;
    getGooglePlayRefundEvent(): Gs2Money2.GooglePlayVerifyReceiptEvent | null;
    setGooglePlayRefundEvent(googlePlayRefundEvent: Gs2Money2.GooglePlayVerifyReceiptEvent | null): this;
    withGooglePlayRefundEvent(googlePlayRefundEvent: Gs2Money2.GooglePlayVerifyReceiptEvent | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): RefundEvent | null;
    toDict(): {
        [key: string]: any;
    };
}
