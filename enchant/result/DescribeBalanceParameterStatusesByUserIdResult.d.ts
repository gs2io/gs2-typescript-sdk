import IResult from '../../core/interface/IResult';
import * as Gs2Enchant from '../model';
export default class DescribeBalanceParameterStatusesByUserIdResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Enchant.BalanceParameterStatus[] | null;
    setItems(items: Gs2Enchant.BalanceParameterStatus[] | null): this;
    withItems(items: Gs2Enchant.BalanceParameterStatus[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeBalanceParameterStatusesByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
