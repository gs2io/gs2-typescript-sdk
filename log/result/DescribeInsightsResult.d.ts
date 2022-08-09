import IResult from '../../core/interface/IResult';
import * as Gs2Log from '../model';
export default class DescribeInsightsResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Log.Insight[] | null;
    setItems(items: Gs2Log.Insight[] | null): this;
    withItems(items: Gs2Log.Insight[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeInsightsResult;
    toDict(): {
        [key: string]: any;
    };
}
