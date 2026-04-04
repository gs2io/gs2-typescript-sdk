import IResult from '../../core/interface/IResult';
import * as Gs2Log from '../model';
export default class QueryTimeseriesResult implements IResult {
    private items;
    private timeseriesMetadata;
    private nextPageToken;
    getItems(): Gs2Log.TimeseriesPoint[] | null;
    setItems(items: Gs2Log.TimeseriesPoint[] | null): this;
    withItems(items: Gs2Log.TimeseriesPoint[] | null): this;
    getTimeseriesMetadata(): Gs2Log.TimeseriesMetadata | null;
    setTimeseriesMetadata(timeseriesMetadata: Gs2Log.TimeseriesMetadata | null): this;
    withTimeseriesMetadata(timeseriesMetadata: Gs2Log.TimeseriesMetadata | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): QueryTimeseriesResult;
    toDict(): {
        [key: string]: any;
    };
}
