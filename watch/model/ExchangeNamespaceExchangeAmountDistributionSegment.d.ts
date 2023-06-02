import IModel from '../../core/interface/IModel';
export default class ExchangeNamespaceExchangeAmountDistributionSegment implements IModel {
    private rateName;
    private sum;
    getRateName(): string | null;
    setRateName(rateName: string | null): this;
    withRateName(rateName: string | null): this;
    getSum(): number | null;
    setSum(sum: number | null): this;
    withSum(sum: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ExchangeNamespaceExchangeAmountDistributionSegment | null;
    toDict(): {
        [key: string]: any;
    };
}
