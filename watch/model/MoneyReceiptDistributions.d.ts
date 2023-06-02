import IModel from '../../core/interface/IModel';
import MoneyReceiptVerificationByUserDistribution from './MoneyReceiptVerificationByUserDistribution';
export default class MoneyReceiptDistributions implements IModel {
    private verificationByUser;
    getVerificationByUser(): MoneyReceiptVerificationByUserDistribution | null;
    setVerificationByUser(verificationByUser: MoneyReceiptVerificationByUserDistribution | null): this;
    withVerificationByUser(verificationByUser: MoneyReceiptVerificationByUserDistribution | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): MoneyReceiptDistributions | null;
    toDict(): {
        [key: string]: any;
    };
}
