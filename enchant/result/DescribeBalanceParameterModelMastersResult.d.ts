import IResult from '../../core/interface/IResult';
import * as Gs2Enchant from '../model';
export default class DescribeBalanceParameterModelMastersResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Enchant.BalanceParameterModelMaster[] | null;
    setItems(items: Gs2Enchant.BalanceParameterModelMaster[] | null): this;
    withItems(items: Gs2Enchant.BalanceParameterModelMaster[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeBalanceParameterModelMastersResult;
    toDict(): {
        [key: string]: any;
    };
}
