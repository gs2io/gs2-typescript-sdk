import IResult from '../../core/interface/IResult';
import * as Gs2Watch from '../model';
export default class GetRankingNamespaceMetricsResult implements IResult {
    private item;
    getItem(): Gs2Watch.RankingNamespace | null;
    setItem(item: Gs2Watch.RankingNamespace | null): this;
    withItem(item: Gs2Watch.RankingNamespace | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetRankingNamespaceMetricsResult;
    toDict(): {
        [key: string]: any;
    };
}
