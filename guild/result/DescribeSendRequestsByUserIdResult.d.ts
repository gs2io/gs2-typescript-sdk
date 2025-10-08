import IResult from '../../core/interface/IResult';
import * as Gs2Guild from '../model';
export default class DescribeSendRequestsByUserIdResult implements IResult {
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
    }): DescribeSendRequestsByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
