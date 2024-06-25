import IResult from '../../core/interface/IResult';
import * as Gs2Money2 from '../model';
export default class DescribeWalletsResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Money2.Wallet[] | null;
    setItems(items: Gs2Money2.Wallet[] | null): this;
    withItems(items: Gs2Money2.Wallet[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeWalletsResult;
    toDict(): {
        [key: string]: any;
    };
}
