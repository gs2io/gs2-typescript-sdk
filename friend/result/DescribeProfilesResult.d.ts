import IResult from '@/gs2/core/interface/IResult';
import * as Gs2Friend from '../model';
export declare class DescribeProfilesResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Friend.Profile[] | null;
    setItems(items: Gs2Friend.Profile[] | null): this;
    withItems(items: Gs2Friend.Profile[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeProfilesResult;
    toDict(): {
        [key: string]: any;
    };
}
