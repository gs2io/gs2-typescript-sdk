import IResult from '../../core/interface/IResult';
import * as Gs2Log from '../model';
export default class CountExecuteStampSheetLogResult implements IResult {
    private items;
    private nextPageToken;
    private totalCount;
    private scanSize;
    getItems(): Gs2Log.ExecuteStampSheetLogCount[] | null;
    setItems(items: Gs2Log.ExecuteStampSheetLogCount[] | null): this;
    withItems(items: Gs2Log.ExecuteStampSheetLogCount[] | null): this;
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
    }): CountExecuteStampSheetLogResult;
    toDict(): {
        [key: string]: any;
    };
}
