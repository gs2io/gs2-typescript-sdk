import IResult from '../../core/interface/IResult';
import * as Gs2Guild from '../model';
export default class DescribeIgnoreUsersByGuildNameResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Guild.IgnoreUser[] | null;
    setItems(items: Gs2Guild.IgnoreUser[] | null): this;
    withItems(items: Gs2Guild.IgnoreUser[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeIgnoreUsersByGuildNameResult;
    toDict(): {
        [key: string]: any;
    };
}
