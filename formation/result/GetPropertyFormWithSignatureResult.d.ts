import IResult from '../../core/interface/IResult';
import * as Gs2Formation from '../model';
export default class GetPropertyFormWithSignatureResult implements IResult {
    private item;
    private body;
    private signature;
    private formModel;
    getItem(): Gs2Formation.PropertyForm | null;
    setItem(item: Gs2Formation.PropertyForm | null): this;
    withItem(item: Gs2Formation.PropertyForm | null): this;
    getBody(): string | null;
    setBody(body: string | null): this;
    withBody(body: string | null): this;
    getSignature(): string | null;
    setSignature(signature: string | null): this;
    withSignature(signature: string | null): this;
    getFormModel(): Gs2Formation.FormModel | null;
    setFormModel(formModel: Gs2Formation.FormModel | null): this;
    withFormModel(formModel: Gs2Formation.FormModel | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetPropertyFormWithSignatureResult;
    toDict(): {
        [key: string]: any;
    };
}
