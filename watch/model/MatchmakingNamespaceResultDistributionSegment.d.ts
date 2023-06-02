import IModel from '../../core/interface/IModel';
export default class MatchmakingNamespaceResultDistributionSegment implements IModel {
    private result;
    private count;
    getResult(): string | null;
    setResult(result: string | null): this;
    withResult(result: string | null): this;
    getCount(): number | null;
    setCount(count: number | null): this;
    withCount(count: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): MatchmakingNamespaceResultDistributionSegment | null;
    toDict(): {
        [key: string]: any;
    };
}
