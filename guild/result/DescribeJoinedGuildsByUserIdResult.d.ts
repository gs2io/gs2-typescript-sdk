import IResult from '../../core/interface/IResult';
import * as Gs2Guild from '../model';
export default class DescribeJoinedGuildsByUserIdResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Guild.JoinedGuild[] | null;
    setItems(items: Gs2Guild.JoinedGuild[] | null): this;
    withItems(items: Gs2Guild.JoinedGuild[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeJoinedGuildsByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
