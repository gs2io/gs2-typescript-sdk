import IResult from '../../core/interface/IResult';
import * as Gs2Mission from '../model';
export default class DescribeCompletesByUserIdResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Mission.Complete[] | null;
    setItems(items: Gs2Mission.Complete[] | null): this;
    withItems(items: Gs2Mission.Complete[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeCompletesByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
