import IResult from '../../core/interface/IResult';
import * as Gs2News from '../model';
export default class DescribeOutputsResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2News.Output[] | null;
    setItems(items: Gs2News.Output[] | null): this;
    withItems(items: Gs2News.Output[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeOutputsResult;
    toDict(): {
        [key: string]: any;
    };
}
