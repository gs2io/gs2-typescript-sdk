import IResult from '../../core/interface/IResult';
import * as Gs2Schedule from '../model';
export default class DescribeEventMastersResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Schedule.EventMaster[] | null;
    setItems(items: Gs2Schedule.EventMaster[] | null): this;
    withItems(items: Gs2Schedule.EventMaster[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeEventMastersResult;
    toDict(): {
        [key: string]: any;
    };
}
