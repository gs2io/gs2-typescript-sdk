import IResult from '../../core/interface/IResult';
import * as Gs2Log from '../model';
export default class QueryFacetsResult implements IResult {
    private items;
    getItems(): Gs2Log.Facet[] | null;
    setItems(items: Gs2Log.Facet[] | null): this;
    withItems(items: Gs2Log.Facet[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): QueryFacetsResult;
    toDict(): {
        [key: string]: any;
    };
}
