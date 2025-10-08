import IResult from '../../core/interface/IResult';
import * as Gs2Guild from '../model';
export default class SearchGuildsByUserIdResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Guild.Guild[] | null;
    setItems(items: Gs2Guild.Guild[] | null): this;
    withItems(items: Gs2Guild.Guild[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): SearchGuildsByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
