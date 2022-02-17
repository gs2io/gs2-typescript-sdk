import IResult from '../../core/interface/IResult';
import * as Gs2Matchmaking from '../model';
export default class DescribeGatheringsResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Matchmaking.Gathering[] | null;
    setItems(items: Gs2Matchmaking.Gathering[] | null): this;
    withItems(items: Gs2Matchmaking.Gathering[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeGatheringsResult;
    toDict(): {
        [key: string]: any;
    };
}
