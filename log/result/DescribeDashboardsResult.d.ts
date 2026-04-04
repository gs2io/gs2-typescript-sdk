import IResult from '../../core/interface/IResult';
import * as Gs2Log from '../model';
export default class DescribeDashboardsResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Log.Dashboard[] | null;
    setItems(items: Gs2Log.Dashboard[] | null): this;
    withItems(items: Gs2Log.Dashboard[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeDashboardsResult;
    toDict(): {
        [key: string]: any;
    };
}
