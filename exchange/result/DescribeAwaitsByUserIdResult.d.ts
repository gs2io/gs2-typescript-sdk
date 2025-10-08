import IResult from '../../core/interface/IResult';
import * as Gs2Exchange from '../model';
export default class DescribeAwaitsByUserIdResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Exchange.Await[] | null;
    setItems(items: Gs2Exchange.Await[] | null): this;
    withItems(items: Gs2Exchange.Await[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeAwaitsByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
