import IResult from '../../core/interface/IResult';
import * as Gs2Watch from '../model';
export default class DescribeMatchmakingNamespaceMetricsResult implements IResult {
    private items;
    getItems(): Gs2Watch.MatchmakingNamespace[] | null;
    setItems(items: Gs2Watch.MatchmakingNamespace[] | null): this;
    withItems(items: Gs2Watch.MatchmakingNamespace[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeMatchmakingNamespaceMetricsResult;
    toDict(): {
        [key: string]: any;
    };
}
