import IResult from '../../core/interface/IResult';
import * as Gs2Formation from '../model';
export default class GetFormModelResult implements IResult {
    private item;
    getItem(): Gs2Formation.FormModel | null;
    setItem(item: Gs2Formation.FormModel | null): this;
    withItem(item: Gs2Formation.FormModel | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetFormModelResult;
    toDict(): {
        [key: string]: any;
    };
}
