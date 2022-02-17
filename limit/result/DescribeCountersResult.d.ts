import IResult from '../../core/interface/IResult';
import * as Gs2Limit from '../model';
export default class DescribeCountersResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Limit.Counter[] | null;
    setItems(items: Gs2Limit.Counter[] | null): this;
    withItems(items: Gs2Limit.Counter[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeCountersResult;
    toDict(): {
        [key: string]: any;
    };
}
