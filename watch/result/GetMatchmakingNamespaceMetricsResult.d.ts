import IResult from '../../core/interface/IResult';
import * as Gs2Watch from '../model';
export default class GetMatchmakingNamespaceMetricsResult implements IResult {
    private item;
    getItem(): Gs2Watch.MatchmakingNamespace | null;
    setItem(item: Gs2Watch.MatchmakingNamespace | null): this;
    withItem(item: Gs2Watch.MatchmakingNamespace | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetMatchmakingNamespaceMetricsResult;
    toDict(): {
        [key: string]: any;
    };
}
