import IResult from '../../core/interface/IResult';
import * as Gs2Chat from '../model';
export default class DescribeRoomsResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Chat.Room[] | null;
    setItems(items: Gs2Chat.Room[] | null): this;
    withItems(items: Gs2Chat.Room[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeRoomsResult;
    toDict(): {
        [key: string]: any;
    };
}
