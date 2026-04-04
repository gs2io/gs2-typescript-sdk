import IResult from '../../core/interface/IResult';
import * as Gs2Log from '../model';
export default class DescribeFacetModelsResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Log.FacetModel[] | null;
    setItems(items: Gs2Log.FacetModel[] | null): this;
    withItems(items: Gs2Log.FacetModel[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeFacetModelsResult;
    toDict(): {
        [key: string]: any;
    };
}
