import IResult from '../../core/interface/IResult';
import * as Gs2Money from '../model';
export default class DescribeWalletsByUserIdResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Money.Wallet[] | null;
    setItems(items: Gs2Money.Wallet[] | null): this;
    withItems(items: Gs2Money.Wallet[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeWalletsByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
