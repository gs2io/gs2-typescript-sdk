import IResult from '../../core/interface/IResult';
import * as Gs2News from '../model';
export default class DescribeProgressesResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2News.Progress[] | null;
    setItems(items: Gs2News.Progress[] | null): this;
    withItems(items: Gs2News.Progress[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeProgressesResult;
    toDict(): {
        [key: string]: any;
    };
}
