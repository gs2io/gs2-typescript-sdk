import IResult from '../../core/interface/IResult';
import * as Gs2Formation from '../model';
export default class DeletePropertyFormModelMasterResult implements IResult {
    private item;
    getItem(): Gs2Formation.PropertyFormModelMaster | null;
    setItem(item: Gs2Formation.PropertyFormModelMaster | null): this;
    withItem(item: Gs2Formation.PropertyFormModelMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DeletePropertyFormModelMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
