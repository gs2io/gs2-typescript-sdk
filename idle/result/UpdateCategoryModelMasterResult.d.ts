import IResult from '../../core/interface/IResult';
import * as Gs2Idle from '../model';
export default class UpdateCategoryModelMasterResult implements IResult {
    private item;
    getItem(): Gs2Idle.CategoryModelMaster | null;
    setItem(item: Gs2Idle.CategoryModelMaster | null): this;
    withItem(item: Gs2Idle.CategoryModelMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateCategoryModelMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
