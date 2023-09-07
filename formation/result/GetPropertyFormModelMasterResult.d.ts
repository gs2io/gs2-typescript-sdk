import IResult from '../../core/interface/IResult';
import * as Gs2Formation from '../model';
export default class GetPropertyFormModelMasterResult implements IResult {
    private item;
    getItem(): Gs2Formation.PropertyFormModelMaster | null;
    setItem(item: Gs2Formation.PropertyFormModelMaster | null): this;
    withItem(item: Gs2Formation.PropertyFormModelMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetPropertyFormModelMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
