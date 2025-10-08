import IResult from '../../core/interface/IResult';
import * as Gs2Dictionary from '../model';
export default class DescribeLikesResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Dictionary.Like[] | null;
    setItems(items: Gs2Dictionary.Like[] | null): this;
    withItems(items: Gs2Dictionary.Like[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeLikesResult;
    toDict(): {
        [key: string]: any;
    };
}
