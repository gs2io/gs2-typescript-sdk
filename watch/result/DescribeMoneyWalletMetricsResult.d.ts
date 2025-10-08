import IResult from '../../core/interface/IResult';
import * as Gs2Watch from '../model';
export default class DescribeMoneyWalletMetricsResult implements IResult {
    private items;
    getItems(): Gs2Watch.MoneyWallet[] | null;
    setItems(items: Gs2Watch.MoneyWallet[] | null): this;
    withItems(items: Gs2Watch.MoneyWallet[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeMoneyWalletMetricsResult;
    toDict(): {
        [key: string]: any;
    };
}
