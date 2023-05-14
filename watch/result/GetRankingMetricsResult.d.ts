import IResult from '../../core/interface/IResult';
import * as Gs2Watch from '../model';
export default class GetRankingMetricsResult implements IResult {
    private item;
    getItem(): Gs2Watch.RankingMetrics | null;
    setItem(item: Gs2Watch.RankingMetrics | null): this;
    withItem(item: Gs2Watch.RankingMetrics | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetRankingMetricsResult;
    toDict(): {
        [key: string]: any;
    };
}
