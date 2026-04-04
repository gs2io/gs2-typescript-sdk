import IResult from '../../core/interface/IResult';
import * as Gs2Log from '../model';
export default class QueryLogResult implements IResult {
    private items;
    private totalEntryCount;
    private nextPageToken;
    getItems(): Gs2Log.LogEntry[] | null;
    setItems(items: Gs2Log.LogEntry[] | null): this;
    withItems(items: Gs2Log.LogEntry[] | null): this;
    getTotalEntryCount(): number | null;
    setTotalEntryCount(totalEntryCount: number | null): this;
    withTotalEntryCount(totalEntryCount: number | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): QueryLogResult;
    toDict(): {
        [key: string]: any;
    };
}
