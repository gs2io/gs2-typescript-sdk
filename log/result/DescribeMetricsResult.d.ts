import IResult from '../../core/interface/IResult';
import * as Gs2Log from '../model';
export default class DescribeMetricsResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Log.MetricModel[] | null;
    setItems(items: Gs2Log.MetricModel[] | null): this;
    withItems(items: Gs2Log.MetricModel[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeMetricsResult;
    toDict(): {
        [key: string]: any;
    };
}
