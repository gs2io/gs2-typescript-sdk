import IResult from '../../core/interface/IResult';
import * as Gs2Formation from '../model';
export default class SetPropertyFormWithSignatureResult implements IResult {
    private item;
    private proeprtyFormModel;
    getItem(): Gs2Formation.PropertyForm | null;
    setItem(item: Gs2Formation.PropertyForm | null): this;
    withItem(item: Gs2Formation.PropertyForm | null): this;
    getProeprtyFormModel(): Gs2Formation.PropertyFormModel | null;
    setProeprtyFormModel(proeprtyFormModel: Gs2Formation.PropertyFormModel | null): this;
    withProeprtyFormModel(proeprtyFormModel: Gs2Formation.PropertyFormModel | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): SetPropertyFormWithSignatureResult;
    toDict(): {
        [key: string]: any;
    };
}
