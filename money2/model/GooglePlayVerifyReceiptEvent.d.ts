import IModel from '../../core/interface/IModel';
export default class GooglePlayVerifyReceiptEvent implements IModel {
    private purchaseToken;
    getPurchaseToken(): string | null;
    setPurchaseToken(purchaseToken: string | null): this;
    withPurchaseToken(purchaseToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GooglePlayVerifyReceiptEvent | null;
    toDict(): {
        [key: string]: any;
    };
}
