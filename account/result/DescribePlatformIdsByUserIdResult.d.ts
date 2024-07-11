import IResult from '../../core/interface/IResult';
import * as Gs2Account from '../model';
export default class DescribePlatformIdsByUserIdResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Account.PlatformId[] | null;
    setItems(items: Gs2Account.PlatformId[] | null): this;
    withItems(items: Gs2Account.PlatformId[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribePlatformIdsByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
