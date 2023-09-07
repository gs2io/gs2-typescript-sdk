import IResult from '../../core/interface/IResult';
import * as Gs2Formation from '../model';
export default class GetPropertyFormModelResult implements IResult {
    private item;
    getItem(): Gs2Formation.PropertyFormModel | null;
    setItem(item: Gs2Formation.PropertyFormModel | null): this;
    withItem(item: Gs2Formation.PropertyFormModel | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetPropertyFormModelResult;
    toDict(): {
        [key: string]: any;
    };
}
