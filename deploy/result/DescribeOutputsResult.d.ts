import IResult from '@/gs2/core/interface/IResult';
import * as Gs2Deploy from '../model';
export declare class DescribeOutputsResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Deploy.Output[] | null;
    setItems(items: Gs2Deploy.Output[] | null): this;
    withItems(items: Gs2Deploy.Output[] | null): this;
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
