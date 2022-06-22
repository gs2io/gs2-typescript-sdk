import IResult from '../../core/interface/IResult';
import * as Gs2Formation from '../model';
export default class DeletePropertyFormByUserIdResult implements IResult {
    private item;
    private formModel;
    getItem(): Gs2Formation.PropertyForm | null;
    setItem(item: Gs2Formation.PropertyForm | null): this;
    withItem(item: Gs2Formation.PropertyForm | null): this;
    getFormModel(): Gs2Formation.FormModel | null;
    setFormModel(formModel: Gs2Formation.FormModel | null): this;
    withFormModel(formModel: Gs2Formation.FormModel | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DeletePropertyFormByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
