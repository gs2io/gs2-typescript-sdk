import IResult from '../../core/interface/IResult';
import * as Gs2Formation from '../model';
export default class UpdateCurrentFormMasterResult implements IResult {
    private item;
    getItem(): Gs2Formation.CurrentFormMaster | null;
    setItem(item: Gs2Formation.CurrentFormMaster | null): this;
    withItem(item: Gs2Formation.CurrentFormMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateCurrentFormMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
