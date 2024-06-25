import IResult from '../../core/interface/IResult';
import * as Gs2Money2 from '../model';
export default class DescribeEventsByUserIdResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Money2.Event[] | null;
    setItems(items: Gs2Money2.Event[] | null): this;
    withItems(items: Gs2Money2.Event[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeEventsByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
