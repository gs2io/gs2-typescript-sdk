import IResult from '../../core/interface/IResult';
import * as Gs2Watch from '../model';
export default class GetMatchmakingMetricsResult implements IResult {
    private item;
    getItem(): Gs2Watch.MatchmakingMetrics | null;
    setItem(item: Gs2Watch.MatchmakingMetrics | null): this;
    withItem(item: Gs2Watch.MatchmakingMetrics | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetMatchmakingMetricsResult;
    toDict(): {
        [key: string]: any;
    };
}
