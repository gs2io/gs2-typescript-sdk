import IResult from '../../core/interface/IResult';
import * as Gs2Guild from '../model';
export default class DescribeSendRequestsResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Guild.SendMemberRequest[] | null;
    setItems(items: Gs2Guild.SendMemberRequest[] | null): this;
    withItems(items: Gs2Guild.SendMemberRequest[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeSendRequestsResult;
    toDict(): {
        [key: string]: any;
    };
}
