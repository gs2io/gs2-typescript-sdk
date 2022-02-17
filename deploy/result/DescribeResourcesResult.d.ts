import IResult from '@/gs2/core/interface/IResult';
import * as Gs2Deploy from '../model';
export declare class DescribeResourcesResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Deploy.Resource[] | null;
    setItems(items: Gs2Deploy.Resource[] | null): this;
    withItems(items: Gs2Deploy.Resource[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeResourcesResult;
    toDict(): {
        [key: string]: any;
    };
}
