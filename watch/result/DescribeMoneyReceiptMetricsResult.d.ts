import IResult from '../../core/interface/IResult';
import * as Gs2Watch from '../model';
export default class DescribeMoneyReceiptMetricsResult implements IResult {
    private items;
    getItems(): Gs2Watch.MoneyReceipt[] | null;
    setItems(items: Gs2Watch.MoneyReceipt[] | null): this;
    withItems(items: Gs2Watch.MoneyReceipt[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeMoneyReceiptMetricsResult;
    toDict(): {
        [key: string]: any;
    };
}
