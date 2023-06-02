import IModel from '../../core/interface/IModel';
export default class LimitNamespaceIncreaseDistributionSegment implements IModel {
    private limitName;
    private count;
    getLimitName(): string | null;
    setLimitName(limitName: string | null): this;
    withLimitName(limitName: string | null): this;
    getCount(): number | null;
    setCount(count: number | null): this;
    withCount(count: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): LimitNamespaceIncreaseDistributionSegment | null;
    toDict(): {
        [key: string]: any;
    };
}
