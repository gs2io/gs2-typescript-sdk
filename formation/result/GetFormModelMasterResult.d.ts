import IResult from '../../core/interface/IResult';
import * as Gs2Formation from '../model';
export default class GetFormModelMasterResult implements IResult {
    private item;
    getItem(): Gs2Formation.FormModelMaster | null;
    setItem(item: Gs2Formation.FormModelMaster | null): this;
    withItem(item: Gs2Formation.FormModelMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetFormModelMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
