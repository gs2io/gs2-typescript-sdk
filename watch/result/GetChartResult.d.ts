import IResult from '../../core/interface/IResult';
import * as Gs2Watch from '../model';
export default class GetChartResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Watch.Chart[] | null;
    setItems(items: Gs2Watch.Chart[] | null): this;
    withItems(items: Gs2Watch.Chart[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetChartResult;
    toDict(): {
        [key: string]: any;
    };
}
