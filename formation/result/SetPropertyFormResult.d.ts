import IResult from '../../core/interface/IResult';
import * as Gs2Formation from '../model';
export default class SetPropertyFormResult implements IResult {
    private item;
    private propertyFormModel;
    getItem(): Gs2Formation.PropertyForm | null;
    setItem(item: Gs2Formation.PropertyForm | null): this;
    withItem(item: Gs2Formation.PropertyForm | null): this;
    getPropertyFormModel(): Gs2Formation.PropertyFormModel | null;
    setPropertyFormModel(propertyFormModel: Gs2Formation.PropertyFormModel | null): this;
    withPropertyFormModel(propertyFormModel: Gs2Formation.PropertyFormModel | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): SetPropertyFormResult;
    toDict(): {
        [key: string]: any;
    };
}
