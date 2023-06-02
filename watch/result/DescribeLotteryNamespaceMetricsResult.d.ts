import IResult from '../../core/interface/IResult';
import * as Gs2Watch from '../model';
export default class DescribeLotteryNamespaceMetricsResult implements IResult {
    private items;
    getItems(): Gs2Watch.LotteryNamespace[] | null;
    setItems(items: Gs2Watch.LotteryNamespace[] | null): this;
    withItems(items: Gs2Watch.LotteryNamespace[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeLotteryNamespaceMetricsResult;
    toDict(): {
        [key: string]: any;
    };
}
