import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class MoneyReceiptDistributions implements IModel {
    private verificationByUser;
    getVerificationByUser(): Gs2Watch.MoneyReceiptVerificationByUserDistribution | null;
    setVerificationByUser(verificationByUser: Gs2Watch.MoneyReceiptVerificationByUserDistribution | null): this;
    withVerificationByUser(verificationByUser: Gs2Watch.MoneyReceiptVerificationByUserDistribution | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): MoneyReceiptDistributions | null;
    toDict(): {
        [key: string]: any;
    };
}
