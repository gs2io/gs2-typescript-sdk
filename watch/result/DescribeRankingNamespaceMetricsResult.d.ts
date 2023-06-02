import IResult from '../../core/interface/IResult';
import * as Gs2Watch from '../model';
export default class DescribeRankingNamespaceMetricsResult implements IResult {
    private items;
    getItems(): Gs2Watch.RankingNamespace[] | null;
    setItems(items: Gs2Watch.RankingNamespace[] | null): this;
    withItems(items: Gs2Watch.RankingNamespace[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeRankingNamespaceMetricsResult;
    toDict(): {
        [key: string]: any;
    };
}
