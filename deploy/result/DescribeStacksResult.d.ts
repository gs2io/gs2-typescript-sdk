import IResult from '../../core/interface/IResult';
import * as Gs2Deploy from '../model';
export default class DescribeStacksResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Deploy.Stack[] | null;
    setItems(items: Gs2Deploy.Stack[] | null): this;
    withItems(items: Gs2Deploy.Stack[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeStacksResult;
    toDict(): {
        [key: string]: any;
    };
}
