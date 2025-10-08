import IResult from '../../core/interface/IResult';
import * as Gs2Identifier from '../model';
export default class DescribeUsersResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Identifier.User[] | null;
    setItems(items: Gs2Identifier.User[] | null): this;
    withItems(items: Gs2Identifier.User[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeUsersResult;
    toDict(): {
        [key: string]: any;
    };
}
