import IResult from '@/gs2/core/interface/IResult';
import * as Gs2Deploy from '../model';
export declare class DescribeEventsResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Deploy.Event[] | null;
    setItems(items: Gs2Deploy.Event[] | null): this;
    withItems(items: Gs2Deploy.Event[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeEventsResult;
    toDict(): {
        [key: string]: any;
    };
}
