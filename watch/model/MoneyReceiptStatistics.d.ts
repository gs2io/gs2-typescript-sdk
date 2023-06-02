import IModel from '../../core/interface/IModel';
export default class MoneyReceiptStatistics implements IModel {
    private verification;
    getVerification(): number | null;
    setVerification(verification: number | null): this;
    withVerification(verification: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): MoneyReceiptStatistics | null;
    toDict(): {
        [key: string]: any;
    };
}
