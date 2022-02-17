import IResult from '../../core/interface/IResult';
import * as Gs2Key from '../model';
export default class DescribeKeysResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Key.Key[] | null;
    setItems(items: Gs2Key.Key[] | null): this;
    withItems(items: Gs2Key.Key[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeKeysResult;
    toDict(): {
        [key: string]: any;
    };
}
