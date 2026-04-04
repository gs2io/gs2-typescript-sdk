import IResult from '../../core/interface/IResult';
import * as Gs2Log from '../model';
export default class DescribeLabelValuesResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Log.Label[] | null;
    setItems(items: Gs2Log.Label[] | null): this;
    withItems(items: Gs2Log.Label[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeLabelValuesResult;
    toDict(): {
        [key: string]: any;
    };
}
