import IResult from '../../core/interface/IResult';
import * as Gs2Gateway from '../model';
export default class DescribeWebSocketSessionsResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Gateway.WebSocketSession[] | null;
    setItems(items: Gs2Gateway.WebSocketSession[] | null): this;
    withItems(items: Gs2Gateway.WebSocketSession[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeWebSocketSessionsResult;
    toDict(): {
        [key: string]: any;
    };
}
