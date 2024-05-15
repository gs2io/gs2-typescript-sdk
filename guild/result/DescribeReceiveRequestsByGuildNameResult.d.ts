import IResult from '../../core/interface/IResult';
import * as Gs2Guild from '../model';
export default class DescribeReceiveRequestsByGuildNameResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Guild.ReceiveMemberRequest[] | null;
    setItems(items: Gs2Guild.ReceiveMemberRequest[] | null): this;
    withItems(items: Gs2Guild.ReceiveMemberRequest[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeReceiveRequestsByGuildNameResult;
    toDict(): {
        [key: string]: any;
    };
}
