import IModel from '../../core/interface/IModel';
export default class ExchangeNamespaceExchangeDistributionSegment implements IModel {
    private rateName;
    private count;
    getRateName(): string | null;
    setRateName(rateName: string | null): this;
    withRateName(rateName: string | null): this;
    getCount(): number | null;
    setCount(count: number | null): this;
    withCount(count: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ExchangeNamespaceExchangeDistributionSegment | null;
    toDict(): {
        [key: string]: any;
    };
}
