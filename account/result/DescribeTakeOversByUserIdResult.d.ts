import IResult from '../../core/interface/IResult';
import * as Gs2Account from '../model';
export default class DescribeTakeOversByUserIdResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Account.TakeOver[] | null;
    setItems(items: Gs2Account.TakeOver[] | null): this;
    withItems(items: Gs2Account.TakeOver[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeTakeOversByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
