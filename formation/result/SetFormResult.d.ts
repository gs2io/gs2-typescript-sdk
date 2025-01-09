import IResult from '../../core/interface/IResult';
import * as Gs2Formation from '../model';
export default class SetFormResult implements IResult {
    private item;
    private mold;
    private moldModel;
    private formModel;
    getItem(): Gs2Formation.Form | null;
    setItem(item: Gs2Formation.Form | null): this;
    withItem(item: Gs2Formation.Form | null): this;
    getMold(): Gs2Formation.Mold | null;
    setMold(mold: Gs2Formation.Mold | null): this;
    withMold(mold: Gs2Formation.Mold | null): this;
    getMoldModel(): Gs2Formation.MoldModel | null;
    setMoldModel(moldModel: Gs2Formation.MoldModel | null): this;
    withMoldModel(moldModel: Gs2Formation.MoldModel | null): this;
    getFormModel(): Gs2Formation.FormModel | null;
    setFormModel(formModel: Gs2Formation.FormModel | null): this;
    withFormModel(formModel: Gs2Formation.FormModel | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): SetFormResult;
    toDict(): {
        [key: string]: any;
    };
}
