import IResult from '../../core/interface/IResult';
import * as Gs2Log from '../model';
export default class DeleteFacetModelResult implements IResult {
    private item;
    getItem(): Gs2Log.FacetModel | null;
    setItem(item: Gs2Log.FacetModel | null): this;
    withItem(item: Gs2Log.FacetModel | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DeleteFacetModelResult;
    toDict(): {
        [key: string]: any;
    };
}
