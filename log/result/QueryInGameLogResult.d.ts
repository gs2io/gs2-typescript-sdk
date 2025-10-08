import IResult from '../../core/interface/IResult';
import * as Gs2Log from '../model';
export default class QueryInGameLogResult implements IResult {
    private items;
    private nextPageToken;
    private totalCount;
    private scanSize;
    getItems(): Gs2Log.InGameLog[] | null;
    setItems(items: Gs2Log.InGameLog[] | null): this;
    withItems(items: Gs2Log.InGameLog[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    getTotalCount(): number | null;
    setTotalCount(totalCount: number | null): this;
    withTotalCount(totalCount: number | null): this;
    getScanSize(): number | null;
    setScanSize(scanSize: number | null): this;
    withScanSize(scanSize: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): QueryInGameLogResult;
    toDict(): {
        [key: string]: any;
    };
}
