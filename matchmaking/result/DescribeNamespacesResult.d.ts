import IResult from '../../core/interface/IResult';
import * as Gs2Matchmaking from '../model';
export default class DescribeNamespacesResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Matchmaking.Namespace[] | null;
    setItems(items: Gs2Matchmaking.Namespace[] | null): this;
    withItems(items: Gs2Matchmaking.Namespace[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeNamespacesResult;
    toDict(): {
        [key: string]: any;
    };
}
